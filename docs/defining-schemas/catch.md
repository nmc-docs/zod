---
sidebar_position: 20
---

# Catch

:::info

- Sử dụng `.catch()` để xác định giá trị dự phòng sẽ được trả về trong trường hợp xảy ra lỗi xác thực.
- Nó khác với [.default()](./default)

:::

- Ví dụ:

```ts
const numberWithCatch = z.number().catch(42);

numberWithCatch.parse(5); // => 5
numberWithCatch.parse("tuna"); // => 42
```
