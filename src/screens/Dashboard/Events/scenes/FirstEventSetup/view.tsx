import { Grid, IconButton, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { Title } from 'components/Common';
import { DashbaordStepperMobileLabel, DashboardSceneContainer } from 'components/Dashboard';
import { LineAwesomeIcon } from 'components/Icons';
import { Stepper } from 'components/Navigation';
import React, { FC } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  steps: string[];
  curStepIndex?: number;
  actionBtnTitle?: string;
  onActionBtnClick?: () => void;
  onIconBtnClick?: () => void;
}

export const DashboardFirstEventSetupView: FC<Props> = ({
  style,
  steps,
  curStepIndex = 0,
  actionBtnTitle = 'Add your first event',
  onActionBtnClick,
  onIconBtnClick,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const iconType = curStepIndex === 0 ? 'plus-circle' : 'sign-in-alt';

  return (
    <DashboardSceneContainer style={ms(styles.container, style)}>
      <Grid className={classes.inner}>
        <Grid className={classes.topLine}>
          <Title className={classes.title} type="h4">
            {'create your first event'}
          </Title>
          <Stepper steps={steps} activeStep={curStepIndex} />
          {!isTablet && (
            <IconButton style={styles.iconButton} onClick={onIconBtnClick}>
              <LineAwesomeIcon type="angle-right" size={34} />
            </IconButton>
          )}
          {isMobile && <DashbaordStepperMobileLabel steps={steps} curStepIndex={curStepIndex} />}
        </Grid>
        <ContainedButton
          className={classes.actionButton}
          color="primary"
          size="large"
          endIcon={iconType}
          onClick={onActionBtnClick}
        >
          {actionBtnTitle}
        </ContainedButton>
      </Grid>
    </DashboardSceneContainer>
  );
};

const styles: Styles = {
  container: {
    marginBottom: 27,
  },
  iconButton: {
    color: colors.coolBlueTwo,
    ...mx.square(40),
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    inner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: 310,
      padding: '25px 30px 76px',
      [theme.breakpoints.up('lg')]: {
        padding: '25px 55px 76px',
      },
    },
    topLine: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: 63,
      position: 'relative',
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 91,
      },
    },
    title: {
      fontWeight: 500,
      color: colors.coolBlueTwo,
      fontSize: 18,
      textTransform: 'uppercase',
      marginBottom: 24,
      [theme.breakpoints.up('lg')]: {
        maxWidth: 125,
        marginBottom: 0,
      },
    },
    actionButton: {
      width: '100%',
      maxWidth: 180,
      padding: '5px 15px',
      [theme.breakpoints.up('md')]: {
        maxWidth: 300,
        textAlign: 'center',
      },
    },
  })();

export type DashboardFirstEventSetupViewProps = Props;
export default DashboardFirstEventSetupView;
