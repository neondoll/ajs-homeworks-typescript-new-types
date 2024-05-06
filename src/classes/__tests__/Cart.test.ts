import Buyable from '../../interfaces/Buyable';
import Cart from '../Cart';

test('Testing the creation of a Cart class object', (): void => {
  const result: Cart = new Cart();

  expect(result).toBeInstanceOf(Cart);
  expect(result).toEqual({ pvtItems: [] });
});

test('Testing adding items to a Cart class object and getting them', (): void => {
  const cart: Cart = new Cart();
  const item: Buyable = { id: 1, name: 'Test', price: 300 };

  cart.add(item);

  const result: Buyable[] = cart.items;

  expect(result).toEqual([item]);
});
