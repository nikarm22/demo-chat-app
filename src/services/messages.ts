import dayjs from "dayjs";
import { IMessage } from "../models/message";

const dataBase: IMessage[] = [
    {
        from: 0,
        to: 1,
        timestamp: dayjs().subtract(2),
        message: 'Hi!'
    },
    {
        from: 1,
        to: 0,
        timestamp: dayjs().subtract(1),
        message: 'Hello, what\'s up?'
    },
    {
        from: 0,
        to: 1,
        timestamp: dayjs(),
        message: 'nm, wbu?'
    },
    {
        from: 0,
        to: 2,
        timestamp: dayjs(),
        message: 'Hey, send the files I asked for.'
    },
];

export const getMessagesByFriendId = (friendId: number) => {
    const messages = dataBase.filter(data => data.from === friendId || data.to === friendId);
    messages.sort((a, b) => a.timestamp.isAfter(b.timestamp) ? -1 : 1);

    return Promise.resolve(messages);
};
