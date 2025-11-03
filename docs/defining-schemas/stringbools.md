---
sidebar_position: 10
---

# Stringbools

:::info

- Trong một số trường hợp (ví dụ: phân tích cú pháp biến môi trường), việc phân tích cú pháp một số giá trị "boolish" của chuỗi thành giá trị boolean thuần túy là rất hữu ích. Để hỗ trợ điều này, Zod 4 cung cấp cho ta `z.stringbool()`:

:::

- Ví dụ:

```ts
const strbool = z.stringbool();

strbool.parse("true"); // => true
strbool.parse("1"); // => true
strbool.parse("yes"); // => true
strbool.parse("on"); // => true
strbool.parse("y"); // => true
strbool.parse("enabled"); // => true

strbool.parse("false"); // => false
strbool.parse("0"); // => false
strbool.parse("no"); // => false
strbool.parse("off"); // => false
strbool.parse("n"); // => false
strbool.parse("disabled"); // => false

strbool.parse(/* anything else */); // ZodError<[{ code: "invalid_value" }]>
```

- Ta có thể tự custom lại giá trị `truthy` và `falsy`:

```ts
// these are the defaults
z.stringbool({
  truthy: ["true", "1", "yes", "on", "y", "enabled"],
  falsy: ["false", "0", "no", "off", "n", "disabled"],
});
```
