import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactElement, useEffect, useState } from 'react';
import dummyData from '../../../dummyData.json';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.secondary.main,
    fontSize: 30,
    fontWeight: 'bold',
    textIndent: '0.2em',
  },
  table: {
    width: '100%',
    background: theme.palette.primary.light,
    border: '4mm ridge',
    borderColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderCollapse: 'collapse',
  },
  thead: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  tbody: {
    width: '100%',
    fontSize: '1.2em',
  },
  tcell: {
    border: '3px solid',
    borderColor: theme.palette.primary.main,
    padding: '9px',
  },
}));

export const UserHistoryView = (): ReactElement => {
  const classes = useStyles();
  const [data, setData] = useState<
    {
      Year: number;
      Month: number;
      Co2_savings: number;
      Reward: number;
    }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const history = dummyData.HISTORY_DATA;

      const data = history.map((x) => {
        return {
          Year: x.year,
          Month: x.month,
          Reward: x.reward,
          Co2_savings: x.co2_saved,
        };
      });

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className={classes.header}>History records</h1>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <td className={classes.tcell}>Year</td>
            <td className={classes.tcell}>Month</td>
            <td className={classes.tcell}>CO2 Savings</td>
            <td className={classes.tcell}>Reward</td>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {data.map((x) => {
            return (
              <tr>
                <td className={classes.tcell}>{x.Year}</td>
                <td className={classes.tcell}>{x.Month}</td>
                <td className={classes.tcell}>{x.Co2_savings}</td>
                <td className={classes.tcell}>{x.Reward}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
