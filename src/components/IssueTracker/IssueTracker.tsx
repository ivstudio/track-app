import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableContainer from '../common/TableContainer/TableContainer';
import TableHead from '../common/TableHead/TableHead';
import TableRow from '../common/TableRow/TableRow';
import IssueItem from './IssueItem/IssueItem';
import { IIssue } from '../../types/issueModel.types';

const baseUrl = 'https://api.github.com/repos/facebook/react/issues';

const IssueTracker = () => {
	const [issues, setIssues] = useState<IIssue[]>([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function getIssues() {
			try {
				const res = await axios.get(baseUrl);
				setIssues(res.data);
			} catch (err) {
				setError(true);
			}
		}
		getIssues();
	}, []);

	if (error) {
		return <p data-testid="error">Something went wrong.</p>;
	}

	return (
		<TableContainer>
			<TableHead />
			{issues.length > 0 ? (
				issues.map((issue) => (
					<TableRow key={issue.number}>
						<IssueItem
							number={issue.number}
							title={issue.title}
							url={issue.url}
							labels={issue.labels}
							created_at={issue.created_at}
							user={issue.user}
							testId="issueItem"
						/>
					</TableRow>
				))
			) : (
				<TableRow testId="loading">Loading...</TableRow>
			)}
		</TableContainer>
	);
};

export default IssueTracker;
