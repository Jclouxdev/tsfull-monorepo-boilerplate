export type User = {
    id: number;
    username: string;
    password?: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    profilePictureUrl?: string;
}