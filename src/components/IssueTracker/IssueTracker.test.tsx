import React from 'react';
import axios from 'axios';
import { render, cleanup, wait } from '@testing-library/react';
import IssueTracker from './IssueTracker';
import { issues } from '../../__test__/issues.data';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

afterEach(() => {
	cleanup();
	jest.clearAllMocks();
});

describe('<IssueTracker />', () => {
	test('Loading', async () => {
		const { getByTestId } = render(<IssueTracker />);
		await wait(() =>
			expect(getByTestId('loading')).toHaveTextContent('Loading...')
		);
	});

	test('Fetch and display child data', async () => {
		axiosMock.get.mockResolvedValueOnce({
			data: issues,
		});
		const { getAllByTestId } = render(<IssueTracker />);

		await wait(() => {
			const openedIssues = getAllByTestId('issueItem').map(
				(i) => i.textContent
			);
			const mockedIssues = issues.map((i) => i.title);
			expect(openedIssues).toEqual(mockedIssues);
			expect(axiosMock.get).toHaveBeenCalledTimes(1);
		});
	});

	test('Fetch error', async () => {
		axiosMock.get.mockRejectedValueOnce(new Error('Async error'));
		const { getByTestId } = render(<IssueTracker />);

		await wait(() =>
			expect(getByTestId('error')).toHaveTextContent(
				'Something went wrong.'
			)
		);
	});
});
