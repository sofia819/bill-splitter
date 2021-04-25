import { BillDataProvider } from './context/BillDataContext';
import FeesPanel from './components/Fees/FeesPanel';
import ResultsPanel from './components/Results/ResultsPanel';
import UserPanel from './components/User/UserPanel';
import MealPanel from './components/Meal/MealPanel';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useState } from 'react';
import AppHeader from './components/Navigation/AppHeader';

const App = () => {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

  const [useDarkTheme, setSelectedTheme] = useState(true);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <AppHeader setSelectedTheme={setSelectedTheme} />
      <CssBaseline />
      <BillDataProvider>
        <UserPanel />
        <MealPanel />
        <FeesPanel />
        <ResultsPanel />
      </BillDataProvider>
    </ThemeProvider>
  );
};

export default App;
