export type Dictionary = {
  key: string;
  type: string;
  value: string;
};

export type User = {
  id: string;
  username: string;
  password: string;
  passwordHash: string;
  email: string;
  access: Dictionary[];
};

export const users: User[] = [
  {
    id: "1",
    username: "user1",
    password: "123456789",
    passwordHash: "$2a$10$Qsew3pKsrPnbAH9KN.3jRu6IO5fbLpO/vvBegWNuCEtyX6dAJa9am",
    email: "panteratrix@hotmail.com",
    access: [],
  },
  {
    id: "2",
    username: "user2",
    password: "123456789",
    passwordHash: "$2a$10$MToKAz7CKJasLW.IiOe1guAbpGfqMPzvfi6iZFXklKzJqmUjWEi0O",
    email: "gposoft@gmail.com",
    access: [],
  },
];
