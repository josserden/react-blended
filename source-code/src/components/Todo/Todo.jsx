import { Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { DeleteButton, TodoWrapper } from './Todo.styled';

export const Todo = ({ text, counter, onClick, id, disabled }) => {
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>

        <Text>{text}</Text>

        <DeleteButton
          type="button"
          onClick={() => onClick(id)}
          disabled={disabled}
        >
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
