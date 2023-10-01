---
sidebar_position: 1
---

# String

## Cú pháp

```ts
z.string({
  coerce: boolean, // Tự động ép kiểu sang string hay không
  invalid_type_error: string, // Thông báo lỗi nếu không đúng kiểu string
});
```

## Transformation

- Dưới đây là những phương thức để biến đổi chuỗi trước khi validate:

```ts
z.string().trim(); // Xóa bỏ khoảng trắng đầu và cuối chuỗi
z.string().toLowerCase(); // Biến đổi tất cả ký tự về in hoa
z.string().toUpperCase(); // Biến đổi tất cả ký tự về in thường
```

## Validation

- Dưới đây là những phương thức để validate chuỗi:

```ts
z.string().max(maxLength: number, message?: string);
z.string().min(minLength: number, message?: string);
z.string().length(length: number, message?: string);
z.string().email(message?: string);
z.string().url(message?: string);
z.string().uuid(message?: string);
z.string().regex(regex: RegExp, message?: string);
z.string().includes(value: string, { message?: string });
z.string().startsWith(value: string, message?: string);
z.string().endsWith(value: string, message?: string);
z.string().datetime({ message?: string });
z.string().ip({ version?: "v4" | "v6", message?: string });
```
