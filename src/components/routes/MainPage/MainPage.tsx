import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import BookTile from '../../BookTile';
import DropDown from '../../DropDown';
import Header from '../../Header';
import Input from '../../Input';
import GetBooksStore from '../../../stores/getBooksStore';
import useLocalStore from '../../../utils/useLocalStore';
import SearchButton from '../../SearchButton';
import Loader from '../../Loader';
import ActionButton from '../../ActionButton';
import style from './MainPage.module.scss';
import BookList from '../../BookList';

type MainPageProps = {
  isTile: boolean;
};

const MainPage = ({ isTile }: MainPageProps) => {
  const getBooksList = useLocalStore(() => new GetBooksStore());
  const [searchParams] = useSearchParams();
  const value = searchParams.get('value');
  const startIndex = searchParams.get('startIndex');
  const lastIndex = searchParams.get('lastIndex');
  const categoriesValue = searchParams.get('categoriesValue');
  React.useEffect(() => {
    if (value && startIndex && lastIndex && categoriesValue) {
      getBooksList.value = value;
      getBooksList.startIndex = parseInt(startIndex);
      getBooksList.lastIndex = parseInt(lastIndex);
      getBooksList.categoriesValue = categoriesValue;
      getBooksList.getBooksList();
    }
  }, []);
  return (
    <>
      <Header>
        <Input
          onBlur={getBooksList.onBlur}
          onFocus={getBooksList.onFocus}
          value={getBooksList.value}
          onChange={getBooksList.onChange}
        />
        <Link className={style['btn-search']} to={`/card/?value=${getBooksList.value}&startIndex=${getBooksList.startIndex}&lastIndex=${getBooksList.lastIndex}&categoriesValue=${getBooksList.categoriesValue}`}><SearchButton onClick={getBooksList.onClick} /></Link>
        <DropDown
          label='Categories'
          value={getBooksList.categoriesValue}
          onChange={getBooksList.onChangeCategories}
          list={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
        />
      </Header>
      <div className={style['books-block']}>
        <Link className={style['btn-card']} to={`/card/?value=${getBooksList.value}&startIndex=${getBooksList.startIndex}&lastIndex=${getBooksList.lastIndex}&categoriesValue=${getBooksList.categoriesValue}`}><ActionButton text='cards' onClick={() => getBooksList.showWithCards(true)} /></Link>
        <Link className={style['btn-list']} to={`/list/?value=${getBooksList.value}&startIndex=${getBooksList.startIndex}&lastIndex=${getBooksList.lastIndex}&categoriesValue=${getBooksList.categoriesValue}`}><ActionButton text='list' onClick={() => getBooksList.showWithCards(false)} /></Link>
        <h2 className={style['books-block__counter']}>{
          Boolean(getBooksList.totalItems)
            ? `Found ${getBooksList.totalItems} results`
            : getBooksList.loadStatus === 'notFound' && 'Nothing found'}</h2>
        {getBooksList.result
          && getBooksList.result.map((item, index) => {
            return isTile ?
              <BookTile
                key={item.id + item.etag}
                id={item.id}
                img={item.volumeInfo ? item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '' : ''}
                categories={item.volumeInfo ? item.volumeInfo.categories ? item.volumeInfo.categories : [] : []}
                name={item.volumeInfo ? item.volumeInfo.title.length > 50 ? item.volumeInfo.title.slice(0, 51) + '...' : item.volumeInfo.title : ''}
                authors={item.volumeInfo ? item.volumeInfo.authors ? item.volumeInfo.authors : [] : []}
              /> :
              <BookList
                key={item.id + item.etag}
                id={item.id}
                index={index}
                img={item.volumeInfo ? item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '' : ''}
                categories={item.volumeInfo ? item.volumeInfo.categories ? item.volumeInfo.categories : [] : []}
                name={item.volumeInfo ? item.volumeInfo.title.length > 50 ? item.volumeInfo.title.slice(0, 51) + '...' : item.volumeInfo.title : ''}
                authors={item.volumeInfo ? item.volumeInfo.authors ? item.volumeInfo.authors : [] : []}
              />;
          })
        }
      </div>
      {!getBooksList.loaded && <Loader />}
      {getBooksList.loadStatus === 'ok' && <ActionButton text='Load more' onClick={getBooksList.loadMore} />}
    </>
  );
};

export default observer(MainPage);
