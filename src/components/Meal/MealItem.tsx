import { User } from '../../context/BillDataContext';
import EditMealPanel from './EditMealPanel';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ItemCost from '../shared/ItemCost';
import DeleteMealButton from './DeleteMealButton';

type MealProps = {
  id: number;
  name: string;
  price: number;
  users: User[];
  addDivider: boolean;
};

const MealItem = (props: MealProps) => (
  <>
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={6}>
        <ItemCost itemName={props.name} cost={props.price} addDivider={false} />
      </Grid>
      <Grid item xs>
        <EditMealPanel id={props.id} />
      </Grid>
      <Grid item xs>
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

export default MealItem;
