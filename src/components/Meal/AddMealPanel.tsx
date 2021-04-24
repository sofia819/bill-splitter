import React, { useState, useContext, useEffect } from 'react';
import { BillDataContext, Meal, User } from '../../context/BillDataContext';
import { Input, Button, Typography, Box } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { ADD_MEAL_TEXT, SAVE, CANCEL, NAME, PRICE } from '../shared/constants';
import MealUsersCheckbox from './MealUsersCheckbox';

const AddMealPanel = () => {
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsAddPanelOpen((prevState) => !prevState);
  const handleClosePanel = () => setIsAddPanelOpen((prevState) => !prevState);

  const initializeCheckedUsers = (usersList: User[]) => {
    const initialUsersChecked: { [key: string]: boolean } = {};
    usersList.forEach((user: User) => {
      initialUsersChecked[user.id] = false;
    });
    return initialUsersChecked;
  };

  const { users, setMeals } = useContext(BillDataContext);
  const [nameInput, setNameInput] = useState<string>('');
  const [priceInput, setPriceInput] = useState<string>('');
  const [checkedUsersInput, setCheckedUsersInput] = useState<{
    [key: string]: boolean;
  }>(initializeCheckedUsers(users));

  useEffect(() => {
    setNameInput('');
    setPriceInput('');
    setCheckedUsersInput(initializeCheckedUsers(users));
  }, [isAddPanelOpen]);

  const handleNameInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setNameInput(e.target.value);

  const handlePriceInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPriceInput(e.target.value);

  const isNameInputInvalid = nameInput === '';
  const isPriceInputInvalid = nameInput === '' || isNaN(parseFloat(priceInput));
  const isUsersInputInvalid =
    Object.keys(checkedUsersInput).filter((key) => checkedUsersInput[key])
      .length < 1;

  const handleSave = () => {
    if (!isNameInputInvalid && !isPriceInputInvalid && !isUsersInputInvalid) {
      setMeals((prevState: Meal[]) => {
        return [
          ...prevState,
          {
            id: prevState.length,
            name: nameInput,
            price: parseFloat(priceInput),
            users: users.filter(
              (user) => checkedUsersInput[user.id.toString()]
            ),
          },
        ];
      });
      handleClosePanel();
    }
  };

  return (
    <>
      <Button variant='contained' color='primary' onClick={handleOpenPanel}>
        {ADD_MEAL_TEXT}
      </Button>
      <Dialog
        aria-labelledby={ADD_MEAL_TEXT}
        open={isAddPanelOpen}
        onClose={handleClosePanel}
      >
        <DialogTitle>{ADD_MEAL_TEXT}</DialogTitle>
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
              <Grid item xs={4}>
                <Typography>{PRICE}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder={PRICE}
                  value={priceInput}
                  onChange={handlePriceInput}
                  error={isPriceInputInvalid}
                />
              </Grid>
              <Grid item xs={12}>
                <MealUsersCheckbox
                  checkedUsersInput={checkedUsersInput}
                  setCheckedUsersInput={setCheckedUsersInput}
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

export default AddMealPanel;
