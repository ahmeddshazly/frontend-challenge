import { CustomCard } from '@customizations/CardCustomization';
import { Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactElement } from 'react';
import { Bar, BarChart, Cell, Label, LabelList, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

interface IGeneralOverviewCardProps {
  cardTitle: string;
  colors: [string, string];
  unit: string;
  icon: string;
  totalUser: number;
  monthlyUser: number;
  monthlyCompany: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  generalOverviewCardWrapper: {
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingTop: '33.33%', //aspect ratio of 3:1
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '50%', //aspect ratio of 2:1
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '33.33%', //aspect ratio of 3:1
    },
  },
  generalOverviewCard: {
    boxSizing: 'border-box',
    padding: '10px',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'visible',
  },
  generalOverviewCardContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
  },
  pieChartColumn: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '50%',
    alignItems: 'center',
  },
  barChartColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '1.4vw',
    height: '15%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '3vw',
    },
  },
  cardFooter: {
    fontSize: '.75vw',
    height: '5%',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.4vw',
    },
  },
  iconContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'min(8%, 70px)',
    aspectRatio: '1/1',
    top: '0',
    left: '0',
    transform: 'translate(-20%, -20%)',
    borderRadius: '50%',
  },
  icon: {
    width: '50%',
  },
}));

const computeNeededRestValueForPercentage = (totalUser: number, step: number): number => {
  const wantedFillRatio = (totalUser % step) / step;
  const neededRestValue = (totalUser / wantedFillRatio) * (1 - wantedFillRatio);
  return neededRestValue;
};

const pieChartRestValue = (totalUser: number, step?: number): number => {
  const default_step = 1000;
  if (step === undefined) {
    step = default_step;
  }

  return totalUser === 0 ? step : computeNeededRestValueForPercentage(totalUser, step);
};

export const GeneralOverviewCard = (props: IGeneralOverviewCardProps): ReactElement => {
  const { monthlyUser, monthlyCompany, totalUser, unit } = props;
  const classes = useStyles();
  const theme = useTheme();
  const pieDonutData = [
    { name: 'Rewards earned / CO2 saved', value: totalUser },
    { name: '', value: pieChartRestValue(totalUser) },
  ];

  const renderedIcon = (
    <div className={classes.iconContainer} style={{ backgroundColor: `${props.colors[0]}` }}>
      <img src={props.icon} alt="icon" className={classes.icon} />
    </div>
  );

  return (
    <div className={classes.generalOverviewCardWrapper}>
      <CustomCard className={classes.generalOverviewCard}>
        {renderedIcon}
        <div className={classes.generalOverviewCardContent}>
          <div className={classes.pieChartColumn}>
            <h3 className={classes.cardTitle}>{props.cardTitle}</h3>
            <ResponsiveContainer height="80%" debounce={1}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={pieDonutData}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius="80%"
                  outerRadius="100%"
                  cornerRadius={25}
                  stroke="none"
                >
                  <Cell key="cell-0" fill={props.colors[0]} />
                  <Cell key="cell-1" fill={props.colors[1]} />
                  <Label
                    value={`${pieDonutData[0].value} ${unit}`}
                    position="center"
                    style={{
                      fill: props.colors[0],
                      fontWeight: 599,
                      fontSize: 'clamp(.8rem, 2vw, 20px)',
                    }}
                  />
                </Pie>
                <Tooltip active={true} formatter={(value: number) => value} contentStyle={{ display: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={classes.barChartColumn}>
            <h3 className={classes.cardTitle}>This Month</h3>
            <ResponsiveContainer height="80%" debounce={1}>
              <BarChart
                data={[
                  { name: 'Me', value: monthlyUser },
                  { name: 'Company Average', value: monthlyCompany },
                ]}
                margin={{
                  top: 30,
                  right: 30,
                  left: 5,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" axisLine={false} tick={{ fill: theme.palette.text.primary }} />
                <Tooltip formatter={(value: number) => value} />
                <Bar dataKey="value" unit={unit} fill={props.colors[0]} radius={20} barSize={25}>
                  <LabelList formatter={(value: number) => value} position="top" fill={theme.palette.text.primary} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};
