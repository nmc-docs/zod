---
sidebar_position: 21
---

# Custom schema

:::info

- Ta có thể tự định nghĩa schema thông qua `z.custom()`. Điều này hữu ích khi ta tạo schema cho các kiểu không được Zod hỗ trợ sẵn.

:::

```ts
const px = z.custom<`${number}px`>((val) => {
  return typeof val === "string" ? /^\d+px$/.test(val) : false;
});

type px = z.infer<typeof px>; // `${number}px`

px.parse("42px"); // "42px"
px.parse("42vw"); // throws;
```
