import AddMealPanel from './AddMealPanel';
import MealList from 'components/Meal/MealList';
import PanelHeader from 'shared/PanelHeader';
import { MEALS } from 'shared/constants';
import PanelContainer from 'shared/PanelContainer';

const MealPanel = () => {
  return (
    <PanelContainer>
      <PanelHeader title={MEALS} />
      <AddMealPanel />
      <MealList />
    </PanelContainer>
  );
};

export default MealPanel;
