import { Grid } from '@material-ui/core';
import { Image } from 'components/Common';
import { FormUploadBtn } from 'components/Form';
import React, { FC } from 'react';
import { StyleProps, colors, Styles, mx, ms } from 'styles';
import { OnboardingFormHeading as Heading } from '../FormHeading';

interface Props extends StyleProps {
  picture?: string;
}

export const OnboardingProfilePicture: FC<Props> = ({ picture, style }) => {
  const styles = getStyles();

  return (
    <Grid style={ms(styles.container, style)}>
      <Heading style={styles.heading} title="profile picture" caption="Lorem ipsum dolor sit." />
      <Grid style={styles.holder}>{picture ? <Image source={picture} style={styles.picture} /> : <FormUploadBtn />}</Grid>
    </Grid>
  );
};

const getStyles = (): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    marginBottom: 15,
  },
  holder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    overflow: 'hidden',
    ...mx.square(132),
  },
  picture: {
    width: '100%',
  },
  additionBtnContainer: {
    width: '100%',
    height: '100%',
  },
  additionBtn: {
    width: '100%',
    height: '100%',
    color: colors.marineBlue,
    background: colors.paleGrey,
    borderRadius: '50%',
    ...mx.border(3, 'dashed', colors.silverTwo),
  },
});

export default OnboardingProfilePicture;
