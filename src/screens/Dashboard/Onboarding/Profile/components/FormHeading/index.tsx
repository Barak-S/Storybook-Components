import { Grid } from '@material-ui/core';
import { Title, Text } from 'components/Common';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  title?: string;
  caption?: string;
}

export const OnboardingFormHeading: FC<Props> = ({ title, caption, style }) => {
  const styles = getStyles();

  return (
    <Grid style={ms(styles.container, style)}>
      {title && (
        <Title type="h5" style={styles.title}>
          {title}
        </Title>
      )}
      {caption && <Text style={styles.caption}>{caption}</Text>}
    </Grid>
  );
};

const getStyles = (): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
  },
  title: {
    color: colors.marine,
    textTransform: 'capitalize',
    marginBottom: 5,
    fontWeight: 500,
    fontSize: 'inherit',
  },
  capture: {
    display: 'flex',
    color: colors.brownishGrey,
    fontSize: 'inherit',
  },
});

export default OnboardingFormHeading;
