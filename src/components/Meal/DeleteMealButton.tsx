import { DELETE } from '../shared/constants';
import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { BillDataContext, Meal } from '../../context/BillDataContext';

type DeleteMealButtonProps = {
  id: number;
};

const DeleteMealButton = (props: DeleteMealButtonProps) => {
  const { setMeals } = useContext(BillDataContext);

  const handleDeleteMeal = () => {
    setMeals((prevState: Meal[]) => {
      return prevState.filter((meal) => meal.id !== props.id);
    });
  };

  return (
    <Button variant='contained' color='secondary' onClick={handleDeleteMeal}>
      {DELETE}
    </Button>
  );
};

export default DeleteMealButton;
