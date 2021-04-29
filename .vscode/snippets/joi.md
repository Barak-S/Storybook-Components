# Joi library snippets

**Prefix**: `joio`

**Description**: Add Joi object assert

**Scope**: `typescript,typescriptreact`

```
Joi.object($0)
```

**Prefix**: `jois`

**Description**: Add Joi string assert

**Scope**: `typescript,typescriptreact`

```
Joi.string()
```

**Prefix**: `joisr`

**Description**: Add Joi string required assert

**Scope**: `typescript,typescriptreact`

```
Joi.string().required()
```

**Prefix**: `joib`

**Description**: Add Joi bool assert

**Scope**: `typescript,typescriptreact`

```
Joi.bool()
```

**Prefix**: `joibr`

**Description**: Add Joi bool required assert

**Scope**: `typescript,typescriptreact`

```
Joi.bool().required()
```

**Prefix**: `joia`

**Description**: Add Joi array assert

**Scope**: `typescript,typescriptreact`

```
Joi.array()
```

**Prefix**: `join`

**Description**: Add Joi number assert

**Scope**: `typescript,typescriptreact`

```
Joi.number()
```

**Prefix**: `joinr`

**Description**: Add Joi number required assert

**Scope**: `typescript,typescriptreact`

```
Joi.number().required()
```

**Prefix**: `joim`

**Description**: Add Joi max assert

**Scope**: `typescript,typescriptreact`

```
.max($1)$0
```

**Prefix**: `joig`

**Description**: Add Joi guard

**Scope**: `typescript,typescriptreact`

```
export const is$1 = (val: unknown): val is $1 => $1Schema.validate(val).error === undefined;
```
