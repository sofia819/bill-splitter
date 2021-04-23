import { User } from '../../context/BillDataContext';
import { Typography } from '@material-ui/core';
import EditMealPanel from './EditMealPanel';

type MealProps = {
  id: number;
  name: string;
  price: number;
  users: User[];
};

const MealItem = (props: MealProps) => (
  <>
    <Typography>{props.name}</Typography>
    <EditMealPanel />
  </>
);

export default MealItem;
