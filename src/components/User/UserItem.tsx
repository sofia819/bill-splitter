import { Typography, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import EditUserPanel from 'components/User/EditUserPanel';
import DeleteUserButton from 'components/User/DeleteUserButton';

type UserProps = {
  id: number;
  name: string;
  addDivider: boolean;
};

const UserItem = (props: UserProps) => (
  <Grid container spacing={2} alignItems='center'>
    <Grid item xs={6} container justify='center'>
      <Typography>{props.name}</Typography>
    </Grid>
    <Grid item xs container justify='center'>
      <EditUserPanel id={props.id} />
    </Grid>
    <Grid item xs container justify='center'>
      <DeleteUserButton id={props.id} />
    </Grid>
    {props.addDivider && (
      <Grid item xs={12}>
        <Divider />
      </Grid>
    )}
  </Grid>
);

export default UserItem;
