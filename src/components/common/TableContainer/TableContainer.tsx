import React from 'react';
import { Container } from './TableContainer.styles';

interface Props {
	children: React.ReactNode;
}

const TableContainer = ({ children }: Props) => {
	return <Container>{children}</Container>;
};

export default TableContainer;
