# DigitalOasis Webapp

![Lint](https://github.com/DigitalOasisv2/do-webapp/workflows/Lint/badge.svg)
![Test](https://github.com/DigitalOasisv2/do-webapp/workflows/Test/badge.svg)

## Requirements

- Node: 14.15.4
- Yarn: 1.22.10

## Development

Install dependencies:

```bash
yarn install
```

Run development server:

```bash
yarn start
```

Start storybook:

```bash
yarn storybook
```

Lint code style and types:

```bash
yarn lint
```

Format code:

```bash
yarn format
```

Run tests:

```bash
yarn test
```

## Debug

To add colors to the log output, add value to the local storage with a key `iris:log:colorized` and a value `true`.

## Guidelines

- [TypeScript Style Guide](https://basarat.gitbook.io/typescript/styleguide)
- [React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [CSS-in-JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript)
- [React components naming convention](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505)

### Branches

Use `feat/%ticet%` branch for the implementation of the feature (e.g. `feat/DO-32`).

### TypeScript

- [Style Guide](https://basarat.gitbook.io/typescript/styleguide)
- [Do not use `null` if it is not required by some library](https://basarat.gitbook.io/typescript/recap/null-undefined).
- Do not use `any`. Use `unknown` and type guards.
- Do not use `enums`. Prefer to use `type IconType = 'times' | 'social';` instead. This will allows to omit extra import of types.
- Do not use `function`. Prefer to use `const name () => {...}` instead.

### Procject structure

- `src/assets` - Global level assets. Use this folder for assets that will be reused several times. Do not place assets that will be used for the one time. Place this type of assets next to a component's file (`./assets`).
- `src/components` - Folder for all pure components. The components inside this folder should not have dependencies on the API or app's storage.
- `src/components/Common` - Basic wide-used components.
- `src/components/Buttons` - Different basic buttons.
- `src/components/Dialogs` - Basic dialogs and components.
- `src/components/Feedback` - Users feedback specific components.
- `src/components/Form` - Inputs, special fields, form-related components.
- `src/components/Auth|Dashboard|...` - Components related to the special part of the app.
- `src/styles` - Everything that is related to the app style: theme, colors, utils, types.
- `src/utils` - Basic utils for working with strings, dates, numbers, types. The utils here should not have dependencies from API or internal storage.

### Component names

We are using the following [React components naming convention](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505).

Component's name structure:

```
[Domain]|[Page/Context]|ComponentName|[Type]
```

Examples:

![Component name examples](docs/images/component-name-example.png)

Read more at the [original post](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505).

### Components import

Each root folder is available globally and should be imported by absolute path.

✅ Correct:

```typescript
import { ContainedButton } from 'components/Buttons';
```

❌ Incorrect:

```typescript
import { ContainedButton } from '../../components/Buttons';
```


### Files & folders structure

**One component per file.** Each component should be placed in a separate folder. The source code should be placed at `index.tsx` file.

✅ Correct:

```
src
  components
    Buttson
      Submit
        index.tsx
```

❌ Incorrect:

```
src
  components
    Buttson
      ContainedButton.tsx
```

Place assets in the `./assets` folder next to the component's file.

✅ Correct:

```
src
  components
    Buttson
      Submit
        index.tsx
        assets
          logo.png
```

❌ Incorrect:

```
src
  components
    Buttson
      Submit
        index.tsx
        logo.png
```

Place sub-components in the `./components` folder next to the component's file.

✅ Correct:

```
src
  components
    Forms
      List
        index.tsx
        components
          Item
            index.tsx
```

❌ Incorrect:

```
src
  components
    Forms
      List
        Item.tsx
        index.tsx
```

The next files can be placed next to the `index.tsx` component's file to reduce the main file size:

- `styles.ts` - Use this file to keep component's styles if they are too big. But it is better to keep them in the same file if they fit on the same screen.
- `types.ts` - Component specific types, like `ListItem`, `IconType` etc. Do not keep the component's `Props` here. Keep it next to the component's code.
- `utils.ts` - Different utils required for the component.
- `view.tsx` - Use this file for keeping component's view-related code if it is too big or the component is too complex.
- `story.tsx` - Storybook file related to this component.
- `index.test.tsx`, `utils.test.ts`, etc. - Tests files for the component and it's parts.

Each root folder should contains `index.ts` file and export all of it components. For example `src/components/Auth/index.ts`:

```typescript
/* istanbul ignore file */
export * from './Copyrights';
export * from './FormContainer';
export * from './ScreenBackground';
export * from './SocialLoginButtons';
export * from './SectionSplitter';
```

This will allows to import components like:

```typescript
import { AuthCopyrights } from 'components/Auth';
```

### Component template

The basic component template:

```tsx
import { Text } from 'components/Common';
import React, { FC } from 'react';
import { colors, Styles, ms, Style } from 'styles';

// Name props of the component as Props
// Do not export it if you don't need it externaly
interface Props {
  // Always pass style prop for the view component
  style?: Style;
}

// Use functional component and FC<Props> type for it definition
// Don't use React.FC definition
// Don't forget to export component to be able import it like:
// import { AuthCopyrights } from 'components/Auht';
export const AuthCopyrights: FC<Props> = ({ style }) => {
  return (
    // Function ms() will merge style objects together
    // The last one style has the biggest priority
    // The defenition like m(styles.container, active && styles.active, style) is also valid
    <Text style={ms(styles.container, style)}>
      {`Copyright © ${new Date().getFullYear()} All rights reserved.`}
    </Text>
  );
};

// Place styles and themes at the bottom of the component
// Use this definition of styles for main cases
// Use makeStyle in case if you will required some hard customisation
const styles: Styles = {
  container: {
    color: colors.gray,
    fontSize: 16,
  },
};

// Export default component at the bottom
// Export props like this if you will need to:
export type AuthCopyrightsProps = Props;
export default AuthCopyrights;
```

- Use `onClick` definition for the external event handlers, but `handleClick` for the internal.

### Styles

Main rules: [Airbnb CSS-in-JavaScript Style Guide]

We are following the ["Airbnb CSS-in-JavaScript Style Guide"](https://github.com/airbnb/javascript/tree/master/css-in-javascript). Please take a look at it for the main CSS-in-JS style guides.

We are using two types of style definition. Main time we are using simplified JSS:

```typescript
const styles: Styles = {
  container: {
    color: colors.gray,
    fontSize: 16,
  },
};
```

If you will require media queries or more complex styles use `makeStyles()` provided by `@material-ui/core`:

```tsx
import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const AuthFormContainer: FC<Props> = ({ style, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Paper className={classes.container} style={style} elevation={2}>
      {children}
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      padding: '45px 20px',
      borderRadius: 30,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      maxWidth: 740,

      [theme.breakpoints.up('sm')]: {
        padding: '45px 80px',
      },
    },
  })();
```

Additional rules:

- Use `container` name as the root style of the component.
- Use `src/styles/theme.ts` file to globaly customise MaterialUI components.
- Use styles related to the position and indents out of component.
- Do not move styles to the separate file if it is small and fit one screen with the component.

### Storybook

- Each story code should be placed at the `story.tsx` file next to the `index.tsx` of the component.
- Use actions for the component's events (e.g. `onClick={action('onClick')}`).
- Title of the component should be the same as it's path (e.g. `components/Buttons/MobileMenuBtn`).
