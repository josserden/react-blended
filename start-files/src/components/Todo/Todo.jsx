import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ text, counter, onClick, onEdit, id, disabled }) => {
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

        <EditButton type="button" onClick={() => onEdit()} disabled={disabled}>
          <RiEdit2Line size={24} />
        </EditButton>
      </TodoWrapper>
    </>
  );
};
