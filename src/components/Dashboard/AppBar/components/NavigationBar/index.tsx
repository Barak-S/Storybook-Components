import { Grid, Hidden, makeStyles, Theme, useTheme } from '@material-ui/core';
import { Splitter } from 'components/Common';
import React, { FC } from 'react';
import FilledBtn from '../FilledBtn';
import TextBtn from '../TextBtn';
import { colors, mx, Styles } from 'styles';

export const NavigationBar: FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.mainSection}>
      <FilledBtn style={styles.mainItem} href="#" active={true}>
        {'Events'}
      </FilledBtn>
      <FilledBtn style={styles.mainItem} href="#">
        {'Analytics'}
      </FilledBtn>
      <FilledBtn style={styles.mainItem} href="#">
        {'User Management'}
      </FilledBtn>
      <Grid className={classes.supportLinks}>
        <TextBtn href="#">{`Support`}</TextBtn>
        <Hidden mdDown>
          <Splitter />
        </Hidden>
        <TextBtn href="#">{`Contact Us`}</TextBtn>
        <Hidden mdDown>
          <Splitter />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default NavigationBar;

const dashboardHeight = 73;

const styles: Styles = {
  mainItem: {
    height: dashboardHeight,
    width: 201,
    ...mx.borderRight(1, 'solid', colors.lightBlueGrey),
    ...mx.borderBottom(1, 'solid', colors.lightBlueGrey),
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    mainSection: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 201,
      minHeight: '100vh',
      background: colors.white,
      ...mx.borderRight(1, 'solid', colors.lightBlueGrey),

      [theme.breakpoints.up('lg')]: {
        position: 'relative',
        maxWidth: 'initial',
        minHeight: 'initial',
        top: 'initial',
        left: 'initial',
        flexDirection: 'row',
        height: dashboardHeight,
        fontSize: 18,
        background: 'none',
        borderRight: 'none',
      },
    },
    supportLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('lg')]: {
        height: dashboardHeight,
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        fontSize: 18,
      },
    },
  })();
