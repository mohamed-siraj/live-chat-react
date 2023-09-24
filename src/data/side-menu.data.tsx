import { Email, User } from "assets/img";

export const SideMenuData: Array<{
    image: {
        img: string,
        alt: string
    },
    label: string
}> = [
        {
            image: Email,
            label: 'Messages'
        },
        {
            image: User,
            label: 'Profile'
        }
];