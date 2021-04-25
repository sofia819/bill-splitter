import { EDIT, NAME, PRICE, CANCEL, SAVE, QUANTIY } from 'shared/constants';
import { Typography, Button, Box, Input } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useContext, useState } from 'react';
import { BillDataContext, Meal, User } from 'context/BillDataContext';
import Grid from '@material-ui/core/Grid';
import MealUsersCheckbox from './MealUsersCheckbox';

type EditMealPanelProps = {
  id: number;
};

const EditMealPanel = (props: EditMealPanelProps) => {
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsAddPanelOpen((prevState) => !prevState);
  const handleClosePanel = () => setIsAddPanelOpen((prevState) => !prevState);

  const { meals, setMeals, users } = useContext(BillDataContext);
  const currentMeal: Meal = meals.filter((meal) => meal.id === props.id)[0];

  const [nameInput, setNameInput] = useState<string>(currentMeal.name);
  const [priceInput, setPriceInput] = useState<number>(currentMeal.price);
  const [quantityInput, setQuantityInput] = useState<number>(
    currentMeal.quantity
  );
  const [checkedUsersInput, setCheckedUsersInput] = useState<{
    [key: string]: boolean;
  }>(() => {
    const initialUsersChecked: { [key: string]: boolean } = {};
    users.forEach((user: User) => {
      initialUsersChecked[user.id] = false;
    });
    currentMeal.users.forEach((user) => (initialUsersChecked[user.id] = true));
    return initialUsersChecked;
  });

  const handleNameInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setNameInput(e.target.value);

  const handlePriceInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPriceInput(parseFloat(e.target.value));

  const handleQuantityInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setQuantityInput(parseInt(e.target.value));

  const isNameInputInvalid = nameInput === '';
  const isPriceInputInvalid = isNaN(priceInput) || priceInput <= 0;
  const isQuantityInputInvalid = isNaN(quantityInput) || quantityInput <= 0;
  const isUsersInputInvalid =
    Object.keys(checkedUsersInput).filter((key) => checkedUsersInput[key])
      .length < 1;

  const handleSave = () => {
    if (!isNameInputInvalid && !isPriceInputInvalid && !isUsersInputInvalid) {
      setMeals((prevState: Meal[]) => {
        const indexOfEditedMeal = prevState.findIndex(
          (meal) => meal.id === props.id
        );
        return [
          ...prevState.slice(0, indexOfEditedMeal),
          {
            id: props.id,
            name: nameInput,
            price: priceInput,
            quantity: quantityInput,
            users: users.filter(
              (user) => checkedUsersInput[user.id.toString()]
            ),
          },
          ...prevState.slice(indexOfEditedMeal + 1),
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
              <Grid item xs={4}>
                <Typography>{PRICE}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder={PRICE}
                  value={priceInput}
                  onChange={handlePriceInput}
                  error={isPriceInputInvalid}
                  type='number'
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>{QUANTIY}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Input
                  placeholder={QUANTIY}
                  value={quantityInput}
                  onChange={handleQuantityInput}
                  error={isQuantityInputInvalid}
                  type='number'
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

export default EditMealPanel;
