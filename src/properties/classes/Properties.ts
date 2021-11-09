let data: Record<string, string> = {};

export default class Properties {
  deleteAllProperties() {
    data = {};

    return this;
  }

  deleteProperty(key: string) {
    delete data[key];

    return this;
  }

  getKeys() {
    return Object.keys(data);
  }

  getProperties() {
    return data;
  }

  getProperty(key: string) {
    return data[key] || null;
  }

  setProperties(properties = {}, deleteAllOthers = false) {
    data = Object.assign(deleteAllOthers ? {} : data, properties);

    return this;
  }

  setProperty(key: string, value: string) {
    data[key] = value;

    return this;
  }
}
