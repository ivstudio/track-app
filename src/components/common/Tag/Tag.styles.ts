import styled from 'styled-components';
import spacing from '../../../styles/spacing';

export const TagContainer = styled.span<{ color: string }>`
	background-color: ${(props) => `#${props.color}`};
	border-radius: 12px;
	font-size: 12px;
	font-weight: 500;
	padding: ${spacing[2]} ${spacing[8]};
`;
