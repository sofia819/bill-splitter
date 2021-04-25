import React, { useState, useContext, useEffect } from 'react';
import { BillDataContext } from 'context/BillDataContext';
import { Input, Button, Typography, Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import {
  EDIT_FEES_TEXT,
  SAVE,
  CANCEL,
  TAX,
  TIPS_PERCENT,
} from 'shared/constants';

const AddFeesPanel = () => {
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsAddPanelOpen((prevState) => !prevState);
  const handleClosePanel = () => setIsAddPanelOpen((prevState) => !prevState);

  const { tipPercent, setTipPercent, tax, setTax } = useContext(
    BillDataContext
  );
  const [tipPercentInput, setTipPercentInput] = useState<number>(tipPercent);
  const [taxInput, setTaxInput] = useState<number>(tax);

  useEffect(() => {
    setTipPercentInput(tipPercent);
    setTaxInput(tax);
  }, [tipPercent, tax, isAddPanelOpen]);

  const handleTipPercentInput: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setTipPercentInput(parseFloat(e.target.value));

  const handleTaxInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setTaxInput(parseFloat(e.target.value));

  const isTipPercentInputInvalid = tipPercentInput <= 0;

  const isTaxInputInvalid = taxInput <= 0;

  const handleSave = () => {
    if (!isTipPercentInputInvalid && !isTaxInputInvalid) {
      setTipPercent(tipPercentInput);
      setTax(taxInput);
      handleClosePanel();
    }
  };

  return (
    <>
      <Button variant='contained' color='primary' onClick={handleOpenPanel}>
        {EDIT_FEES_TEXT}
      </Button>
      <Dialog
        aria-labelledby={EDIT_FEES_TEXT}
        open={isAddPanelOpen}
        onClose={handleClosePanel}
      >
        <DialogTitle>{EDIT_FEES_TEXT}</DialogTitle>
        <DialogContent>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>{TIPS_PERCENT}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder={TIPS_PERCENT}
                  value={tipPercentInput}
                  onChange={handleTipPercentInput}
                  error={isTipPercentInputInvalid}
                  type='number'
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
                  type='number'
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
