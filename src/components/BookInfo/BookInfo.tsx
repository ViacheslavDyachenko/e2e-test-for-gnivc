import React from 'react';

import styles from './BookInfo.module.scss';

type BookInfoProps = {
  thumbnail: string,
  categories: string[],
  title: string,
  authors: string[],
  description: string,
};

const BookInfo: React.FC<BookInfoProps> = ({ thumbnail, categories, title, authors, description }: BookInfoProps) => {
  return (
    <div className={styles['book-info-block']}>
      <img className={styles['book-info-block__img']} src={thumbnail} alt="" />
      <p className={styles['book-info-block__categories']}>{categories ? categories.join(', ') : ''}</p>
      <p className={styles['book-info-block__title']}>{title}</p>
      <p className={styles['book-info-block__authors']}>{authors ? authors.join(', ') : ''}</p>
      <p className={styles['book-info-block__description']}>{description}</p>
    </div>
  );
};

export default BookInfo;
