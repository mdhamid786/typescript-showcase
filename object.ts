const User = {
  name: "hamid",
  email: "ali@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
const newUser = { name: "hamid", isPaid: true };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactJs", price: 786 };
}

export {};
