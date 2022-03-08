
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import styles from './BookList.module.scss';
import ActionButton from '../ActionButton';
import useLocalStore from '../../utils/useLocalStore';
import ShowDetailsStore from '../../stores/showDetailsStore';

type BookListProps = {
  id: string
  img: string;
  categories: string[];
  name: string;
  authors: string[];
  index: number;
};

const BookList: React.FC<BookListProps> = (
  {
    id,
    img,
    categories,
    name,
    authors,
    index,
  }: BookListProps) => {
  const showDetailsStore = useLocalStore(() => new ShowDetailsStore());

  const onClick = () => showDetailsStore.showDetails(!showDetailsStore.isShowDetails);

  return (
    index % 2 ?
      <div id={id} className={styles['book-tile']}>
        <Link style={{ textDecoration: 'none' }} to={`/book/${id}`} className={styles['book-tile__content']}>
          <img className={styles[showDetailsStore.isShowDetails ? 'book-tile__img' : 'book-tile__img_center']} src={img} alt='' />
          {showDetailsStore.isShowDetails && <p className={styles['book-tile__categories']}>{categories ? categories[0] : ''}</p>}
          {showDetailsStore.isShowDetails && <p className={styles['book-tile__name']}>{name}</p>}
          {showDetailsStore.isShowDetails && <p className={styles['book-tile__authors']}>{authors ? authors.join(', ') : ''}</p>}
        </Link>
        <ActionButton className={styles['mobile-btn_dark']} text='details' onClick={onClick} />
      </div> :
      <div id={id} className={styles['book-tile-white']}>
        <Link style={{ textDecoration: 'none' }} to={`/book/${id}`} className={styles['book-tile-white__content']}>
          <img className={styles[showDetailsStore.isShowDetails ? 'book-tile__img_white' : 'book-tile__img_white_center']} src={img} alt='' />
          {showDetailsStore.isShowDetails && <p className={styles['book-tile__categories_white']}>{categories ? categories[0] : ''}</p>}
          {showDetailsStore.isShowDetails && <p className={styles['book-tile__name_white']}>{name}</p>}
          {showDetailsStore.isShowDetails && <p className={styles['book-tile__authors_white']}>{authors ? authors.join(', ') : ''}</p>}
        </Link>
        <ActionButton className={styles['mobile-btn']} text='details' onClick={onClick} />
      </div>
  );
};

export default observer(BookList);
