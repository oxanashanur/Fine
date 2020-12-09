export default class FineService {
  constructor() {
    this._apiBase = "https://.../api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllFines = async () => {
    const res = await this.getResource(`/fines/`);
    return res.map(this._transformFine);
  };

  getFine = async (id) => {
    const fine = await this.getResource(`/fines/${id}/`);
    return this._transformFine(fine);
  };

  isSet(data) {
    if (data) {
      return data;
    } else {
      return "";
    }
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  _transformHouse = (fine) => {
    return {
      id: this._extractId(fine),
      name: this.isSet(fine.name),
      decree: this.isSet(fine.decree),
      certificate: this.isSet(fine.certificate),
      data: this.isSet(fine.data),
      violation: this.isSet(fine.violation),
      surname: this.isSet(fine.surname),
      inn: this.isSet(fine.inn),
      kpp: this.isSet(fine.kpp),
      score: this.isSet(fine.score),
      bank: this.isSet(fine.bank),
      bik: this.isSet(fine.bik),
      okato: this.isSet(fine.okato),
      kbk: this.isSet(fine.kbk),
      sum: this.isSet(fine.sum),
      discount: this.isSet(fine.discount),
      toPay: this.isSet(fine.toPay),
    };
  };
}
