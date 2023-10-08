---
sidebar_position: 7
---

# Enum

## Cú pháp

```ts
z.enum(values: string[]);
```

:::note

`z.enum()` dùng để khai báo một schema với các giá trị cố định (literal types)

:::

## Ví dụ

```ts
import { z } from "zod";

const paymentType = z.enum(["CHECK", "DIRECT DEPOSIT", "MONEY ORDER"]);
```

:::info

Trong ví dụ trên, `paymentType` có type là `"CHECK" | "DIRECT DEPOSIT" | "MONEY ORDER"` và nó chỉ nhận 1 trong 3 giá trị đó.

:::
