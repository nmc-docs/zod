---
sidebar_position: 2
---

# Number

## Cú pháp

```ts
z.number({
  coerce: boolean, // Tự động ép kiểu sang number hay không
  invalid_type_error: string, // Thông báo lỗi nếu không đúng kiểu number
});
```

## Validation

- Dưới đây là những phương thức để validate number:

```ts
z.number().gt(value: number, message?: string); // Lớn hơn giá trị chỉ định
z.number().min(value: number, message?: string); // Lớn hơn hoặc bằng giá trị chỉ định
z.number().lt(value: number, message?: string); // Nhỏ hơn giá trị chỉ định
z.number().max(value: number, message?: string); // Nhỏ hơn hoặc bằng giá trị chỉ định

z.number().int(message?: string); // Phải là giá trị nguyên

z.number().positive(message?: string); // Giá trị phải > 0
z.number().nonnegative(message?: string); //  Giá trị phải >= 0
z.number().negative(); // Giá trị phải < 0
z.number().nonpositive(); //  Giá trị phải <= 0

z.number().multipleOf(value: number, message?: string); // Giá trị phải chia hết cho số được chỉ định
```
