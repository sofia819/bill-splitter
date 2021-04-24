import FeesItem from '../Fees/FeesItem';
import { formatPrice } from '../shared/utils';

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
