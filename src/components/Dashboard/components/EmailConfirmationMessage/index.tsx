import { Button, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import { AuthScreenBackground } from 'components/Auth';
import { Text } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useEffect, useState, MouseEvent } from 'react';
import { colors, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const DashBoardEmailConfirmationMessage: FC<Props> = () => {
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsTablet(matches);
  }, [matches, setIsTablet]);

  const handleResendButtonClick = (event: MouseEvent) => {
    event.preventDefault();
  };

  const iconType = isTablet ? 'paper-plane' : 'envelope-open-text';

  return (
    <Paper style={styles.container} elevation={3}>
      <AuthScreenBackground style={styles.bg}>
        <Text style={styles.text}>
          You will experience limited functionality until your email address is confirmed.
        </Text>
        <Button
          style={styles.button}
          variant="contained"
          color="primary"
          endIcon={<LineAwesomeIcon type={iconType} />}
          onClick={handleResendButtonClick}
        >
          Resend Email Confirmation
        </Button>
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
};

export default DashBoardEmailConfirmationMessage;
