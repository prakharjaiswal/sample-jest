import { Product } from '../product/product';
class Cart {

    private products: Product[];
    
    constructor(products: Product[]) {
        this.products = products;
    }

    addItem(product: Product, count: number) {
        for (let iter = 0; iter < count; iter++) {
            this.products.push(product);
        }
        return true;
    }

    deleteItem(productId: string|number, count: number) {
        const deleted = [];
        do {
            const index = this.products.findIndex((prod) => productId === prod.id);
            if (index > -1) {
                deleted.push(this.products.splice(index, 1)[0]);
            }
        } while (count--);
        return deleted;
    }

    get count() {
        return this.products.length;
    }

}

export {Cart};