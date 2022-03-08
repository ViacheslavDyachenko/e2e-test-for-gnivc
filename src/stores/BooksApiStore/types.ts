import { StatusHTTP } from '../RootStore/ApiStore/types';
import { bookItemModel } from '../../models/books/Books';
import { BookInfoModel } from '../../models/BookInfo/BookInfo';

export type GetBooksListParams = {
  booksName: string,
  startIndex: number,
  lastIndex: number,
  categories: string,
}

export type GetBookInfoParams = {
  id: string
}

export type ApiResp = {
  success: boolean,
  data: bookItemModel,
  status: number | StatusHTTP.BAD_STATUS
}

export type ApiRespInfo =  {
  success: boolean,
  data: {
    totalItems: number,
    items: BookInfoModel
  },
  status: number | StatusHTTP.BAD_STATUS
}

export interface IBooksStore {
  getBooksNextList(params: GetBooksListParams): Promise<ApiResp>;
  getBookInfo(params: GetBookInfoParams): Promise<ApiRespInfo>;
}