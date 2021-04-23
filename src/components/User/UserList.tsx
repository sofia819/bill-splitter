import { useContext } from 'react';
import { BillDataContext } from '../../context/BillDataContext';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import UserItem from './UserItem';
import ListContainer from '../shared/ListContainer';

const UserList = () => {
  const { users } = useContext(BillDataContext);

  return (
    <ListContainer>
      <Grid container spacing={2}>
        {users.map((user, index) => (
          <>
            <Grid item xs={12} key={user.id}>
              <UserItem name={user.name} />
            </Grid>
            {index + 1 < users.length && (
              <Grid item xs={12} key={user.id}>
                <Divider />
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </ListContainer>
  );
};

export default UserList;
