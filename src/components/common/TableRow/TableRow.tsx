import React from 'react';
import { ContentRow } from './TableRow.styles';

interface Props {
	children: React.ReactNode;
}

const TableRow = ({ children }: Props) => {
	return <ContentRow>{children}</ContentRow>;
};

export default TableRow;
