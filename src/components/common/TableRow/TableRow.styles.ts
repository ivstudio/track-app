import styled from 'styled-components';
import spacing from '../../../styles/spacing';
import colors from '../../../styles/colors';

interface IContentRow {
	'data-testid'?: string;
}

export const ContentRow = styled.div.attrs((props: IContentRow) => ({
	'data-testid': props['data-testid'],
}))`
	display: flex;
	align-items: center;
	min-height: 55px;
	width: calc(100% - (${spacing[16]} * 2));
	padding: ${spacing[4]} ${spacing[16]};
	border-top: 1px solid ${colors.gray20};

	&:hover {
		background-color: ${colors.gray10};
	}
`;
