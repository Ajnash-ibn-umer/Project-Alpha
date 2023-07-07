export interface userRegisterParams {
    fullName: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
}

export interface userLoginParams {
    email: string,
    password: string,
}