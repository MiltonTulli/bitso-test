import { createUseStyles } from 'react-jss';
import theme, { Theme } from '../../theme';

export default createUseStyles<Theme>({
  root: {
    background: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },
  icon: {
    transform: 'scale(0.8)'
  },
  link: {
    color: theme.palette.white,
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      transform: 'scale(0.8)'
    }
  }
});
