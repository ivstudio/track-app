import React from 'react';
import Tag from '../../common/Tag/Tag';
import { formatDate } from '../../../utils/date.utils';
import {
	Container,
	Title,
	TagList,
	IssueBody,
	IssueDetails,
} from './IssueItem.styles';
import { IIssue, ILabel } from '../../../types/issueModel.types';

const IssueItem = ({
	title,
	number,
	url,
	labels = [],
	created_at,
	user,
}: IIssue) => {
	const createdAt = formatDate(created_at);

	return (
		<Container>
			<IssueBody>
				<Title href={url}>{title}</Title>
				{labels && (
					<TagList>
						{labels.map((label: ILabel) => (
							<Tag key={label.id} color={label.color}>
								{label.name}
							</Tag>
						))}
					</TagList>
				)}
			</IssueBody>
			<IssueDetails>{`#${number} opened ${createdAt} ago by ${user.login}`}</IssueDetails>
		</Container>
	);
};

export default IssueItem;
