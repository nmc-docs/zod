---
sidebar_position: 14
---

# Object

## `z.strictObject`

- Để định nghĩa một _strict schema_ sẽ throw ra lỗi khi có một key không xác định:

```ts
const StrictDog = z.strictObject({
  name: z.string(),
});

StrictDog.parse({ name: "Yeller", extraKey: true });
// ❌ throws
```

## `z.looseObject`

- Để định nghĩa một _loose schema_ cho phép key không xác định được chấp nhận:

```ts
const LooseDog = z.looseObject({
  name: z.string(),
});

LooseDog.parse({ name: "Yeller", extraKey: true });
// => { name: "Yeller", extraKey: true }
```

## `.catchall()`

- Để định nghĩa một _catchall schema_ được sử dụng để validate key không được định nghĩa trong schema:

```ts
const DogWithStrings = z
  .object({
    name: z.string(),
    age: z.number().optional(),
  })
  .catchall(z.string());

DogWithStrings.parse({ name: "Yeller", extraKey: "extraValue" }); // ✅
DogWithStrings.parse({ name: "Yeller", extraKey: 42 }); // ❌
```

## `.extend()`

- Kế thừa schema:

```ts
const DogWithBreed = Dog.extend({
  breed: z.string(),
});
```

## `.safeExtend()`

- Ta thường sử dụng `.safeExtend()` để kế thừa từ **refinements schema**, ví dụ:

```ts
const Base = z
  .object({
    a: z.string(),
    b: z.string(),
  })
  .refine((user) => user.a === user.b);

// Extended inherits the refinements of Base
const Extended = Base.safeExtend({
  a: z.string().min(10),
});
```

## `.pick()`

```ts
const Recipe = z.object({
  title: z.string(),
  description: z.string().optional(),
  ingredients: z.array(z.string()),
});
// { title: string; description?: string | undefined; ingredients: string[] }
```

```ts
const JustTheTitle = Recipe.pick({ title: true });
```

## `.omit()`

```ts
const RecipeNoId = Recipe.omit({ id: true });
```

## `.partial()`

```ts
const PartialRecipe = Recipe.partial();
// { title?: string | undefined; description?: string | undefined; ingredients?: string[] | undefined }
```

- Hoặc có thể chỉ định cho 1 trường cụ thể thay vì toàn bộ object

```ts
const RecipeOptionalIngredients = Recipe.partial({
  ingredients: true,
});
// { title: string; description?: string | undefined; ingredients?: string[] | undefined }
```

## `.required()`

- Đánh dấu tất cả các trường là bắt buộc:

```ts
const RequiredRecipe = Recipe.required();
// { title: string; description: string; ingredients: string[] }
```
