import { Button, CircularProgress, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import { AuthScreenBackground } from 'components/Auth';
import { Text, View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, MouseEvent } from 'react';
import { colors, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  processing?: boolean;
  onSubmit?: () => void;
}

export const DashboardEmailConfirmScene: FC<Props> = ({ processing, onSubmit }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleBtnClick = (event: MouseEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <Paper style={styles.container} elevation={3}>
      <AuthScreenBackground style={styles.bg}>
        <Text style={styles.text}>
          You will experience limited functionality until your email address is confirmed.
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
            Resend Email Confirmation
          </Button>
        )}
      </AuthScreenBackground>
    </Paper>
  );
};

const styles: Styles = {
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 27,
  },
  bg: {
    minHeight: 310,
    padding: '0 55px',
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
  },
  processingWrap: {
    minHeight: 35,
  },
};

export type DashboardEmailConfirmSceneProps = Props;
export default DashboardEmailConfirmScene;
