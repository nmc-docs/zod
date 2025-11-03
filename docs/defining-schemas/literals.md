---
sidebar_position: 4
---

# Literals

:::note

- Literal schemas để biểu diễn [literal types](https://nmc-docs.github.io/typescript/types/literal-types)

:::

- Ví dụ:

```ts
const tuna = z.literal("tuna");
const twelve = z.literal(12);
const twobig = z.literal(2n);
const tru = z.literal(true);
```

- Để biểu diễn kiểu literal cho `undefined` hoặc `null`:

```ts
z.null();
z.undefined();
z.void(); // equivalent to z.undefined()
```

- Để biểu diễn nhiều kiểu literal:

```ts
const colors = z.literal(["red", "green", "blue"]);

colors.parse("green"); // ✅
colors.parse("yellow"); // ❌
```
