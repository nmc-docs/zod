---
sidebar_position: 4
---

# Custom validation

## `.refine()`

- Ta có thể custom validation bằng phương thức `.refine()`:

:::info

- Phương thức `refine()` nhận vào một callback
- Hàm callback phải trả về `true` hoặc `false`
- Nếu hàm callback trả về `false`, thì tức là có lỗi

:::

### `error`

```ts
const myString = z.string().refine((val) => val.length <= 255, {
  error: "String can't be more than 255 characters",
});
```

### `path`

- Validate giữa các trường phụ thuộc nhau trong object:

```ts
const passwordForm = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });
```

### `abort`

- Theo mặc định, các vấn đề xác thực từ các lần kiểm tra được coi là liên tục; nghĩa là Zod sẽ thực hiện tất cả các lần kiểm tra theo trình tự, ngay cả khi một trong số chúng gây ra lỗi xác thực. Điều này thường được mong muốn, vì nó có nghĩa là Zod có thể phát hiện càng nhiều lỗi càng tốt chỉ trong một lần.

```ts
const myString = z
  .string()
  .refine((val) => val.length > 8, { error: "Too short!" })
  .refine((val) => val === val.toLowerCase(), { error: "Must be lowercase" });

const result = myString.safeParse("OH NO");
result.error?.issues;
/* [
  { "code": "custom", "message": "Too short!" },
  { "code": "custom", "message": "Must be lowercase" }
] */
```

- Để việc validate chấm dứt ngay lập tức nếu fail, ta sử dụng:

```ts
const myString = z
  .string()
  .refine((val) => val.length > 8, { error: "Too short!", abort: true })
  .refine((val) => val === val.toLowerCase(), {
    error: "Must be lowercase",
    abort: true,
  });

const result = myString.safeParse("OH NO");
result.error?.issues;
// => [{ "code": "custom", "message": "Too short!" }]
```

### asynchronous refinement

- Ta có thể sử dụng asynchronous refinement:

```ts
const userId = z.string().refine(async (id) => {
  // verify that ID exists in database
  return true;
});
```

:::note[Chú ý]

- Nếu sử dụng hàm async trong refine, ta phải sử dụng `.parseAsync` để parse dữ liệu. Nếu không, Zod sẽ throw ra lỗi:

```ts
const result = await userId.parseAsync("abc123");
```

:::

## `.superRefine()`

- Nếu muốn custom nhiều validation thì ta phải thực hiện `.refine()` nhiều lần. Để tránh điều đó, sử dụng `.superRefine()`:

```ts
const FormValidationSchema = z
  .object({
    password: z.string().nonempty("Please enter your password"),
    confirm: z.string(),
  })
  .superRefine(({ password, confirm }, ctx) => {
    if (password !== confirm) {
      ctx.addIssue({
        code: "custom",
        message: "Password don't match",
        path: ["confirm"],
      });
    }
    if (password.length < 8) {
      ctx.addIssue({
        code: "custom",
        message: "Password is too short",
        path: ["password"],
      });
    }
  });
```

- Ví dụ khác validate array không có các phần tử trùng lặp và có độ dài không quá 3:

```ts
const UniqueStringArray = z.array(z.string()).superRefine((val, ctx) => {
  if (val.length > 3) {
    ctx.addIssue({
      code: "too_big",
      maximum: 3,
      origin: "array",
      inclusive: true,
      message: "Too many items 😡",
      input: val,
    });
  }

  if (val.length !== new Set(val).size) {
    ctx.addIssue({
      code: "custom",
      message: `No duplicates allowed.`,
      input: val,
    });
  }
});
```
