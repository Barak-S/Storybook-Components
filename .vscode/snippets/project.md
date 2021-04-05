# Project

## Components

**Prefix**: `pfc`

**Description**: Create functional component

```
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  $2
}

export const $1: FC<Props> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      $0
    </View>
  );
};

const styles: Styles = {
  container: {},
};

export type $1Props = Props;
export default $1;
```

**Prefix**: `pep`

**Description**: Export props

```
export type $1Props = Props;
```
