import { render, screen } from '@testing-library/react';
import SignUp from './';

test('renders sign-up page', () => {
    render(<SignUp />);
    const linkElement = screen.getByText(/Siraj Chat Bot/i);
    expect(linkElement).toBeInTheDocument();
});
