import { makeStyles } from '@material-ui/core';

export const useStyles = () =>
  makeStyles(() => ({
    avaBlock: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '10%',
      margin: '50px',
    },
    avatar: {
      marginBottom: '26px',
    },
  }))();
