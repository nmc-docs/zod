---
sidebar_position: 17
---

# Intersection

:::info

- Có 3 phương thức sử dụng để hợp nhất 2 hoặc nhiều schema lại với nhau:
  - `z.intersection(A, B)`
  - `A.and(B)`
  - `A.merge(B)`: chỉ dùng được nếu A không refine

:::

- Ví dụ 1:

```ts
const Person = z.object({
  name: z.string(),
});

const Employee = z.object({
  role: z.string(),
});

const EmployedPerson = z.intersection(Person, Employee);

// equivalent to:
const EmployedPerson = Person.and(Employee);
```

- Ví dụ 2:

```ts
const nameAndAge = z
  .object({ name: z.string() })
  .and(z.object({ age: z.number() })); // { name: string } & { age: number }

// equivalent to
z.intersection(z.object({ name: z.string() }), z.object({ age: z.number() }));
```
