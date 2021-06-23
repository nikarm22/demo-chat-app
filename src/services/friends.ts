import { IFriend } from "../models/friend";

const mockFriends = Array(15).fill(null).map((_, i) => ({
    id: i+1,
    name: `Friend N${i+1}`,
    avatar: Math.random() > .5 ? 'https://via.placeholder.com/150x150' : null,
} as IFriend));

export const getAllFriends = () => Promise.resolve(mockFriends);
