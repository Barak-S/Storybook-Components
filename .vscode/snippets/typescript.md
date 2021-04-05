# TypeScript

## Basic

**Prefix**: `tse`

**Description**: Insert export

```
export $0
```

**Prefix**: `tsea`

**Description**: Insert export * from

```
export * from '$0';
```

**Prefix**: `tsed`

**Description**: Insert export default

```
export default $0;
```

**Prefix**: `tsr`

**Description**: Insert return

```
return $0;
```

**Prefix**: `tsim`

**Description**: Import statement

```
import { $0 } from '$1';
```

**Prefix**: `tsi`

**Description**: Create interface

```
interface $1 {
  $0
}
```

**Prefix**: `tsie`

**Description**: Create interface with export

```
export interface $1 {
  $0
}
```

**Prefix**: `tsem`

**Description**: Enum

```
enum $1 {
  $0
}
```

**Prefix**: `tsu`

**Description**: Undefined

```
undefined
```

**Prefix**: `tsif`

**Description**: Insert if statement

```
if ($1) {
  $0
}
```

**Prefix**: `tsifel`

**Description**: Insert if-else statement

```
if ($1) {
  $0
} else {

}
```

**Prefix**: `tsifc`

**Description**: Insert conditional if statement

```
$1 ? $2 : $3
```

**Prefix**: `tstc`

**Description**: Insert try-catch statement

```
try {
  $1
} catch(err: unknown) {
  $0
}
```
