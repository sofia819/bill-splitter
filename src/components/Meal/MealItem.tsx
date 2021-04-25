import { User } from 'context/BillDataContext';
import EditMealPanel from 'components/Meal/EditMealPanel';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ItemCost from 'shared/ItemCost';
import DeleteMealButton from 'components/Meal/DeleteMealButton';
import { roundNumber } from 'shared/utils';

type MealProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  users: User[];
  addDivider: boolean;
};

const MealItem = (props: MealProps) => {
  const itemName = `${props.name} x ${props.quantity}`;
  return (
    <>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={6}>
          <ItemCost
            itemName={itemName}
            cost={roundNumber(props.price * props.quantity)}
            addDivider={false}
          />
        </Grid>
        <Grid item xs container justify='center'>
          <EditMealPanel id={props.id} />
        </Grid>
        <Grid item xs container justify='center'>
          <DeleteMealButton id={props.id} />
        </Grid>
        {props.addDivider && (
          <Grid item xs={12}>
            <Divider />
          </Grid>
        )}
      </Grid>
      {props.addDivider && <Divider />}
    </>
  );
};

export default MealItem;
