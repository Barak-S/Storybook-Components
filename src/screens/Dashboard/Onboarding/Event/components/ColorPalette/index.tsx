import { Grid } from '@material-ui/core';
import { FormColorPicker } from 'components/Form';
import React, { FC } from 'react';
import { colors, StyleProps, Styles, useScreenSizes } from 'styles';

type Props = StyleProps;

export const EventColorPalette: FC<Props> = () => {
  const { isDesktop } = useScreenSizes();
  const styles = getStyles(isDesktop);

  return (
    <Grid style={styles.container}>
      <Grid style={styles.row}>
        <FormColorPicker title="background" value={colors.marineBlue} style={styles.picker} />
        <FormColorPicker title="Large Headlines" value={colors.coolBlue} style={styles.picker} />
        <FormColorPicker title="Medium Headlines" value={colors.marineBlue} style={styles.picker} />
      </Grid>
      <Grid style={styles.row}>
        <FormColorPicker title="Body Text" value={colors.blackTwo} style={styles.picker} />
        <FormColorPicker title="Subheads" value={colors.marineBlue} style={styles.picker} />
        <FormColorPicker title="Buttons & Linked Text" value={colors.warmPurple} style={styles.picker} />
      </Grid>
    </Grid>
  );
};

const getStyles = (isDesktop: boolean): Styles => ({
  container: {
    width: '100%',
    maxWidth: 630,
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: isDesktop ? 35 : 0,
  },
  picker: {
    maxWidth: 185,
    marginBottom: isDesktop ? 0 : 35,
    marginRight: 10,
  },
});

export default EventColorPalette;
