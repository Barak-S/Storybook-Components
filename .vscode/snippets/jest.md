# Jest library snippets

`tst` - refers to "TypeScript tests"

**Prefix**: `tstic`

**Description**: Ignore file coverage

**Scope**: `typescript,typescriptreact`

```
/* istanbul ignore file */
```

**Prefix**: `tstd`

**Description**: Add describe definition

**Scope**: `typescript,typescriptreact`

```
describe('$1', () => {
  $0
});
```

**Prefix**: `tstt`

**Description**: Add test definition

**Scope**: `typescript,typescriptreact`

```
test('$1', () => {
  $0
});
```

**Prefix**: `tste`

**Description**: Add expect definition

**Scope**: `typescript,typescriptreact`

```
expect($0)
```
