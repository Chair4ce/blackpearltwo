export default class ResourceModel {
  private _id: number
  private _title: string
  private _url: string
  private _status: number
  private _tab: number
  private _card: number
  private _pos: number


  constructor(id: number, title: string, url: string, status: number, tab: number, card: number, pos: number) {
    this._id = id;
    this._title = title;
    this._url = url;
    this._status = status;
    this._tab = tab;
    this._card = card;
    this._pos = pos;
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  get url(): string {
    return this._url
  }

  set url(value: string) {
    this._url = value
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }


  get tab(): number {
    return this._tab;
  }

  set tab(value: number) {
    this._tab = value;
  }

  get card(): number {
    return this._card;
  }

  set card(value: number) {
    this._card = value;
  }


  get pos(): number {
    return this._pos;
  }

  set pos(value: number) {
    this._pos = value;
  }
}
