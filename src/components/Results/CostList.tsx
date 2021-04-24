import ItemCost from '../shared/ItemCost';
import ListContainer from '../shared/ListContainer';
import {
  SUBTOTAL,
  TOTAL,
  TIPS,
  TAX,
  TOTAL_USER_COSTS,
} from '../shared/constants';

type CostListProps = {
  subtotal: number;
  tips: number;
  tax: number;
  totalUserCost: number;
  totalCost: number;
};
const CostList = (props: CostListProps) => {
  return (
    <ListContainer>
      <ItemCost itemName={SUBTOTAL} cost={props.subtotal} addDivider />
      <ItemCost itemName={TIPS} cost={props.tips} addDivider />
      <ItemCost itemName={TAX} cost={props.tax} addDivider />
      <ItemCost
        itemName={TOTAL_USER_COSTS}
        cost={props.totalUserCost}
        addDivider
      />
      <ItemCost itemName={TOTAL} cost={props.totalCost} addDivider={false} />
    </ListContainer>
  );
};

export default CostList;
