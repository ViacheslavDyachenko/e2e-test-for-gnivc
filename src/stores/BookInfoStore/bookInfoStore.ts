
import { action, computed, flow, makeObservable, observable } from 'mobx';
import React from 'react';

import { ILocalStore } from '../../utils/useLocalStore/useLocalStore';
import BooksApiStore from '../BooksApiStore';
import { BookInfoModel } from '../../models/BookInfo/BookInfo';

type PrivateFileds = '_bookId' | '_result' | '_isLoaded';

export default class BookInfoStore implements ILocalStore {

  private _booksApiStore = new BooksApiStore();

  private _bookId: string = '';

  private _isLoaded: boolean = false;

  private _result: BookInfoModel | null = null;

  constructor() {
    makeObservable<BookInfoStore, PrivateFileds>(this, {
      _result: observable,
      _bookId: observable,
      _isLoaded: observable,
      getBookInfo: action,
      destroy: action,
      result: computed,
      bookId: computed,
      isLoaded: computed,
    });
  }

  get bookId() {
    return this._bookId;
  }

  set bookId(value) {
    this._bookId = value;
  }

  get result() {
    return this._result;
  }

  get isLoaded() {
    return this._isLoaded;
  }

  getBookInfo = flow(function* (this: BookInfoStore) {
    const response = yield this._booksApiStore.getBookInfo({ id: this._bookId });
    this._result = response.data;
    this._isLoaded = response.success;
  });

  destroy(): void {
    this._result = null;
    this._bookId = '';
    this._isLoaded = false;
  }
}