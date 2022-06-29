import { formatDate } from 'helpers/formatDate';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          {tableHeaders.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }, index) => (
          <Tr key={id}>
            <Td>{index + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{formatDate(date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
