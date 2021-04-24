import AddFeesPanel from './AddFeesPanel';
import FeesList from './FeesList';
import PanelHeader from '../shared/PanelHeader';
import { FEES } from '../shared/constants';
import PanelContainer from '../shared/PanelContainer';

const FeesPanel = () => {
  return (
    <PanelContainer>
      <PanelHeader title={FEES} />
      <AddFeesPanel />
      <FeesList />
    </PanelContainer>
  );
};

export default FeesPanel;
