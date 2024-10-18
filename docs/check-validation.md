---
sidebar_position: 8
---

# Check validation

- Zod cung cấp cho ta phương thức `.safeParse()` để kiểm tra xem một đối tượng có thỏa mãn điều kiện validation hay không.

## Cú pháp:

```ts
.safeParse(data:unknown): { success: true; data: T; } | { success: false; error: ZodError; }
```

## Ví dụ

```ts
import { z } from "zod";

const FormValidationSchema = z.object({
  fullName: z.string({ coerce: true }).nonempty("Please enter your full name"),
  company: z.string().nonempty("Please select your company"),
  gender: z.string().nonempty("Please select your gender"),
  dob: z.string().nonempty("Please select your date of birth"),
});

const data = {
  fullName: "Chi",
  company: "Google",
  gender: "male",
  dob: "2023-10-08T06:56:28.465Z",
};

const result = FormValidationSchema.safeParse(dataError);
if (!result.success) {
  console.log(result.error);
} else {
  console.log(result.data);
}
```
