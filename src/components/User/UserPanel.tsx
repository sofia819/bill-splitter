import AddUserPanel from 'components/User/AddUserPanel';
import UserList from 'components/User/UserList';
import PanelHeader from 'shared/PanelHeader';
import { USERS } from 'shared/constants';
import PanelContainer from 'shared/PanelContainer';

const UserPanel = () => {
  return (
    <PanelContainer>
      <PanelHeader title={USERS} />
      <AddUserPanel />
      <UserList />
    </PanelContainer>
  );
};

export default UserPanel;
