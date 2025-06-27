import { Activity } from "../services/Activity";

export interface IProfile extends Activity{ 
    id: number;
    name: string;
}