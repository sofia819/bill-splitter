import { Typography } from '@material-ui/core';

type UserProps = {
  name: string;
};

const UserItem = (props: UserProps) => (
  <>
    <Typography>{props.name}</Typography>
  </>
);

export default UserItem;
