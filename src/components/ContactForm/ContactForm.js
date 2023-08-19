import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledField,
  StyledError,
  Button,
} from './ContactForm.styled';
const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('* Name is required'),
  number: Yup.string()
    .min(6, 'Phone number is too short')
    .max(16, 'Phone number is too long')
    .required('* Enter phone number'),
});
export const ContactForm = ({ onAdd }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onAdd({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledField type="text" name="name" placeholder="Jacob Mercer" />
            <StyledError name="name" component="div" />
          </label>

          <label>
            Number
            <StyledField type="number" name="number" placeholder="xxx-xx-xx" />
            <StyledError name="number" component="div" />
          </label>

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
