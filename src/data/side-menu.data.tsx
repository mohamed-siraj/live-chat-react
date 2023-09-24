import { Email, EmailFull, User, UserFUll } from "assets/img";

export const SideMenuData: Array<{
    image: {
        img: string,
        alt: string
    },
    label: string,
    uniqueCode : string,
    activeImage: {
        img: string,
        alt: string
    },
}> = [
        {
            image: Email,
            label: 'Messages',
            uniqueCode : 'MESSAGE',
            activeImage : EmailFull
        },
        {
            image: User,
            label: 'Profile',
            uniqueCode : 'PROFILE',
            activeImage : UserFUll
        },
];