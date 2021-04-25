import { useContext } from 'react';
import { BillDataContext } from 'context/BillDataContext';
import UserCostList from 'components/Results/UserCostList';
import { RESULTS } from 'shared/constants';
import CostList from 'components/Results/CostList';
import PanelHeader from 'shared/PanelHeader';
import { roundNumber } from 'shared/utils';
import PanelContainer from 'shared/PanelContainer';

const Results = () => {
  const { users, meals, tipPercent, tax } = useContext(BillDataContext);
  const subtotal: number = roundNumber(
    meals.reduce(
      (subtotal, currentMeal) =>
        subtotal + currentMeal.price * currentMeal.quantity,
      0
    )
  );
  const tips: number = roundNumber((subtotal * tipPercent) / 100);
  const totalCost: number = roundNumber(subtotal + tips + tax);
  const userCosts: number[] = [];

  users.forEach((user) => {
    const userMeals = meals.filter((meal) =>
      meal.users.find((mealUser) => user.id === mealUser.id)
    );
    const userSubtotal = userMeals.reduce(
      (userSubtotal, currentMeal) =>
        userSubtotal +
        (currentMeal.price * currentMeal.quantity) / currentMeal.users.length,
      0
    );
    const tipsPerUser: number = (tips * userSubtotal) / subtotal;
    const taxPerUser: number = (tax * userSubtotal) / subtotal;
    const userCost = roundNumber(userSubtotal + tipsPerUser + taxPerUser);
    userCosts.push(isNaN(userCost) ? 0 : userCost);
  });

  const totalUserCost = roundNumber(
    userCosts.reduce((totalCost, currentCost) => totalCost + currentCost, 0)
  );

  return (
    <PanelContainer>
      <PanelHeader title={RESULTS} />
      <UserCostList userCosts={userCosts} />
      <CostList
        subtotal={subtotal}
        tips={tips}
        tax={tax}
        totalUserCost={totalUserCost}
        totalCost={totalCost}
      />
    </PanelContainer>
  );
};

export default Results;
