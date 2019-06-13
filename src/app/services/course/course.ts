import {Contribution} from '../contribution/contribution';

export class Course {
  id: number;
  abbreviation: string;
  title: string;
  contributions: Contribution[];
}
