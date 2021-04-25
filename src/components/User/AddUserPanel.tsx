import React, { useState, useContext, useEffect } from 'react';
import { BillDataContext, User } from 'context/BillDataContext';
import { Input, Button, Typography, Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { ADD_USER_TEXT, SAVE, CANCEL, NAME } from 'shared/constants';

const AddUserPanel = () => {
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsAddPanelOpen((prevState) => !prevState);
  const handleClosePanel = () => setIsAddPanelOpen((prevState) => !prevState);

  const { setUsers } = useContext(BillDataContext);
  const [nameInput, setNameInput] = useState<string>('');

  useEffect(() => {
    setNameInput('');
  }, [isAddPanelOpen]);

  const handleNameInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setNameInput(e.target.value);

  const isNameInputInvalid = nameInput === '';

  const handleSave = () => {
    if (!isNameInputInvalid) {
      setUsers((prevState: User[]) => {
        return [
          ...prevState,
          {
            id: prevState.length,
            name: nameInput,
          },
        ];
      });
      handleClosePanel();
    }
  };

  return (
    <>
      <Button variant='contained' color='primary' onClick={handleOpenPanel}>
        {ADD_USER_TEXT}
      </Button>
      <Dialog
        aria-labelledby={ADD_USER_TEXT}
        open={isAddPanelOpen}
        onClose={handleClosePanel}
      >
        <DialogTitle>{ADD_USER_TEXT}</DialogTitle>
        <DialogContent>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>{NAME}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder={NAME}
                  value={nameInput}
                  onChange={handleNameInput}
                  error={isNameInputInvalid}
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

export default AddUserPanel;
