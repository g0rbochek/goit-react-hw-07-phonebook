import { ErrorMessage } from 'formik';
import { ErrorText } from './FormErr.styled';

const FormErr = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export default FormErr;
