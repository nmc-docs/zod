---
sidebar_position: 7
---

# Custom validation

## refine()

- Ta có thể custom validation bằng phương thức `.refine()`:

:::info

- Phương thức `refine()` nhận vào một callback
- Hàm callback phải trả về `true` hoặc `false`
- Nếu hàm callback trả về `false`, thì tức là có lỗi

:::

```ts
const myString = z.string().refine((val) => val.length <= 255, {
  message: "String can't be more than 255 characters",
});
```

- Validate giữa các trường phụ thuộc nhau trong object:

```ts
const FormValidationSchema = z
  .object({
    password: z.string({ coerce: true }).nonempty("Please enter your password"),
    confirm: z.string(),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Passwords don't match",
    path: ["confirm"], // Hiển thị lỗi cho trường "confirm"
  });
```

## superRefine()

- Nếu muốn custom nhiều validation thì ta phải thực hiện `.refine()` nhiều lần. Để tránh điều đó, sử dụng `.superRefine()`:

```ts
const FormValidationSchema = z
  .object({
    password: z.string({ coerce: true }).nonempty("Please enter your password"),
    confirm: z.string(),
  })
  .superRefine(({ password, confirm }, ctx) => {
    if (password !== confirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password don't match",
        path: ["confirm"],
      });
    }
    if (password.length < 8) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is too short",
        path: ["password"],
      });
    }
  });
```
