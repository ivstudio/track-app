import React from 'react';
import { Header } from './TableHead.styles';

interface Props {
	children?: React.ReactNode;
}

const TableHead = ({ children }: Props) => {
	return <Header>{children}</Header>;
};

export default TableHead;
