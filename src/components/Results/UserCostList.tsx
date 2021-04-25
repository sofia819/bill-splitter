import ItemCost from 'shared/ItemCost';
import Grid from '@material-ui/core/Grid';
import ListContainer from 'shared/ListContainer';
import { BillDataContext } from 'context/BillDataContext';
import { useContext } from 'react';

type UserCostListProps = {
  userCosts: number[];
};

const UserCostList = (props: UserCostListProps) => {
  const { users } = useContext(BillDataContext);
  return (
    <ListContainer>
      <Grid container spacing={2}>
        {props.userCosts.map((userCost, index) => (
          <Grid item xs={12}>
            <ItemCost
              itemName={users[index].name}
              cost={userCost}
              addDivider={index + 1 < props.userCosts.length}
            />
          </Grid>
        ))}
      </Grid>
    </ListContainer>
  );
};
export default UserCostList;
