import { Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  notFoundWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 'clamp(1rem, 3vw, 2rem)',
  },
  button: {
    width: 'clamp(8rem, 20%, 24rem)',
    paddingBlock: '1.37em',
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.notFoundWrapper}>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Button
        className={classes.button}
        onClick={() => navigate('/')}
        variant="contained"
        color="secondary"
        type="submit"
      >
        Return to Dashboard
      </Button>
    </div>
  );
};

export default PageNotFound;
