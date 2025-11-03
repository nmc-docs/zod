---
sidebar_position: 6
---

# Number

:::note

- Sử dụng `z.number()` để xác thực kiểu dữ liệu number. Nó cho phép bất kỳ số hữu hạn nào.

```ts
const schema = z.number();

schema.parse(3.14); // ✅
schema.parse(NaN); // ❌
schema.parse(Infinity); // ❌
```

:::

- Zod cung cấp một số phương thức xác thực cụ thể cho number:

```ts
z.number().gt(value: number); // Lớn hơn giá trị chỉ định
z.number().gte(value: number); // Lớn hơn hoặc bằng giá trị chỉ định (tương đương với .min(value: number))
z.number().lt(value: number); // Nhỏ hơn giá trị chỉ định
z.number().lte(value: number); // Nhỏ hơn hoặc bằng giá trị chỉ định (tương đương với .max(value: number))

z.number().positive(); // Giá trị phải > 0
z.number().nonnegative(); //  Giá trị phải >= 0
z.number().negative(); // Giá trị phải < 0
z.number().nonpositive(); //  Giá trị phải <= 0

z.number().multipleOf(value: number); // Giá trị phải chia hết cho số được chỉ định (tương đương với .step(value: number))
```

:::tip

- Để validate `NaN`

```ts
z.nan().parse(NaN); // ✅
z.nan().parse("anything else"); // ❌
```

- Để validate kiểu số nguyên (integer):

```ts
z.int(); // restricts to safe integer range
z.int32(); // restrict to int32 range
```

- Để validate `BigInts`

```ts
z.bigint();
```

```ts
z.bigint().gt(5n);
z.bigint().gte(5n); // alias `.min(5n)`
z.bigint().lt(5n);
z.bigint().lte(5n); // alias `.max(5n)`
z.bigint().positive();
z.bigint().nonnegative();
z.bigint().negative();
z.bigint().nonpositive();
z.bigint().multipleOf(5n); // alias `.step(5n)`
```

:::
