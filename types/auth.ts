export type AuthFormData = {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
}

export type AuthErrors = {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  auth?: string;
}