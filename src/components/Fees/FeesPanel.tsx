import AddFeesPanel from './AddFeesPanel';
import FeesList from './FeesList';
import PanelHeader from '../shared/PanelHeader';
import { FEES } from '../shared/constants';

const FeesPanel = () => {
  return (
    <>
      <PanelHeader title={FEES} />
      <AddFeesPanel />
      <FeesList />
    </>
  );
};

export default FeesPanel;
