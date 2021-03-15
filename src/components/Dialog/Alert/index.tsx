import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

import ClosableTitle from '../ClosableTitle';

interface Props extends StyleProps {
  title?: string;
  visible?: boolean;
  actions?: AlertDialogAction[];
  onClose?: () => void;
}

interface AlertDialogAction {
  title: string;
  autoFocus?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  onPress?: () => void;
}

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const AlertDialog: FC<Props> = ({ style, title, visible = false, actions, children, onClose }) => {
  return (
    <Dialog style={style} onClose={onClose} open={visible}>
      {!!title && <ClosableTitle onClose={onClose}>{title}</ClosableTitle>}
      <DialogContent dividers>{children}</DialogContent>
      {!!actions && actions.length && (
        <DialogActions>
          {actions.map(({ title, autoFocus, color, onPress }) => (
            <Button key={title} autoFocus={autoFocus} onClick={onPress} color={color}>
              {title}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};
