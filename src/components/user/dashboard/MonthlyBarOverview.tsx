import { CustomCard } from '@customizations/CardCustomization';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactElement } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface IMonthlyBarOverviewProps {
  cardTitle: string;
  label: string;
  color: string;
  values: { title: string; value: number }[];
  unit: string;
}

const useStyles = makeStyles(() => ({
  barTitle: {
    paddingLeft: '1rem',
  },
  barLabel: {
    paddingLeft: '1rem',
  },
}));

export const MonthlyBarOverview = (props: IMonthlyBarOverviewProps): ReactElement => {
  const { cardTitle, label, color, values, unit } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <CustomCard>
      <h3 className={classes.barTitle}>{cardTitle}</h3>
      <ResponsiveContainer aspect={3}>
        <BarChart
          data={values.map((val) => ({ title: val.title, value: val.value }))}
          margin={{
            top: 10,
            right: 30,
            left: 5,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="title" tick={{ fill: theme.palette.text.primary }} />
          <YAxis tick={{ fill: theme.palette.text.primary }} />
          <Tooltip formatter={(value: number) => value} />
          <Bar dataKey="value" fill={color} radius={20} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
      <p className={classes.barLabel}>
        {label} ({unit})
      </p>
    </CustomCard>
  );
};
