import {UserRole} from './user-role.enum';
import {Course} from '../course/course';

export class User {
  id: number;
  username: string;
  name: string;
  roles: string[];
  password: string;
  coursesEnrolled: Course[];
}
