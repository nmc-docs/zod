---
sidebar_position: 5
---

# Array

## Cú pháp

```ts
z.array(z.string()) // Mảng các string
z.array(z.number()) // Mảng các number
...
```

hoặc ta có thể viết:

```ts
z.string().array(); // equivalent to z.array(z.string());
```

## Validation

```ts
z.array(z.string()).nonempty(message?: string) // Mảng không được rỗng
z.array(z.string()).min(minLength: number, message?: string) // Mảng phải có ít nhất "minLength" phần tử
z.array(z.string()).max(maxLength: number, message?: string) // Mảng chỉ được có tối đa "maxLength" phần tử
```
