import { Button } from '@material-ui/core';
import { DELETE } from 'shared/constants';
import { useContext } from 'react';
import { BillDataContext, User, Meal } from 'context/BillDataContext';

type DeleteUserButtonProps = {
  id: number;
};

const DeleteUserButton = (props: DeleteUserButtonProps) => {
  const { meals, setUsers } = useContext(BillDataContext);

  const handleDeleteUser = () => {
    setUsers((prevState: User[]) => {
      return prevState.filter((user) => user.id !== props.id);
    });
  };

  // Get all the user ids from all the meals and check whether the current user exists in that list
  const canUserBeDeleted =
    meals
      .reduce((allMealUsers: number[], currentMeal: Meal) => {
        allMealUsers.push(
          ...currentMeal.users.reduce(
            (allUserIds: number[], currentUser: User) => {
              allUserIds.push(currentUser.id);
              return allUserIds;
            },
            []
          )
        );
        return allMealUsers;
      }, [])
      .filter((userId) => userId === props.id).length <= 0;

  return (
    <Button
      variant='contained'
      color='secondary'
      onClick={handleDeleteUser}
      disabled={!canUserBeDeleted}
    >
      {DELETE}
    </Button>
  );
};

export default DeleteUserButton;
