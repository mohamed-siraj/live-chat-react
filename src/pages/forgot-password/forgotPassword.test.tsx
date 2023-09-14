import ForgotPassword from './';
import { render, screen } from '@testing-library/react';

test('renders forgot password page', () => {
    render(<ForgotPassword />);
    const linkElement = screen.getByText(/Siraj Chat Bot/i);
    expect(linkElement).toBeInTheDocument();
});
