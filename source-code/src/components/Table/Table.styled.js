import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const THead = styled.thead`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;
