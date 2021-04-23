export const mockUsersData = [
  {
    id: 0,
    name: 'Aye',
  },
  {
    id: 1,
    name: 'Bee',
  },
  {
    id: 2,
    name: 'Ceci',
  },
  {
    id: 3,
    name: 'Dee',
  },
  {
    id: 4,
    name: 'Eeeeeeeeeeee',
  },
];

export const mockMealsData = [
  {
    id: 0,
    name: 'Noodles',
    users: [mockUsersData[0], mockUsersData[2]],
    price: 12.99,
  },
  {
    id: 1,
    name: 'Rice',
    users: [mockUsersData[0], mockUsersData[2], mockUsersData[3]],
    price: 6.76,
  },
  {
    id: 2,
    name: 'Soup',
    users: [mockUsersData[4]],
    price: 8.99,
  },
  {
    id: 3,
    name: 'Fries',
    users: [mockUsersData[2]],
    price: 3.99,
  },
  {
    id: 4,
    name: 'Chips',
    users: [mockUsersData[2], mockUsersData[4]],
    price: 11.15,
  },
];

const subtotal = 43.88;
