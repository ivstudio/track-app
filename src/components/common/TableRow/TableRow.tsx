import React from 'react';
import { ContentRow } from './TableRow.styles';

interface Props {
	children: React.ReactNode;
	testId?: string;
}

const TableRow = ({ children, testId }: Props) => {
	return <ContentRow data-testid={testId}>{children}</ContentRow>;
};

export default TableRow;
