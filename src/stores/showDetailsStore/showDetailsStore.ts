
import { action, computed, makeObservable, observable } from 'mobx';

import { ILocalStore } from '../../utils/useLocalStore/useLocalStore';

type PrivateFileds = '_isShowDetails';

export default class ShowDetailsStore implements ILocalStore {

  private _isShowDetails: boolean = false;

  constructor() {
    makeObservable<ShowDetailsStore, PrivateFileds>(this, {
      _isShowDetails: observable,
      showDetails: action,
      isShowDetails: computed,
    });
  }

  get isShowDetails() {
    return this._isShowDetails;
  }

  showDetails = (isShowDetail: boolean) => {
    this._isShowDetails = isShowDetail;
  }

  destroy(): void {
    this._isShowDetails = false;
  }

}
