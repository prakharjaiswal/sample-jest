interface IProductParams {
}

class Product {
    private _id: string|number;
    constructor(id: string|number, attributes: IProductParams) {
        this._id = id;
        Object.assign(this, attributes);
    }

    get id() {
        return this._id;
    }
}

export {Product, IProductParams};