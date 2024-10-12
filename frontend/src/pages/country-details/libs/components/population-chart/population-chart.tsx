import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styles from './styles.module.css';

type Properties = {
  data: { year: number; value: number }[];
};

const PopulationChart = ({ data }: Properties): JSX.Element => {
  return (
    <div className={styles['wrapper-population']}>
      <p className={styles['subtitle']}>Population of the country</p>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="rgb(247, 189, 0)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { PopulationChart };
