import {Product} from './product';
describe('product', () => {
   
    beforeEach(function() {
   });

   it('should have access to product id', function() {
       this.product = new Product(124, {'name': 'sample product'});
       expect(this.product.id).toEqual(124);
       expect(this.product.name).toEqual('sample product');
   });
});