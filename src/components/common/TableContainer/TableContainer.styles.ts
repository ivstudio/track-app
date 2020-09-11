import styled from 'styled-components';
import colors from '../../../styles/colors';
import { mediumUp } from '../../../styles/breakpoints';

export const Container = styled.section`
	width: 100%;
	border: 1px solid ${colors.gray20};

	${mediumUp} {
		border-radius: 6px;
	}
`;
