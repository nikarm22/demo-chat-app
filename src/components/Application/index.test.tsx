import React from 'react';
import { render, screen } from '@testing-library/react';
import Application from './';

test('<Application />', () => {
  render(<Application />);
  expect(true).toBe(true);
});
