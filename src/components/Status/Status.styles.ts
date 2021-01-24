import { createUseStyles } from 'react-jss';
import theme, { Theme } from '../../theme';

export default createUseStyles<Theme>({
  root: {
    padding: theme.spacing(2)
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width: 650px)': {
      flexDirection: 'column',
      '& > *': {
        margin: '3px auto'
      }
    }
  }
});
