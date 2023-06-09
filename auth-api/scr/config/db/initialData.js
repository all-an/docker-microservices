import bcrypt from "bcrypt";
import User from "../../modules/user/model/User.js";

export async function createInitialData() {
  try {
    await User.sync({ force: true });

    let password2 = await bcrypt.hash("123456#2", 10);
    let password3 = await bcrypt.hash("123456#3", 10);

    await User.create({
      name: "User Test 2",
      email: "testeuser2@gmail.com",
      password: password2,
    });

    await User.create({
      name: "User Test 3",
      email: "testeuser3@gmail.com",
      password: password3,
    });

  } catch (err) {
    console.log(err);
  }
}