---
sidebar_position: 8
---

# Dates

:::info

- Sử dụng `z.date()` để validate `Date` instances

```ts
z.date().safeParse(new Date()); // success: true
z.date().safeParse("2022-01-12T06:15:00.000Z"); // success: false
```

:::

- Để custom error message:

```ts
z.date({
  error: (issue) => (issue.input === undefined ? "Required" : "Invalid date"),
});
```

## Validation

```ts
z.date().min(minDate: Date, { error?: string }) // Ngày tháng tối thiếu
z.date().max(maxDate: Date, { error?: string }) // Ngày tháng tối đa
```
