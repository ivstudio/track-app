import styled from 'styled-components';
import spacing from '../../../styles/spacing';
import colors from '../../../styles/colors';
import { mediumUp } from '../../../styles/breakpoints';

interface ITitle {
	'data-testid'?: string;
}

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: ${spacing[8]};
`;

export const IssueBody = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin-bottom: ${spacing[4]};

	${mediumUp} {
		flex-direction: row;
	}
`;

export const Title = styled.a.attrs((props: ITitle) => ({
	'data-testid': props['data-testid'],
}))`
	font-size: 16px;
	line-height: 1.3;
	font-weight: 500;
	margin: 0;
	text-decoration: none;
	color: ${colors.blue90};
	margin-bottom: ${spacing[4]};

	${mediumUp} {
		margin-right: ${spacing[4]};
	}
`;

export const TagList = styled.div`
	> span {
		margin-right: ${spacing[4]};
		margin-bottom: ${spacing[4]};
		display: inline-block;
	}
`;

export const IssueDetails = styled.span`
	font-size: 12px;
	color: ${colors.gray30};
`;
