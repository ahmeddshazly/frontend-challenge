import { Card, CardContent, CardHeader, Theme } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

export const CustomCard = withStyles((theme: Theme) => ({
  root: {
    border: '0',
    borderRadius: '6px',
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    width: '100%',
    boxShadow: theme.shadows[3],
    display: 'flex',
    flexDirection: 'column',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    transition: 'transform .15s',
    '&:hover': {
      transform: 'scale(1.015)',
    },
  },
}))(Card);

export const CustomCardHeader = withStyles(() => ({
  root: {},
}))(CardHeader);

export const CustomCardContent = withStyles(() => ({
  root: {},
}))(CardContent);
