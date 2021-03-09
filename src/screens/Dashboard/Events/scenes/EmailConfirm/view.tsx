import { Button, CircularProgress, Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { Text, View } from 'components/Common';
import { DashboardSceneContainer } from 'components/Dashboard';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, MouseEvent } from 'react';
import { colors, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  processing?: boolean;
  onSubmit?: () => void;
}

export const DashboardEmailConfirmView: FC<Props> = ({ processing, onSubmit }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleBtnClick = (event: MouseEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  const classes = useStyles(theme);

  return (
    <DashboardSceneContainer style={styles.container}>
      <Grid className={classes.inner}>
        <Text style={styles.text}>
          {'You will experience limited functionality until your email address is confirmed.'}
        </Text>
        {processing ? (
          <View style={styles.processingWrap} justifyContent="center" alignItems="center">
            <CircularProgress size={20} color="secondary" />
          </View>
        ) : (
          <Button
            style={styles.button}
            variant="contained"
            color="primary"
            endIcon={<LineAwesomeIcon type={isTablet ? 'paper-plane' : 'envelope-open-text'} />}
            onClick={handleBtnClick}
          >
            {'Resend Email Confirmation'}
          </Button>
        )}
      </Grid>
    </DashboardSceneContainer>
  );
};

const styles: Styles = {
  container: {
    marginBottom: 27,
  },
  text: {
    marginBottom: 40,
    textTransform: 'none',
    fontSize: 20,
    color: colors.brownishGrey,
    textAlign: 'center',
  },
  button: {
    minHeight: 35,
    padding: '7px 15px',
    borderRadius: 6,
    fontSize: 15,
    letterSpacing: 1.5,
    lineHeight: 1.2,
    maxWidth: 320,
  },
  processingWrap: {
    minHeight: 35,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    inner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: 310,
      padding: '25px 30px 76px',
      [theme.breakpoints.up('sm')]: {
        padding: '25px 55px 76px',
      },
    },
  })();

export type DashboardEmailConfirmViewProps = Props;
export default DashboardEmailConfirmView;
