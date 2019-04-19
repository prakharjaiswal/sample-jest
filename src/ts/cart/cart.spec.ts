import {Cart} from './cart';
import {Product} from '../product/product';

describe('Cart', () => {

    describe('on initialized with products', () => {
        let cart: Cart;
        beforeEach(() => {
            const products = [
                new Product(123, {}),
                new Product(124, {}),
                new Product(125, {})
            ];
            cart = new Cart(products); 
        });

        it('should reflect correct count', () => {
            expect(cart.count).toEqual(3);
        });

        describe('and on adding 3 new products to cart', () => {
            beforeEach(() => {
                cart.addItem(new Product(126, {}), 3);
            });

            it('should show updated count', () => {
                expect(cart.count).toEqual(6);
            });
        });

        describe(' and on deleting a product from cart', () => {
            let deletedItem;
            beforeEach(() => {
                deletedItem = cart.deleteItem(123, 1);
            });

            it('should update the count', () => {
                expect(cart.count).toEqual(2);
            });

            it('should return the deleted item(s)', () => {
                expect(deletedItem.length).toEqual(1);
                expect(deletedItem[0].id).toEqual(123);
            });
        });
    });
});