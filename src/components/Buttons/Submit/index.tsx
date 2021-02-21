import { Button } from '@material-ui/core';
import { Styles, Style } from 'styles';
import React, { FC } from 'react';

interface Props {
  disabled?: boolean;
  style?: Style;
  className?: string;
  onClick: () => void;
}

export const SubmitButton: FC<Props> = ({ className, disabled, style, children, onClick }) => {
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
      {children}
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
