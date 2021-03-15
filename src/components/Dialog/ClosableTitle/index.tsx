import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends WithStyles<typeof styles>, StyleProps {
  onClose?: () => void;
}

const DialogClosableTitle: FC<Props> = ({ children, style, classes, onClose }) => {
  return (
    <MuiDialogTitle style={style} disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <LineAwesomeIcon type="times" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export default withStyles(styles)(DialogClosableTitle);
