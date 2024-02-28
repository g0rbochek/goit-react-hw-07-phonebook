import React from 'react';

import { useSelector } from 'react-redux';

import { ErrorText } from './MessageErr.styled';
import { selectContactError } from 'components/redux/selectors';

const MessageErr = () => {
  const error = useSelector(selectContactError);
  console.log(error);
  return <ErrorText> {error.message} </ErrorText>;
};

export default MessageErr;
