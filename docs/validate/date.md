---
sidebar_position: 4
---

# Date

## Cú pháp

```ts
z.date({
  coerce: boolean, // Tự động ép kiểu sang Date hay không
  invalid_type_error: string, // Thông báo lỗi nếu không đúng kiểu Date
});
```

## Validation

```ts
z.date().min(minDate: Date, message?: string) // Ngày tháng tối thiếu
z.date().max(maxDate: Date, message?: string) // Ngày tháng tối đa
```
