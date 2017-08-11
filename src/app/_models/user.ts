import {Wallet} from './wallet';

export class User {
    id:         number;
    username:   string;
    password:   string;
    firstName:  string;
    lastName:   string;
    email:      string;
    wallet:     Wallet;
}
