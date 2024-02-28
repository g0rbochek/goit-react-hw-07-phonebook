import React, { useEffect } from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { selectContactError, selectContactIsLoading } from './redux/selectors';
import { fetchContacts } from './redux/operation';
import MessageErr from './MessageErr/MessageErr';
import { Loader } from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactIsLoading);
  const error = useSelector(selectContactError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <>
        <TitlePhonebook title="Phonebook" />
        <ContactForm />
      </>
      <>
        <TitleContacts title="Contacts" />
        <Filter />
        <ContactList />
        {isLoading && <Loader />}
        {error && <MessageErr />}
      </>
    </>
  );
};
