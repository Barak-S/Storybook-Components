import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ContainedButton, TextButton } from 'components/Buttons';
import React, { FC } from 'react';
import { colors, mx, StyleProps, useScreenSizes } from 'styles';

interface Props extends StyleProps {
  className?: string;
}

export const SetupContainerFooter: FC<Props> = ({ style }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { isDesktop } = useScreenSizes();

  return (
    <Grid style={style} className={classes.container}>
      <ContainedButton
        size="medium"
        className={classes.backBtn}
        startIcon="chevron-circle-left"
        style={{ ...(isDesktop && { maxWidth: 100 }) }}
      >
        {'back'}
      </ContainedButton>
      <Grid className={classes.buttonGroup}>
        <TextButton className={classes.textBtn}>{'Save & Continue Later'}</TextButton>
        <ContainedButton
          size="medium"
          endIcon="chevron-circle-right"
          className={classes.continueBtn}
          style={{ ...(isDesktop && { maxWidth: 145 }) }}
        >
          {'continue'}
        </ContainedButton>
      </Grid>
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 20,
      ...mx.borderTop(1, 'solid', colors.greyish),
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
    backBtn: {
      marginBottom: 20,
      maxWidth: 320,
      [theme.breakpoints.up('sm')]: {
        marginBottom: 0,
        maxWidth: 100,
      },
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      width: '100%',
      maxWidth: 320,
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
    },
    continueBtn: {
      marginBottom: 20,
      [theme.breakpoints.up('sm')]: {
        marginBottom: 0,
      },
    },
    textBtn: {
      marginRight: 15,
      width: '100%',
      maxWidth: 145,
      fontSize: 14,
    },
  })();

export type SetupContainerFooterProps = Props;
export default SetupContainerFooter;
