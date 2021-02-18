export default class ResourceModel {
  private _id: number
  private _title: string
  private _url: string

  constructor(id: number, title: string, url: string) {
    this._id = id
    this._title = title
    this._url = url
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
}