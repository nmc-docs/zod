---
sidebar_position: 12
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
z.array(z.string()).min(5); // must contain 5 or more items
z.array(z.string()).max(5); // must contain 5 or fewer items
z.array(z.string()).length(5); // must contain 5 items exactly
```
