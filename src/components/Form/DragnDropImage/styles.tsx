import { makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'styles';

export const useStyles = () =>
  makeStyles((theme: Theme) => ({
    container: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-around',
      alignItems: 'center',
      minWidth: 200,
      height: 200,
      padding: '0 20%',
      borderRadius: '12px',
      border: `solid 1px ${colors.lightPeriwinkle}`,
      backgroundColor: colors.paleGrey,
      [theme.breakpoints.down('md')]: {
        padding: '9% 10px',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    inputFile: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: '0',
    },
    blockImage: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleInput: {
      fontSize: '15px',
      fontWeigth: 'bolt',
      fontStyle: 'normal',
      lineHeight: `1.27`,
      letterSpacing: 'nomal',
      textAlign: 'center',
      color: colors.brownishGrey,
    },
    icon: {
      textAlign: 'center',
    },
    blockCenter: {
      fontSize: '17px',
      fontStretch: 'normal',
      fontWeigth: '300',
      margin: '35px 36.8px 27px 29px',
      fontStyle: 'normal',
      lineHeight: '21px',
      width: '18px',
      height: '20px',
      fontFamily: 'Rubik',
    },
    blockSubmit: {
      position: 'relative',
      display: 'block',
      textAlign: 'end',
    },
    imagePrev: {
      position: 'absolute',
      width: '100%',
      height: '-webkit-fill-available',
      borderRadius: '12px',
    },
    title: {
      display: 'flex',
    },
  }))();
