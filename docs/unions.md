---
sidebar_position: 3
---

# Unions

- Ta có thể validate một biến có thể có nhiều kiểu dữ liệu bằng phương thức `.union()`:

```ts
z.union([z.string(), z.number()]);
```

- Ngoài ra, ta có thể sử dụng .or(), nó cũng tương tự:

```ts
const stringOrNumber = z.string().or(z.number()); // string | number

// equivalent to
z.union([z.string(), z.number()]);
```
