import { CheckRequestData } from '../../pages/Login/types';

interface IUsers {
  id: number;
  email: string;
  password: string;
}

//Registered users

export const users: Array<IUsers> = [
  { id: 1, email: 'steve.jobs@example.com', password: 'password' },
];

export const mockFetch = (requestData: CheckRequestData) => {
  return new Promise((res, rej) =>
    setTimeout(
      () =>
        users.forEach((u) =>
          u.email === requestData.email && u.password === requestData.password
            ? res({ id: u.id, email: u.email })
            : rej(`Пользователя ${requestData.email} не существует`)
        ),
      500
    )
  );
};
