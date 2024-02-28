import { useDispatch, useSelector } from 'react-redux';
import { selectContactItems } from 'components/redux/selectors';
import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { addContact } from 'components/redux/operation';
import FormErr from 'components/FormErr/FormErr';
import { FieldEl, FormEl } from './ContactForm.styled';

const schema = object({
  name: string()
    .min(2, 'Too Short!')
    .max(19, 'Too Long!')
    .required('Required!'),
  number: number('must be a number').min(2, 'Too Short!').required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactItems);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    if (
      contacts.find(
        ({ name: contactName }) =>
          contactName.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));

    console.log(values);
  };

  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormEl autoComplete="off">
        <label htmlFor="name">Name</label>
        <div>
          <FieldEl
            type="text"
            id="name"
            name="name"
            placeholder="Enter name ..."
          />
          <FormErr name="name" />
        </div>

        <label htmlFor="number">Number</label>
        <div>
          <FieldEl
            type="tel"
            name="number"
            id="number"
            placeholder="tel: xxx-xx-xx"
          />
          <FormErr name="number" />
        </div>
        <button type="submit">Add contact</button>
      </FormEl>
    </Formik>
  );
};
