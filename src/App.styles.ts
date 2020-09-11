import styled from 'styled-components';
import { breakpoint } from './styles/breakpoints';
import { mediumUp } from './styles/breakpoints';
import spacing from './styles/spacing';

export const Main = styled.main`
	margin: ${spacing[40]} auto;
	max-width: ${breakpoint['xLarge']};

	${mediumUp} {
		padding-left: ${spacing[16]};
		padding-right: ${spacing[16]};
	}
`;
