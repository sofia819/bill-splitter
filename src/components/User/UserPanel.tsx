import AddUserPanel from './AddUserPanel';
import UserList from './UserList';
import PanelHeader from '../shared/PanelHeader';
import { USERS } from '../shared/constants';

const UserPanel = () => {
  return (
    <>
      <PanelHeader title={USERS} />
      <AddUserPanel />
      <UserList />
    </>
  );
};

export default UserPanel;
