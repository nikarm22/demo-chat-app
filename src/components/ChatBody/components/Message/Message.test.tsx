import React from 'react';
import { render } from '@testing-library/react';
import { Message } from './Message';

describe('<Message />', () => {
    it('should render the message with correct text', async () => {
        const mockMessage = 'test';
        const { findByTestId } = render(
            <Message side='left' timestamp='00:00'>{mockMessage}</Message>
        );

        const element = await findByTestId('message');

        expect(element.textContent).toBe(mockMessage);
    });

    it('should render the message on correct side', async () => {
        const mockMessage = 'test';
        const { asFragment } = render(
            <Message side='right' timestamp='00:00'>{mockMessage}</Message>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
