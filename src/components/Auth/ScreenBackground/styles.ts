import backgroundImg from 'assets/background.png';
import { Styles } from 'styles';

export const styles: Styles = {
  screenContainer: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("${backgroundImg}")`,
    backgroundSize: 'cover',
  },
};
