import { useContext } from 'react';
import { BillDataContext } from 'context/BillDataContext';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { USERS_CHECKBOX, MEAL_USERS_ERROR } from 'shared/constants';

type MealUsersCheckboxProps = {
  checkedUsersInput: { [key: string]: boolean };
  setCheckedUsersInput: (
    users:
      | { [key: string]: boolean }
      | ((prevState: { [key: string]: boolean }) => { [key: string]: boolean })
  ) => void;
};

const MealUsersCheckbox = (props: MealUsersCheckboxProps) => {
  const { users } = useContext(BillDataContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setCheckedUsersInput((prevState: { [key: string]: boolean }) => {
      return {
        ...prevState,
        [event.target.name]: event.target.checked,
      };
    });
  };

  const error =
    Object.keys(props.checkedUsersInput).filter(
      (key) => props.checkedUsersInput[key]
    ).length < 1;

  return (
    <>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>{USERS_CHECKBOX}</FormLabel>
        <FormGroup>
          {users.map((user) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.checkedUsersInput[user.id.toString()]}
                  onChange={handleChange}
                  name={user.id.toString()}
                />
              }
              label={user.name}
            />
          ))}
        </FormGroup>
        {error && <FormHelperText>{MEAL_USERS_ERROR}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default MealUsersCheckbox;
