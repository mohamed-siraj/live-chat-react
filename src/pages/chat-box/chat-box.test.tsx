import { render, screen } from '@testing-library/react';
import ChatBox from './';

test('renders chat bot page', () => {
    render(<ChatBox />);
    const getByText = screen.getByText('');
    expect(getByText).toBeInTheDocument();
});