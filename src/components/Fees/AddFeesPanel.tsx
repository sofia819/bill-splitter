import React, { useState, useContext, useEffect } from 'react';
import { BillDataContext } from '../../context/BillDataContext';
import { Input, Button, Typography, Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import {
  ADD_FEES_TEXT,
  SAVE,
  CANCEL,
  TAX,
  TIP_PERCENT,
} from '../shared/constants';

const AddFeesPanel = () => {
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsAddPanelOpen((prevState) => !prevState);
  const handleClosePanel = () => setIsAddPanelOpen((prevState) => !prevState);

  const { tipPercent, setTipPercent, tax, setTax } = useContext(
    BillDataContext
  );
  const [tipPercentInput, setTipPercentInput] = useState<string>('');
  const [taxInput, setTaxInput] = useState<string>('');

  useEffect(() => {
    setTipPercentInput(tipPercent.toString());
    setTaxInput(tax.toString());
  }, [tipPercent, tax, isAddPanelOpen]);

  const handleTipPercentInput: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setTipPercentInput(e.target.value);

  const handleTaxInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setTaxInput(e.target.value);

  const isTipPercentInputInvalid =
    tipPercentInput === '' || isNaN(parseInt(tipPercentInput));

  const isTaxInputInvalid = taxInput === '' || isNaN(parseInt(taxInput));

  const handleSave = () => {
    if (!isTipPercentInputInvalid && !isTaxInputInvalid) {
      setTipPercent(parseInt(tipPercentInput));
      setTax(parseInt(taxInput));
      handleClosePanel();
    }
  };

  return (
    <>
      <Button variant='contained' color='primary' onClick={handleOpenPanel}>
        {ADD_FEES_TEXT}
      </Button>
      <Dialog
        aria-labelledby={ADD_FEES_TEXT}
        open={isAddPanelOpen}
        onClose={handleClosePanel}
      >
        <DialogTitle>{ADD_FEES_TEXT}</DialogTitle>
        <DialogContent>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>{TIP_PERCENT}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder={TIP_PERCENT}
                  value={tipPercentInput}
                  onChange={handleTipPercentInput}
                  error={isTipPercentInputInvalid}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>{TAX}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder={TAX}
                  value={taxInput}
                  onChange={handleTaxInput}
                  error={isTaxInputInvalid}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePanel}>{CANCEL}</Button>
          <Button onClick={handleSave}>{SAVE}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddFeesPanel;
