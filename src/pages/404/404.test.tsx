import { render, screen } from '@testing-library/react';
import NotFound from './';

test('renders 404 page', () => {
    render(<NotFound />);
    const getHtmlDoc = screen.getByText(/Siraj Chat Bot/);
    expect(getHtmlDoc).toBeInTheDocument();
})