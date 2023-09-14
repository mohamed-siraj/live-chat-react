import { render, screen } from '@testing-library/react';
import ResetPassword from './';

test('renders reset password page', () => {
    render(<ResetPassword />);
    const linkElement = screen.getByText(/Siraj Chat Bot/i);
    expect(linkElement).toBeInTheDocument();
});