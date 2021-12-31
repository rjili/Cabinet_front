export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

export interface RegisterContext {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class AuthorizationEntity {
  username?: string;
  authorized: boolean;
  email: string;
  id: any;
  fullName: string;
  expiresIn: number;
  accessToken: string;
  admin: boolean;
  newUser: boolean;
  Image: string;
  menu: any[];
}

export class Patient {
  cin: number;
  code: number;
  dateNaiss: any;
  firstName: string;
  lastName: string;
  login: string;
  mail: string;
  photo: string;
  pwd: string;
  telephone: number;
}