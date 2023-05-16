// Creat an interface
interface UserInterface {
    id: string,
    name: {
        firstName: string,
        lastName: string,
        middleName?: string
    },
    gender: "male" | "female",
    role: string
}

export default UserInterface;