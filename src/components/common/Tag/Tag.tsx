import React from 'react';
import { TagContainer } from './Tag.styles';

interface Props {
	children?: string;
	color: string;
}

const Tag = ({ children, color }: Props) => {
	return <TagContainer color={color}>{children}</TagContainer>;
};

export default Tag;
