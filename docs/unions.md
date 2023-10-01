---
sidebar_position: 3
---

# Unions

- Ta có thể validate một biến có thể có nhiều kiểu dữ liệu bằng phương thức `.union()`:

```ts
z.union([z.string(), z.number()]);
```
