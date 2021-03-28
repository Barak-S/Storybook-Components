import { Grid } from '@material-ui/core';
import { FormDragnDropImage } from 'components/Form';
import React, { FC } from 'react';
import { OnboardingFormHeading as Heading } from '../FormHeading';
import { colors, ms, mx, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const OnboardingEventLogo: FC<Props> = ({ style }) => {
  const styles = getStyles();

  return (
    <Grid style={ms(styles.container, style)}>
      <Grid>
        <Heading
          style={styles.heading}
          title="company/event logo"
          caption="Lorem ipsum dolor sit amet, 600 x 200px and 1MB or less"
        />
        <Grid style={styles.additionField}>
          <FormDragnDropImage style={styles.dragField} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const getStyles = (): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 535,
  },
  heading: {
    marginBottom: 15,
  },
  additionField: {
    width: '100%',
  },
  dragField: {
    height: 140,
    ...mx.border(3, 'dashed', colors.silverTwo),
  },
});

export default OnboardingEventLogo;
