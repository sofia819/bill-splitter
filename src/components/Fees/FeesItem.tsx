import { Typography, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

type FeesProps = {
  value: string;
  title: string;
  addDivider: boolean;
};

const FeesItem = (props: FeesProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography>{props.title}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{props.value}</Typography>
      </Grid>
      {props.addDivider && (
        <Grid item xs={12}>
          <Divider />
        </Grid>
      )}
    </Grid>
  );
};

export default FeesItem;
