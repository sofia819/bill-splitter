import { useContext } from 'react';
import { BillDataContext } from '../../context/BillDataContext';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FeesItem from './FeesItem';
import { TAX, TIP, NO_VALUE } from '../shared/constants';
import ListContainer from '../shared/ListContainer';

const FeesList = () => {
  const { tipPercent, tax } = useContext(BillDataContext);

  return (
    <ListContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FeesItem
            title={TIP}
            value={tipPercent ? `${tipPercent.toString()}%` : NO_VALUE}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FeesItem title={TAX} value={tax > 0 ? tax.toString() : NO_VALUE} />
        </Grid>
      </Grid>
    </ListContainer>
  );
};
export default FeesList;
