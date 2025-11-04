---
sidebar_position: 3
---

# Transform

## Transform sau khi validate

:::info

- Trong Zod, phương thức `.transform()` để biến đổi dữ liệu **SAU KHI** được validate

:::

- Ví dụ:

```ts
const emailToDomain = z.email().transform((val) => val.split("@")[1]);

emailToDomain.parse("colinhacks@example.com"); // => example.com
```

- Cả 2 phương thức `.transform()` và `.refine()` có thể kết hợp xen kẽ nhau. Nó sẽ được thực hiện theo thứ tự được khai báo, ví dụ:

```ts
const nameToGreeting = z
  .string()
  .transform((val) => val.toUpperCase())
  .refine((val) => val.length > 15)
  .transform((val) => `Hello ${val}`)
  .refine((val) => val.indexOf("!") === -1);
```

## Transform trước khi validate

:::info

- Để biến đổi dữ liệu trước khi validate, ta sử dụng `.preprocess()`.

:::

```ts
import * as z from "zod";

const fullNameSchema = z.preprocess((val) => {
  if (typeof val === "string") {
    return val.trim();
  }
  return val;
}, z.string().min(1, "Full name is required").max(15, "Full name must be at most 15 characters"));

console.log(fullNameSchema.safeParse("  John Doe               "));
/*
{
  success: true,
  data: "John Doe",
}
*/
```
