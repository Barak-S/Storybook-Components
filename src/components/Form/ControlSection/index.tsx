import { Divider, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import FormControlInfo from '../ControlInfo';

interface Props extends StyleProps {
  title?: string;
  description?: string;
  hint?: string;
  borderTop?: boolean;
}

export const FormControlSection: FC<Props> = ({ title, description, hint, borderTop = true, style, children }) => {
  const styles = getStyles();
  return (
    <Grid style={ms(styles.container, style)}>
      {borderTop && <Divider />}
      <Grid style={styles.body}>
        <FormControlInfo title={title} description={description} hint={hint} />
        {children}
      </Grid>
    </Grid>
  );
};

const getStyles = (): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    padding: '12px 0',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
  },
});

export type FormControlSectionProps = Props;
export default FormControlSection;
