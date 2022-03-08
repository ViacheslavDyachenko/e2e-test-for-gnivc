
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ActionButton from '../../ActionButton';
import BookInfo from '../..//BookInfo';
import Header from '../..//Header';
import BookInfoStore from '../../../stores/BookInfoStore';
import useLocalStore from '../../../utils/useLocalStore';
import style from './BookInfoPage.module.scss';
import Loader from '../../Loader';

const BookInfoPage: React.FC = () => {
  const bookInfo = useLocalStore(() => new BookInfoStore());
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    id ? bookInfo.bookId = id : bookInfo.bookId = '';
    bookInfo.getBookInfo();
  }, []);
  return (
    <>
      <Header>
        <ActionButton onClick={() => navigate(-1)} className={style['dark-btn']} text="back" />
      </Header>
      {bookInfo.result ?
        <BookInfo
          thumbnail={bookInfo.result.volumeInfo.imageLinks.thumbnail}
          categories={bookInfo.result.volumeInfo.categories}
          title={bookInfo.result.volumeInfo.title}
          authors={bookInfo.result.volumeInfo.authors}
          description={bookInfo.result.volumeInfo.description}
        /> :
        <Loader />}
    </>
  );
};

export default observer(BookInfoPage);
