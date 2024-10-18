---
sidebar_position: 8
---

# Optional / Nullable / Nullish

## `z.optional()`

:::info

- Trong thư viện Zod, `z.optional()` được sử dụng để định nghĩa một trường (field) có thể không tồn tại hoặc có giá trị là `undefined`. Điều này rất hữu ích khi ta muốn một trường không bắt buộc trong một schema.
- Cú pháp:

```ts
const optionalString = z.string().optional(); // string | undefined

// equivalent to
z.optional(z.string());
```

:::

- Ví dụ:

```ts
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.optional(z.number()),
});

// Ví dụ sử dụng
const result1 = schema.safeParse({ name: "John" }); // Hợp lệ
const result2 = schema.safeParse({ name: "John", age: 30 }); // Hợp lệ
const result3 = schema.safeParse({ name: "John", age: "30" }); // Không hợp lệ
```

## `z.nullable()`

:::info

- Trong thư viện Zod, `z.nullable()` được sử dụng để định nghĩa một trường có thể nhận giá trị `null`. Điều này cho phép ta xác định rằng trường đó có thể không có giá trị, nhưng nếu có, giá trị đó phải phù hợp với kiểu dữ liệu đã chỉ định.
- Cú pháp:

```ts
const nullableString = z.string().nullable(); // string | null

// equivalent to
z.nullable(z.string());
```

:::

- Ví dụ:

```ts
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number().nullable(), // age có thể là số hoặc null
});

// Ví dụ sử dụng
const result1 = schema.safeParse({ name: "Alice", age: null }); // Hợp lệ
const result2 = schema.safeParse({ name: "Bob", age: 25 }); // Hợp lệ
const result3 = schema.safeParse({ name: "Charlie", age: "30" }); // Không hợp lệ
```

## `z.nullish()`

:::info

- Trong thư viện Zod, `z.nullish()` được sử dụng để định nghĩa một trường có thể nhận các giá trị `null` hoặc `undefined`. Điều này rất hữu ích khi ta muốn cho phép cả hai trạng thái này cho một trường, giúp ta linh hoạt hơn trong việc xác định cấu trúc dữ liệu.
- Cú pháp:

```ts
const nullishString = z.string().nullish(); // string | null | undefined

// equivalent to
z.string().nullable().optional();
```

:::

- Ví dụ:

```ts
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number().nullish(), // age có thể là số, null, hoặc undefined
});

// Ví dụ sử dụng
const result1 = schema.safeParse({ name: "Alice", age: null }); // Hợp lệ
const result2 = schema.safeParse({ name: "Bob" }); // Hợp lệ (age là undefined)
const result3 = schema.safeParse({ name: "Charlie", age: 30 }); // Hợp lệ
const result4 = schema.safeParse({ name: "David", age: "30" }); // Không hợp lệ
```
