import React from 'react';
import { render, screen } from '@testing-library/react';
import SignIn from './'

test('renders sign-in page', () => {
    render(<SignIn />);
    const linkElement = screen.getByText(/Siraj Chat Bot/i);
    expect(linkElement).toBeInTheDocument();
});