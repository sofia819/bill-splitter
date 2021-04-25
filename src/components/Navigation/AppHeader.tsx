import { Button, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { SWITCH_THEME, BILL_SPLITTER } from 'shared/constants';

type AppHeaderProps = {
  setSelectedTheme: (
    selectedTheme: boolean | ((prevState: boolean) => boolean)
  ) => void;
};

const AppHeader = (props: AppHeaderProps) => {
  const handleSelectTheme = () => {
    props.setSelectedTheme((prevState) => !prevState);
  };

  return (
    <Box p={2}>
      <Grid container alignItems='center'>
        <Grid item xs={8}>
          <Typography variant='h4'>{BILL_SPLITTER}</Typography>
        </Grid>
        <Grid item xs={4} container justify='flex-end'>
          <Button variant='outlined' onClick={handleSelectTheme}>
            {SWITCH_THEME}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppHeader;
