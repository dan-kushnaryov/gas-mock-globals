export default class Cache {
  public _data: Record<string, string>;

  constructor() {
    this._data = {};
  }

  get(key: string) {
    return this._data[key] || null;
  }

  getAll(keys: string[] = []) {
    if (!keys.length) return this._data;

    return this._filterByKeys((key) => keys.includes(key));
  }

  put(key: string, value: string) {
    this._data[key] = value;
  }

  putAll(values: Record<string, string> = {}) {
    this._data = Object.assign(this._data, values);
  }

  remove(key: string) {
    delete this._data[key];
  }

  removeAll(keys: string[] = []) {
    this._data = this._filterByKeys((key) => !keys.includes(key));
  }

  _filterByKeys(filerFn: (key: string) => boolean) {
    return Object.assign(
      {},
      ...Object.keys(this._data)
        .filter(filerFn)
        .map((k) => ({ [k]: this._data[k] }))
    );
  }
}
