export type User = {
    user_id: number,
    role_id: number,
    client_id: number,
    login: string,
    password?: string,
    image_path: string,
    full_name: string,
    email: string,
    phone_number: number,
    passport: number,
}