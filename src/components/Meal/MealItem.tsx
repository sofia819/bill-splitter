import { User } from '../../context/BillDataContext';
import EditMealPanel from './EditMealPanel';
import ItemCost from '../shared/ItemCost';

type MealProps = {
  id: number;
  name: string;
  price: number;
  users: User[];
  addDivider: boolean;
};

const MealItem = (props: MealProps) => (
  <>
    <ItemCost
      itemName={props.name}
      cost={props.price}
      addDivider={props.addDivider}
    />
    <EditMealPanel />
  </>
);

export default MealItem;
