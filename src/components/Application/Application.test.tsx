import React from 'react';
import { render } from '@testing-library/react';
import Application from './Application';

describe('<Application />', () => {
  it('should render the component without errors', () => {
    render(<Application />);
  });
});
