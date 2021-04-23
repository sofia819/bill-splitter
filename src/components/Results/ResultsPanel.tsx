import { useContext } from 'react';
import { BillDataContext } from '../../context/BillDataContext';

const Results = () => {
  const { users, meals, tipPercent, tax } = useContext(BillDataContext);
  /**
   * Round up these numbers to 2 decimal places
   */
  const subtotal: number = meals.reduce(
    (subtotal, currentMeal) => subtotal + currentMeal.price,
    0
  );
  const tips: number = (subtotal * tipPercent) / 100;
  const tipsPerUser: number = tips / users.length;
  const taxPerUser: number = tax / users.length;
  const total: number = subtotal + tips + tax;
  const userCosts: number[] = [];

  users.forEach((user) => {
    const userMeals = meals.filter((meal) =>
      meal.users.find((mealUser) => user.id === mealUser.id)
    );
    const userSubtotal = userMeals.reduce(
      (userSubtotal, currentMeal) =>
        userSubtotal + currentMeal.price / currentMeal.users.length,
      0
    );
    userCosts.push(userSubtotal + tipsPerUser + taxPerUser);
  });

  return (
    <>
      {
        // UserCostItem component
        userCosts.map((userCost, index) => (
          <div key={index}>{`${users[index].name}: $${userCost}`}</div>
        ))
      }
      <div>{`Subtotal: ${subtotal}`}</div>
      <div>{`Tips: ${tips}`}</div>
      <div>{`Tax: ${tax}`}</div>
      <div>{`Total from user costs: ${userCosts.reduce(
        (totalCost, currentCost) => totalCost + currentCost,
        0
      )}`}</div>
      <div>{`Total: ${total}`}</div>
    </>
  );
};

export default Results;
