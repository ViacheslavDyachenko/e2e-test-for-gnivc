import { ApiResponse, HTTPMethod } from '../RootStore/ApiStore/types';
import { ApiResp, ApiRespInfo, GetBookInfoParams, GetBooksListParams, IBooksStore } from './types';
import { BooksListModel } from '../../models/books/Books';
import rootStore from '../RootStore';
import { BookInfoModel } from '../../models/BookInfo/BookInfo';

export default class BooksApiStore implements IBooksStore {
  private readonly apiStore = rootStore.apiStore;

  async getBooksNextList(params: GetBooksListParams): Promise<ApiResp> {
    const response = await this.apiStore.request<ApiResponse<BooksListModel, BooksListModel>>({
      method: HTTPMethod.GET,
      endpoint: `/books/v1/volumes?q=${params.booksName}${params.categories !== 'all' ? '+subject:' + params.categories : ''}&startIndex=${params.startIndex}&maxResults=${params.lastIndex}`,
      headers: {},
    });
    try {
      response.data.items = await response.data.items.map((item: BooksListModel) => item);
    } catch (e) {
      return { success: response.success, data: response.data, status: response.status };
    }

    return { success: response.success, data: response.data, status: response.status };
  }

  async getBookInfo(params: GetBookInfoParams): Promise<ApiRespInfo> {
    const response = await this.apiStore.request<ApiResponse<BookInfoModel, BookInfoModel>>({
      method: HTTPMethod.GET,
      endpoint: `/books/v1/volumes/${params.id}`,
      headers: {} });
    return { success: response.success, data: response.data, status: response.status };
  }
}