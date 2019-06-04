import {UserRole} from "./user-role.enum";

export class User {
  id:number;
  username: string;
  name: string;
  role: UserRole;
  password: string
}
