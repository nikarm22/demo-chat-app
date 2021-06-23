import dayjs from 'dayjs';
import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IMessage } from '../../models/message';
import { getMessagesByFriendId } from '../../services/messages';

interface IMessagesContext {
    currentMessages: IMessage[];
    sendMessageToCurrentFriend: (message: string) => void
}

const initialState: IMessagesContext = {
    currentMessages: [],
    sendMessageToCurrentFriend: () => {},
};

export const MessagesContext = React.createContext<IMessagesContext>(initialState);

export const MessagesContextProvider: React.FC<{}> = (props) => {
    const { id } = useParams<{ id: string }>();
    const currentId = Number(id);
    const [messagesMap, setMessagesMap] = useState<{ [id: string]: IMessage[] }>({});

    useEffect(() => {
        if (!Number.isNaN(currentId) && !messagesMap[currentId]) {
            getMessagesByFriendId(currentId).then(data => {
                setMessagesMap(prev => ({
                    ...prev,
                    [currentId]: data,
                }))
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentId]);

    const sendMessageToCurrentFriend = useCallback(message => {
        const newMessageObj: IMessage = {
            from: 0,
            to: currentId,
            message,
            timestamp: dayjs(),
        };
        setMessagesMap(prev => ({
            ...prev,
            [currentId]: [newMessageObj, ...prev[currentId]],
        }))
    }, [currentId, setMessagesMap]);

    return <MessagesContext.Provider value={{
        currentMessages: messagesMap[currentId] || [],
        sendMessageToCurrentFriend,
    }}>
        {props.children}
    </MessagesContext.Provider>
};

export const useMessages = () => useContext(MessagesContext);
