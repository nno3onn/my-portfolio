import { ReactElement } from "react";
import styled from "styled-components";

interface TableProps {
  tableKey: string;
  tableValue: string | ReactElement;
}

const Table = ({ tableKey, tableValue }: TableProps) => {
  return (
    <TableContainer>
      <TableKey>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
        <span>{tableKey}</span>
      </TableKey>
      <TableValue>{tableValue}</TableValue>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  display: flex;
`;

const TableKey = styled.div`
  flex: 2;
  font-weight: bold;

  display: flex;
  gap: 10px;
`;

const TableValue = styled.div`
  flex: 5;
`;

export default Table;
