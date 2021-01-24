import { createUseStyles } from 'react-jss';
import theme, { Theme } from '../../theme';

export default createUseStyles<Theme>({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2)
  }
});
