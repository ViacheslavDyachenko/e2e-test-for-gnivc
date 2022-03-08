import { action, computed, flow, makeObservable, observable } from 'mobx';
import React from 'react';

import { ILocalStore } from '../../utils/useLocalStore/useLocalStore';
import BooksApiStore from '../BooksApiStore/BooksApiStore';
import { bookItemModel } from '../../models/books/Books';

type PrivateFileds = '_value' | '_loaded' | '_loadStatus' | '_result' | '_totalItems' | '_categoriesValue' | '_isCard';

export default class GetBooksStore implements ILocalStore {

  private _booksApiStore = new BooksApiStore();

  private _value: string = '';

  private _categoriesValue: string = 'all';

  private _totalItems: number = 0;

  private _startIndex: number = 0;

  private _lastIndex: number = 0;

  private _result: bookItemModel | null = null;

  private _loaded: boolean = true;

  private _loadStatus: null | 'ok' | 'forbidden' | 'notFound' | 'BAD_STATUS' = null;

  private _isCard: boolean = true;

  constructor() {
    makeObservable<GetBooksStore, PrivateFileds>(this, {
      _result: observable,
      _totalItems: observable,
      _value: observable,
      _categoriesValue: observable,
      _loaded: observable,
      _loadStatus: observable,
      _isCard: observable,
      onChange: action,
      keydownFunc: action,
      onChangeCategories: action,
      showWithCards: action,
      onClick: action,
      getBooksList: action,
      loadMore: action,
      destroy: action,
      value: computed,
      loaded: computed,
      loadStatus: computed,
      result: computed,
      totalItems: computed,
      categoriesValue: computed,
      isCard: computed,
    });
  }

  get loadStatus() {
    return this._loadStatus;
  }

  get categoriesValue() {
    return this._categoriesValue;
  }

  set categoriesValue(val) {
    this._categoriesValue = val;
  }

  get loaded() {
    return this._loaded;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  get startIndex() {
    return this._startIndex;
  }

  set startIndex(val) {
    this._startIndex = val;
  }

  get lastIndex() {
    return this._lastIndex;
  }

  set lastIndex(val) {
    this._lastIndex = val;
  }

  get result() {
    return this._result;
  }

  get totalItems() {
    return this._totalItems;
  }

  get isCard() {
    return this._isCard;
  }

  onChange = (event: React.FormEvent): void => {
    const element = event.target as HTMLInputElement;
    this._value = element.value;

  }

  keydownFunc = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      this._startIndex = 0;
      this._lastIndex = 30;
      this._loaded = false;
      this._result = null;
      this._loadStatus = null;
      this.getBooksList();
    }
  }

  onFocus = (): void => {
    document.addEventListener('keydown', this.keydownFunc);
  }

  onBlur = (): void => {
    document.removeEventListener('keydown', this.keydownFunc);
  }

  onChangeCategories = (event: React.FormEvent): void => {

    const element = event.target as HTMLSelectElement;

    this._categoriesValue = element.value;

  }

  showWithCards = (isCards: boolean) => {
    this._isCard = isCards;
  }

  onClick = (): void => {
    this._startIndex = 0;
    this._lastIndex = 30;
    this._loaded = false;
    this._result = null;
    this._loadStatus = null;
    this.getBooksList();
  }

  getBooksList = flow(function* (this: GetBooksStore) {
    const response = yield this._booksApiStore.getBooksNextList({
      booksName: this._value,
      startIndex: this._startIndex,
      lastIndex: this._lastIndex,
      categories: this._categoriesValue,
    });
    try {
      this._totalItems = response.data.totalItems;
      this._loaded = response.success;

      this._result = this._result ? this._result?.concat(response.data.items) : response.data.items;
      if (response.status === 200) this._loadStatus = 'ok';
    } catch (e) {
      this._loadStatus = 'BAD_STATUS';
    }
    this._startIndex += 30;
    if (this._totalItems === this._result?.length) this._loadStatus = null;

  });

  loadMore = () => {
    this._loaded = false;
    this.getBooksList();
  }

  destroy(): void {
    this._result = null;
    this._startIndex = 0;
    this._lastIndex = 0;
    this._value = '';
    this._loaded = true;
  }
}