import { useContext } from 'react';
import { BillDataContext } from 'context/BillDataContext';
import Grid from '@material-ui/core/Grid';
import UserItem from 'components/User/UserItem';
import ListContainer from 'shared/ListContainer';

const UserList = () => {
  const { users } = useContext(BillDataContext);

  return (
    <ListContainer>
      <Grid container spacing={2}>
        {users.map((user, index) => (
          <Grid item xs={12} key={user.id}>
            <UserItem
              id={user.id}
              name={user.name}
              addDivider={index + 1 < users.length}
            />
          </Grid>
        ))}
      </Grid>
    </ListContainer>
  );
};

export default UserList;
