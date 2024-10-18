---
sidebar_position: 5
---

# Instanceof

:::info

- Phương thức `z.instanceof()` để validate xem nó có phải là một đối tượng từ một class được chỉ định hay không.

:::

- Ví dụ:

```ts
class Test {
  name: string;
}

const TestSchema = z.instanceof(Test);

const blob: any = "whatever";
TestSchema.parse(new Test()); // passes
TestSchema.parse(blob); // throws
```
