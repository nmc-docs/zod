---
sidebar_position: 6
---

# Transform

:::info

- Trong Zod, phương thức `.transform()` để biến đổi dữ liệu **SAU KHI** được validate

:::

- Ví dụ:

```ts
const emailToDomain = z
  .string()
  .email()
  .transform((val) => val.split("@")[1]);

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
