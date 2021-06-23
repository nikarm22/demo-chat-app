import React from 'react';
import { render, act } from '@testing-library/react';
import Application from './Application';
import { MemoryRouter } from 'react-router-dom';

describe('<Application />', () => {
  jest.mock('../../services/friends', () => {
    return {
      getAllFriends: jest.fn().mockResolvedValue([]),
    };
  });

  it('should render the component without errors', async () => {
    await act(async () => {
      const { asFragment } = render(
        <MemoryRouter initialEntries={['/']}>
          <Application />
        </MemoryRouter>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
