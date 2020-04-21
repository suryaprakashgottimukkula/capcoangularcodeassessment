export class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    company: string;
    // tslint:disable-next-line:variable-name
    date_entry: string;
    // tslint:disable-next-line:variable-name
    org_num: string;
    // tslint:disable-next-line:variable-name
    address_1: string;
    city: string;
    zip: string;
    geo: string;
    pan: string;
    pin: string;

    status: string;
    fee: string;
    guid: string;
    // tslint:disable-next-line:variable-name
    date_exit: string;
    // tslint:disable-next-line:variable-name
    date_first: string;
    // tslint:disable-next-line:variable-name
    date_recent: string;
    url: string;

    // tslint:disable-next-line:variable-name
    constructor(id, name, phone, email, company, date_entry, org_num, address_1, city, zip, geo, pan, status, pin, fee, guid,
                // tslint:disable-next-line:variable-name
                date_first, date_recent, url) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.company = company;
        this.date_entry = date_entry;
        this.org_num = org_num;
        this.address_1 = address_1;
        this.city = city;
        this.zip = zip;
        this.geo = geo;
        this.pan = pan;


        this.pin = pin;
        this.status = status;
        this.fee = fee;
        this.guid = guid;
        this.date_first = date_first;
        this.date_recent = date_recent;
        this.url = url;
    }
}
