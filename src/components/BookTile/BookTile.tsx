import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BookTile.module.scss';

type BookTileProps = {
  id: string;
  img: string;
  categories: string[];
  name: string;
  authors: string[];
};

const BookTile: React.FC<BookTileProps> = ({ id, img, categories, name, authors }: BookTileProps) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/book/${id}`} className={styles['book-tile']}>
      <img className={styles['book-tile__img']} src={img} alt='' />
      <p className={styles['book-tile__categories']}>{categories ? categories[0] : ''}</p>
      <p className={styles['book-tile__name']}>{name}</p>
      <p className={styles['book-tile__authors']}>{authors ? authors.join(', ') : ''}</p>
    </Link>
  );
};

export default BookTile;
