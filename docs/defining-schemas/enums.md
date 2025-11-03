---
sidebar_position: 9
---

# Enums

:::info

- Sử dụng `z.enum` để xác thực dữ liệu đầu vào dựa trên một tập hợp cố định các giá trị chuỗi cho phép.

```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);

FishEnum.parse("Salmon"); // => "Salmon"
FishEnum.parse("Swordfish"); // => ❌
```

:::

- Một số ví dụ:

```ts
const fish = ["Salmon", "Tuna", "Trout"] as const;

const FishEnum = z.enum(fish);
type FishEnum = z.infer<typeof FishEnum>; // "Salmon" | "Tuna" | "Trout"
```

```ts
const Fish = {
  Salmon: "Salmon",
  Tuna: "Tuna",
} as const;

const FishEnum = z.enum(Fish);
FishEnum.parse("Salmon"); // => "Salmon"
FishEnum.parse("Swordfish"); // => ❌
```

```ts
enum Fish {
  Salmon = "Salmon",
  Tuna = "Tuna",
  Trout = "Trout",
}

const FishEnum = z.enum(Fish);
```

## `.exclude()`

- Để tạo một enum schema mới, loại trừ một số giá trị nhất định từ một enum khác:

```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
const TunaOnly = FishEnum.exclude(["Salmon", "Trout"]);
```

## `.extract()`

- Để tạo một enum schema mới, tách một số giá trị nhất định từ một enum khác:

```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
const SalmonAndTroutOnly = FishEnum.extract(["Salmon", "Trout"]);
```
