import React from 'react';
import { render, cleanup } from '@testing-library/react';
import IssueItem from './IssueItem';
import { issues } from '../../../__test__/issues.data';
import { formatDate } from '../../../utils/date.utils';

const { title, number, url, labels, created_at, user } = issues[0];

afterEach(cleanup);
test('<IssueItem />', () => {
	const { getByText } = render(
		<IssueItem
			number={number}
			title={title}
			url={url}
			labels={labels}
			created_at={created_at}
			user={user}
		/>
	);
	const createdAt = formatDate(created_at);
	const issueDetails = `#${number} opened ${createdAt} ago by ${user.login}`;
	expect(getByText(title)).toBeInTheDocument();
	expect(getByText(issueDetails)).toBeInTheDocument();
});
