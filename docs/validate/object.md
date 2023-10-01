---
sidebar_position: 6
---

# Object

- Để validate một object, ta sử dụng `z.object({})`
- Ví dụ:

```ts
const user = z.object({
  username: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  strings: z.array(z.object({ value: z.string() })),
});
```
