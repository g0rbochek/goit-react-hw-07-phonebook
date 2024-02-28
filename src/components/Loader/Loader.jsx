import { BallTriangle } from 'react-loader-spinner';
import { LoadMessage, LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <LoadMessage>Loading...</LoadMessage>
      <BallTriangle
        visible={true}
        height={50}
        width={50}
        radius={5}
        color="#6f45e4"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderWrap>
  );
};
