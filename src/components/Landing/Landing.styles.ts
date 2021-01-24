import { createUseStyles } from 'react-jss';
import theme, { Theme } from '../../theme';

export default createUseStyles<Theme>({
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(5),
    justifyContent: 'space-around'
  },
  selectContainer: {
    maxWidth: 450,
    margin: '0 auto'
  }
});
