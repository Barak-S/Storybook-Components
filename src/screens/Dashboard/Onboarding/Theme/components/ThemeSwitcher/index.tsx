import { Grid } from '@material-ui/core';
import { FormToggle, FormTooltip } from 'components/Form';
import { Image } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, Styles, useScreenSizes, colors } from 'styles';

interface Props extends StyleProps {
  active: boolean;
  picture: string;
}

export const OnboardingThemeSwitcher: FC<Props> = ({ active, picture, children }) => {
  const { isDesktop } = useScreenSizes();
  const styles = getStyles(isDesktop);

  return (
    <Grid style={styles.container}>
      <Grid style={styles.description}>
        {children}
        <Grid style={styles.toggleWrapper}>
          <FormToggle title="Assign Theme" value={active} />
          <FormTooltip title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum." />
        </Grid>
      </Grid>
      <Grid style={styles.imageHolder}>
        <Image style={styles.image} source={picture} />
      </Grid>
    </Grid>
  );
};

const getStyles = (isDesktop: boolean): Styles => ({
  container: {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    paddingBottom: 46,
  },
  description: {
    marginRight: isDesktop ? 75 : 0,
    color: colors.brownishGrey,
    fontSize: 16,
    lineHeight: 1.4,
  },
  toggleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  imageHolder: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 12,
    overflow: 'hidden',
    flexShrink: 0,
    position: 'relative',
    paddingTop: 184,
    maxHeight: 184,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    objectFit: 'cover',
  },
});

export default OnboardingThemeSwitcher;
