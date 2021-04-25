import FeesItem from '../components/Fees/FeesItem';
import { formatPrice } from './utils';

type ItemCostProps = {
  itemName: string;
  cost: number;
  addDivider: boolean;
};

const ItemCost = (props: ItemCostProps) => {
  return (
    <FeesItem
      value={formatPrice(props.cost)}
      title={props.itemName}
      addDivider={props.addDivider}
    />
  );
};

export default ItemCost;
