---
sidebar_position: 5
---

# String

:::note

- Zod cung cấp một số API xác thực và chuyển đổi string tích hợp sẵn. Để thực hiện một số xác thực chuỗi phổ biến:

```ts
z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().regex(/^[a-z]+$/);
z.string().startsWith("aaa");
z.string().endsWith("zzz");
z.string().includes("---");
z.string().uppercase();
z.string().lowercase();
```

:::

## Transformation

- Dưới đây là những phương thức để biến đổi chuỗi **TRƯỚC KHI** validate:

```ts
z.string().trim(); // trim whitespace
z.string().toLowerCase(); // toLowerCase
z.string().toUpperCase(); // toUpperCase
z.string().normalize(); // normalize unicode characters
```

## String formats

:::info

- Zod cung cấp cho ta các phương thức để xác thực với một số định dạng chuỗi phổ biến:

```ts
z.email();
z.uuid();
z.url();
z.httpUrl(); // http or https URLs only
z.hostname();
z.emoji(); // validates a single emoji character
z.base64();
z.base64url();
z.hex();
z.jwt();
z.nanoid();
z.cuid();
z.cuid2();
z.ulid();
z.ipv4();
z.ipv6();
z.cidrv4(); // ipv4 CIDR block
z.cidrv6(); // ipv6 CIDR block
z.hash("sha256"); // or "sha1", "sha384", "sha512", "md5"
z.iso.date();
z.iso.time();
z.iso.datetime();
z.iso.duration();
```

:::

### Emails

- Để validate 1 string có phải là một email:

```ts
z.email();
```

- Ta cũng có thể sử dụng custom regex pattern cho email do ta tự định nghĩa:

```ts
z.email({ pattern: /your regex here/ });
```

- Zod cũng cung cấp cho ta một số pattern phổ biến:

```ts
// Zod's default email regex
z.email();
z.email({ pattern: z.regexes.email }); // equivalent

// the regex used by browsers to validate input[type=email] fields
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
z.email({ pattern: z.regexes.html5Email });

// the classic emailregex.com regex (RFC 5322)
z.email({ pattern: z.regexes.rfc5322Email });

// a loose regex that allows Unicode (good for intl emails)
z.email({ pattern: z.regexes.unicodeEmail });
```

### UUIDs

- Để validate 1 chuỗi có phải là UUID:

```ts
z.uuid();
```

- Ta có thể chỉ định version cụ thể cho UUID:

```ts
// supports "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"
z.uuid({ version: "v4" });

// for convenience
z.uuidv4();
z.uuidv6();
z.uuidv7();
```

### URLs

- Để validate 1 chuỗi có phải là 1 URL hợp lệ hay không:

```ts
const schema = z.url();

schema.parse("https://example.com"); // ✅
schema.parse("http://localhost"); // ✅
schema.parse("mailto:noreply@zod.dev"); // ✅
```

- Để validate URL theo regex của hostname, ta làm như sau:

```ts
const schema = z.url({ hostname: /^example\.com$/ });

schema.parse("https://example.com"); // ✅
schema.parse("https://zombo.com"); // ❌
```

- Tương tự, ta cũng có thể validate protocol theo regex:

```ts
const schema = z.url({ protocol: /^https$/ });

schema.parse("https://example.com"); // ✅
schema.parse("http://example.com"); // ❌
```

:::tip

- Để validate Web URL, ta có thể dùng như sau:

```ts
const httpUrl = z.url({
  protocol: /^https?$/,
  hostname: z.regexes.domain,
});
```

:::

### ISO datetimes

- Để validate 1 string có dạng ISO datetimes hay không:

```ts
const datetime = z.iso.datetime();

datetime.parse("2020-01-01T06:15:00Z"); // ✅
datetime.parse("2020-01-01T06:15:00.123Z"); // ✅
datetime.parse("2020-01-01T06:15:00.123456Z"); // ✅ (arbitrary precision)
datetime.parse("2020-01-01T06:15:00+02:00"); // ❌ (offsets not allowed)
datetime.parse("2020-01-01T06:15:00"); // ❌ (local not allowed)
```

### ISO dates

- Phương thức `z.iso.date()` xác thực chuỗi theo định dạng `YYYY-MM-DD`.

```ts
const date = z.iso.date();

date.parse("2020-01-01"); // ✅
date.parse("2020-1-1"); // ❌
date.parse("2020-01-32"); // ❌
```

### ISO times

- Phương thức `z.iso.time()` xác thực chuỗi theo định dạng `HH:MM[:SS[.s+]]`

```ts
const time = z.iso.time();

time.parse("03:15"); // ✅
time.parse("03:15:00"); // ✅
time.parse("03:15:00.9999999"); // ✅ (arbitrary precision)
```

```ts
time.parse("03:15:00Z"); // ❌ (no `Z` allowed)
time.parse("03:15:00+02:00"); // ❌ (no offsets allowed)
```

### IP addresses

```ts
const ipv4 = z.ipv4();
ipv4.parse("192.168.0.0"); // ✅

const ipv6 = z.ipv6();
ipv6.parse("2001:db8:85a3::8a2e:370:7334"); // ✅
```

### IP blocks (CIDR)

```ts
const cidrv4 = z.string().cidrv4();
cidrv4.parse("192.168.0.0/24"); // ✅

const cidrv6 = z.string().cidrv6();
cidrv6.parse("2001:db8::/32"); // ✅
```

### JWT

```ts
z.jwt();
z.jwt({ alg: "HS256" });
```

### Custom formats

- Để có thể tự định nghĩa validate cho string, ta dùng `z.stringFormat()`

```ts
const coolId = z.stringFormat("cool-id", () => {
  // arbitrary validation here
  return val.length === 100 && val.startsWith("cool-");
});

// a regex is also accepted
z.stringFormat("cool-id", /^cool-[a-z0-9]{95}$/);
```

```ts
myFormat.parse("invalid input!");
// ZodError: [
//   {
//     "code": "invalid_format",
//     "format": "cool-id",
//     "path": [],
//     "message": "Invalid cool-id"
//   }
// ]
```
