export type User = {
    user_id: number,
    role_id: number,
    client_id?: number | null,
    login: string,
    password?: string,
    image_path?: string | null,
    full_name: string,
    email: string,
    phone_number: string,
}