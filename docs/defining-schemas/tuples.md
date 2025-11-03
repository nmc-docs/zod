---
sidebar_position: 15
---

# Tuples

:::note

- Không giống như mảng, tuples thường là mảng có độ dài cố định, chỉ định các schema khác nhau cho mỗi chỉ mục.

:::

```ts
const MyTuple = z.tuple([z.string(), z.number(), z.boolean()]);

type MyTuple = z.infer<typeof MyTuple>;
// [string, number, boolean]
```
