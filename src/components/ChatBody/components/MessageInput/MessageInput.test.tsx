import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MessageInput } from './MessageInput';

describe('<MessageInput />', () => {
    it('should match the snapshot', async () => {
        const { asFragment } = render(<MessageInput />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onSend method when clicked on send buttons and when input field contains text', async () => {
        const mockOnSend = jest.fn();

        const { findByTestId } = render(
            <MessageInput onSend={mockOnSend} />
        );

        const button = await findByTestId('send-message');
        const input =  (await findByTestId('message-input')).querySelector('input');

        const mockValue = 'test';

        if (input) fireEvent.change(input, { target: { value: mockValue }});
        fireEvent.click(button);

        expect(mockOnSend).toBeCalledTimes(1);
        expect(mockOnSend).toBeCalledWith(mockValue);
    });

    it('should not call onSend method when the message text is empty', async () => {
        const mockOnSend = jest.fn();

        const { findByTestId } = render(
            <MessageInput onSend={mockOnSend} />
        );

        const button = await findByTestId('send-message');
        fireEvent.click(button);

        expect(mockOnSend).toBeCalledTimes(0);
    });

    it('should not call onSend method when the message text contains only spaces', async () => {
        const mockOnSend = jest.fn();

        const { findByTestId } = render(
            <MessageInput onSend={mockOnSend} />
        );

        const button = await findByTestId('send-message');
        const input =  (await findByTestId('message-input')).querySelector('input');

        const mockValue = '           ';

        if (input) fireEvent.change(input, { target: { value: mockValue }});
        fireEvent.click(button);

        expect(mockOnSend).toBeCalledTimes(0);
    });

    it('should call the onSend method when Enter is pressed', async () => {
        const mockOnSend = jest.fn();

        const { findByTestId } = render(
            <MessageInput onSend={mockOnSend} />
        );

        const input =  (await findByTestId('message-input')).querySelector('input');

        const mockValue = 'test';

        if (input) {
            fireEvent.change(input, { target: { value: mockValue }});
            fireEvent.submit(input);
        }

        expect(mockOnSend).toBeCalledTimes(1);
        expect(mockOnSend).toBeCalledWith(mockValue);
    });
});
