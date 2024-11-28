import { User } from "./user/User";
import { UserEdit } from "./user/UserEdit";
import { UserForm } from "./user/UserForm";

const parent = document.getElementById("root");
const john = User.buildUser({ name: "John Doe", age: 45 });

const userEdit = new UserEdit(parent!, john);
userEdit.render();
console.log(userEdit);
