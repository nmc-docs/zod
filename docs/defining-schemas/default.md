---
sidebar_position: 13
---

# Default

:::info

- Trong Zod, phương thức `.default()` được sử dụng để chỉ định một giá trị mặc định cho một trường trong schema. Nếu trường đó không có giá trị trong dữ liệu đầu vào (hoặc có giá trị `undefined`), Zod sẽ tự động gán giá trị mặc định mà ta đã chỉ định.

:::

- Ví dụ:

```ts
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number().default(18), // Giá trị mặc định là 18
});

// Ví dụ sử dụng
const result1 = schema.safeParse({ name: "Alice" }); // age sẽ tự động là 18
const result2 = schema.safeParse({ name: "Bob", age: 25 }); // age là 25
const result3 = schema.safeParse({ name: "Charlie", age: undefined }); // age sẽ tự động là 18
```
