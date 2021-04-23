import { BillDataProvider } from './context/BillDataContext';
import FeesPanel from './components/Fees/FeesPanel';
import ResultsPanel from './components/Results/ResultsPanel';
import UserPanel from './components/User/UserPanel';
import MealPanel from './components/Meal/MealPanel';

const App = () => {
  return (
    <BillDataProvider>
      <UserPanel />
      <MealPanel />
      <FeesPanel />
      <ResultsPanel />
    </BillDataProvider>
  );
};

export default App;
