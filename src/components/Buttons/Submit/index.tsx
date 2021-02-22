import { Button, CircularProgress } from '@material-ui/core';
import { Styles, Style } from 'styles';
import React, { FC } from 'react';

interface Props {
  disabled?: boolean;
  style?: Style;
  className?: string;
  processing?: boolean;
  onClick: () => void;
}

export const SubmitButton: FC<Props> = ({ className, disabled, style, processing, children, onClick }) => {
  const handlePressSubmit = () => {
    onClick();
  };

  return (
    <Button
      className={className}
      style={{ ...styles.button, ...style }}
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={handlePressSubmit}
    >
      {processing ? <CircularProgress color="secondary" size={20} /> : children}
    </Button>
  );
};

const styles: Styles = {
  button: {
    height: 52,
    width: '100%',
  },
};

export default SubmitButton;
