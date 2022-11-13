import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ReactElement, useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.secondary.dark,
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: '20',
  },
  header2: {
    color: theme.palette.secondary.main,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
    paddingBlock: '15px 5px',
  },
  question: {
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 1.6,
    marginBlock: '10px 3px',
  },
  answer: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: 1.6,
    margin: '0 0 15px ',
  },
  indented: {
    margin: 0,
    textIndent: '40px',
  },
  btb: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: 1.6,
    margin: '0 0 15px ',
  },
}));

export const DomManipulationView = (): ReactElement => {
  const classes = useStyles();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'contentscript.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      window.location.reload();
    };
  }, []);

  return (
    <section>
      <h1 className={classes.header}>Dummy Structure for DOM Manipulation</h1>
      <div>
        <h2 className={classes.header2}>Not So Important Title</h2>
        <p className={classes.question}>Asdf</p>
        <p className={classes.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <div>
        <h2 className={classes.header2}>More Text</h2>
        <p className={classes.question}>Budget-to-Beat</p>
        <p className={classes.btb}> 351 €</p>
        <p className={classes.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p className={classes.question}>Are rewards paid out for canceled or changed bookings?</p>
        <p className={classes.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </section>
  );
};
