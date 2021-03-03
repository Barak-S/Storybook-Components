import { Button, CircularProgress } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { m, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  disabled?: boolean;
  type?: 'plus' | 'done';
  processing?: boolean;
}

export const SubmitButton: FC<Props> = ({ style, disabled, type, processing, children }) => {
  return (
    <Button
      style={m(styles.container, style)}
      variant="contained"
      color="primary"
      disabled={disabled}
      startIcon={type === 'done' && <LineAwesomeIcon type="check-circle" />}
      endIcon={type === 'plus' && <LineAwesomeIcon type="plus-circle" />}
    >
      {processing ? <CircularProgress color="secondary" size={20} /> : children}
    </Button>
  );
};

const styles: Styles = {
  container: {
    height: 52,
    width: '100%',
  },
};

export type SubmitButtonProps = Props;
export default SubmitButton;
