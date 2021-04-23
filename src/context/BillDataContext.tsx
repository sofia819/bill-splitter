import { useState, createContext } from 'react';

export type User = {
  id: number;
  name: string;
};

export type Meal = {
  id: number;
  name: string;
  price: number;
  users: User[];
};

type BillDataContextType = {
  users: User[];
  setUsers: (users: User[] | ((prevState: User[]) => User[])) => void;
  meals: Meal[];
  setMeals: (meals: Meal[] | ((prevState: Meal[]) => Meal[])) => void;
  tipPercent: number;
  setTipPercent: (tipPercent: number) => void;
  tax: number;
  setTax: (tax: number) => void;
};

type Props = {
  children: React.ReactNode;
};

export const BillDataContext = createContext<BillDataContextType>({
  users: [],
  setUsers: () => {},
  meals: [],
  setMeals: () => {},
  tipPercent: 0,
  setTipPercent: () => {},
  tax: 0,
  setTax: () => {},
});

export const BillDataProvider = ({ children }: Props) => {
  const [recordedUsers, setRecordedUsers] = useState<User[]>([] as User[]);
  const [recordedMeals, setRecordedMeals] = useState<Meal[]>([] as Meal[]);
  const [recordedTipPercent, setRecordedTipPercent] = useState<number>(0);
  const [recordedTax, setRecordedTax] = useState<number>(0);

  return (
    <BillDataContext.Provider
      value={{
        users: recordedUsers,
        setUsers: setRecordedUsers,
        meals: recordedMeals,
        setMeals: setRecordedMeals,
        tipPercent: recordedTipPercent,
        setTipPercent: setRecordedTipPercent,
        tax: recordedTax,
        setTax: setRecordedTax,
      }}
    >
      {children}
    </BillDataContext.Provider>
  );
};
