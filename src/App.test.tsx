import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/initial/i);
	expect(linkElement).toBeInTheDocument();
});
