import { createUseStyles } from 'react-jss';
import theme, { Theme } from '../../theme';

export default createUseStyles<Theme>({
  root: ({ size }) => ({
    width: size,
    height: size,
    borderRadius: theme.spacing(0.8),
    transition: 'ease-out 0.2s',
    '&:hover': {
      filter: 'opacity(0.8)',
      transform: 'scale(0.95)'
    }
  }),
  active: {
    background: theme.palette.island.active
  },
  inactive: {
    background: theme.palette.island.inactive
  }
});
