import React, { useState, useContext, useEffect } from 'react';
import { BillDataContext, User } from '../../context/BillDataContext';
import { Input, Button, Typography, Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { EDIT, SAVE, CANCEL, NAME } from '../shared/constants';

type EditUserPanelProps = {
  id: number;
};

const EditUserPanel = (props: EditUserPanelProps) => {
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsAddPanelOpen((prevState) => !prevState);
  const handleClosePanel = () => setIsAddPanelOpen((prevState) => !prevState);

  const { users, setUsers } = useContext(BillDataContext);
  const currentUser = users.filter((user) => user.id === props.id)[0];

  const [nameInput, setNameInput] = useState<string>(currentUser.name);

  useEffect(() => {
    setNameInput(currentUser.name);
  }, [isAddPanelOpen]);

  const handleNameInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setNameInput(e.target.value);

  const isNameInputInvalid = nameInput === '';

  const handleSave = () => {
    if (!isNameInputInvalid) {
      setUsers((prevState: User[]) => {
        const indexOfEditedUser = prevState.findIndex(
          (user) => user.id === props.id
        );
        return [
          ...prevState.slice(0, indexOfEditedUser),
          {
            id: props.id,
            name: nameInput,
          },
          ...prevState.slice(indexOfEditedUser + 1),
        ];
      });
      handleClosePanel();
    }
  };

  return (
    <>
      <Button variant='contained' onClick={handleOpenPanel}>
        {EDIT}
      </Button>
      <Dialog
        aria-labelledby={EDIT}
        open={isAddPanelOpen}
        onClose={handleClosePanel}
      >
        <DialogTitle>{EDIT}</DialogTitle>
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

export default EditUserPanel;
