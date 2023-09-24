
enum EOTHER {
    SENDER = 'SENDER',
    RECEIVER = 'RECEIVER'
};

type ETOTHER = keyof typeof EOTHER;

export const TOTHER = {
    SENDER: 'SENDER',
    RECEIVER: 'RECEIVER'
}

export const senderMessageTemData: Array<{
    message: string;
    other: ETOTHER
}> = [
        {
            message: 'Hi, how are you doing?',
            other: 'SENDER'
        },
        {
            message: `I'm fine. How about yourself?`,
            other: 'RECEIVER'
        },
        {
            message: `I'm pretty good. Thanks for asking.`,
            other: 'SENDER'
        },
        {
            message: `No problem. So how have you been?`,
            other: 'RECEIVER'
        },
        {
            message: `I've been great. What about you?`,
            other: 'SENDER'
        },
        {
            message: `What school do you go to?`,
            other: 'SENDER'
        },
        {
            message: `I've been good. I'm in school right now. I go to PCC.`,
            other: 'RECEIVER'
        },
        {
            message: `Do you like it there?`,
            other: 'SENDER'
        },
        {
            message: `It's okay. It's a really big campus.`,
            other: 'RECEIVER'
        },
        {
            message: `Good luck with school.`,
            other: 'SENDER'
        },
        {
            message: `Thank you very much.`,
            other: 'RECEIVER'
        },
        {
            message: `How's it going?`,
            other: 'RECEIVER'
        },
        {
            message: `So how have you been lately?`,
            other: 'RECEIVER'
        },
        {
            message: `I'm doing well. How about you?`,
            other: 'SENDER'
        },
        {
            message: `I've actually been pretty good. You?`,
            other: 'SENDER'
        },
    ];