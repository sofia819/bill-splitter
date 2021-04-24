import AddMealPanel from './AddMealPanel';
import MealList from './MealList';
import PanelHeader from '../shared/PanelHeader';
import { MEALS } from '../shared/constants';

const MealPanel = () => {
  return (
    <>
      <PanelHeader title={MEALS} />
      <AddMealPanel />
      <MealList />
    </>
  );
};

export default MealPanel;
