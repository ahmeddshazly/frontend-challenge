import logo from '@assets/img/logos/eco.mio_icon_white.png';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Route } from '@src/routes';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    height: '100%',
    width: theme.custom.size.drawerWidthOpen,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    transition: theme.custom.transition.drawerTransition,

    [theme.breakpoints.down('md')]: {
      width: theme.custom.size.drawerWidthClosed,
    },
  },
  closed: {
    width: theme.custom.size.drawerWidthClosed,
  },
  itemsWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 5,
    gap: 20,
  },
  logoWrapper: {
    width: '100%',
    height: `${theme.custom.size.navBarHeight}px`,
    display: 'grid',
    gridTemplateColumns: '30px calc(100% - 30px)',
    alignItems: 'center',
    paddingLeft: 15,
    gap: 30,
  },
  logo: {
    width: '25px !important',
    height: '25px !important',
    backgroundImage: `url(${logo})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  logoText: {
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  logoSeparator: {
    width: 'calc(100% - 5px)',
    height: 1,
    backgroundColor: 'white',
    marginTop: -20,
    marginBottom: 10,
  },
  item: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
    cursor: 'pointer',
    borderBottomLeftRadius: '20px',
    borderTopLeftRadius: '20px',

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  active: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    position: 'relative',

    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: -20,
      left: 0,
      height: 20,
      width: '100%',
      backgroundColor: theme.palette.background.default,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -20,
      left: 0,
      height: 20,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
      borderTopRightRadius: '20px',
    },

    '& $title': {
      [theme.breakpoints.down('md')]: {
        visibility: 'hidden',
      },
      '&::before': {
        visibility: 'visible',
        content: '""',
        position: 'absolute',
        top: -20,
        left: 0,
        height: 20,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        borderBottomRightRadius: '20px',
      },
      '&::after': {
        visibility: 'visible',
        content: '""',
        position: 'absolute',
        bottom: -20,
        left: 0,
        height: 20,
        width: '100%',
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  icon: {
    display: 'flex',
    fontSize: '1.8rem',
  },
  title: {
    marginLeft: '30px',
    marginTop: '3px',
  },
  menuItem: {
    width: '100%',
    paddingLeft: 3,
  },
}));

interface SideBarProps {
  open: boolean;
  openMobile: boolean;
  routes: Route[];
  handleToggleSidebar: () => void;
  handleToggleSidebarMobile: () => void;
}

export const SideBar = (props: SideBarProps): ReactElement => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.drawer, { [classes.closed]: !props.open })}>
      <div className={classes.itemsWrapper}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo} />
          <div className={classes.logoText}>eco.mio</div>
        </div>
        <div className={classes.logoSeparator} />
        {props.routes.map((route, index) => (
          <NavLink
            to={route.path}
            key={index}
            className={({ isActive }) =>
              clsx(classes.item, {
                [classes.active]: isActive,
              })
            }
          >
            <div className={classes.icon}>{<route.icon />}</div>
            <div className={classes.title}>{route.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
