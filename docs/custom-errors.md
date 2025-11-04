---
sidebar_position: 5
---

# Custom errors

:::info

- Ta có thể custom error message bằng 2 cách dưới đây:

```ts
z.string("Bad!");
z.string().min(5, "Too short!");
z.uuid("Bad UUID!");
z.iso.date("Bad date!");
z.array(z.string(), "Not an array!");
z.array(z.string()).min(5, "Too few items!");
z.set(z.string(), "Bad set!");
```

- Hoặc sử dụng thuộc tính `error`:

```ts
z.string({ error: "Bad!" });
z.string().min(5, { error: "Too short!" });
z.uuid({ error: "Bad UUID!" });
z.iso.date({ error: "Bad date!" });
z.array(z.string(), { error: "Bad array!" });
z.array(z.string()).min(5, { error: "Too few items!" });
z.set(z.string(), { error: "Bad set!" });
```

:::

- Ví dụ về validate error message khi 1 trường không nhận giá trị đầu vào:

```ts
z.number({
  error: (iss) =>
    iss.input === undefined ? "Field is required." : "Invalid input.",
});
```
