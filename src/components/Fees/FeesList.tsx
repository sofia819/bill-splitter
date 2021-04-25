import { useContext } from 'react';
import { BillDataContext } from 'context/BillDataContext';
import Grid from '@material-ui/core/Grid';
import FeesItem from './FeesItem';
import { TAX, TIPS, NO_VALUE } from 'shared/constants';
import ListContainer from 'shared/ListContainer';
import { formatPrice } from 'shared/utils';

const FeesList = () => {
  const { tipPercent, tax } = useContext(BillDataContext);

  return (
    <ListContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FeesItem
            title={TIPS}
            value={tipPercent ? `${tipPercent.toString()}%` : NO_VALUE}
            addDivider
          />
        </Grid>
        <Grid item xs={12}>
          <FeesItem
            title={TAX}
            value={tax > 0 ? formatPrice(tax) : NO_VALUE}
            addDivider={false}
          />
        </Grid>
      </Grid>
    </ListContainer>
  );
};
export default FeesList;
