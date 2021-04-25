import { useContext } from 'react';
import { BillDataContext } from 'context/BillDataContext';
import Grid from '@material-ui/core/Grid';
import MealItem from 'components/Meal/MealItem';
import ListContainer from 'shared/ListContainer';

const MealList = () => {
  const { meals } = useContext(BillDataContext);

  return (
    <ListContainer>
      <Grid container spacing={2}>
        {meals.map((meal, index) => (
          <Grid item xs={12} key={meal.id}>
            <MealItem
              id={meal.id}
              name={meal.name}
              price={meal.price}
              quantity={meal.quantity}
              users={meal.users}
              addDivider={index + 1 < meals.length}
            />
          </Grid>
        ))}
      </Grid>
    </ListContainer>
  );
};

export default MealList;
