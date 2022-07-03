import styled from '@emotion/styled';

export const BaseForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 60px 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 400;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in-out;
  &:focus-within {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const LabelText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
`;
