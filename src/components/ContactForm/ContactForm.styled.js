import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  width: 400px;
  flex-wrap: wrap;
  align-items: baseline;
  border: 1px solid #5d9969;
  border-radius: 4px;
  font-weight: bold;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
export const Button = styled.button`
  border: 1px solid #5d9969;
  border-radius: 4px;
  cursor: pointer;
  }
`;
