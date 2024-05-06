import Buyable from '../../interfaces/Buyable';
import Cart from '../Cart';
import Movie from '../Movie';

test('Testing the creation of a Movie class object', (): void => {
  const result: Movie = new Movie(
    1,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['fantastic', 'actionMovie', 'fantasy', 'adventures'],
    137,
    500,
  );

  expect(result).toBeInstanceOf(Movie);
  expect(result).toEqual({
    id: 1,
    name: 'Мстители',
    year: 2012,
    country: 'США',
    tagline: 'Avengers Assemble!',
    genre: ['fantastic', 'actionMovie', 'fantasy', 'adventures'],
    durationInMinutes: 137,
    price: 500,
  });
});

test('Testing adding a Movie object to a Cart object', (): void => {
  const cart: Cart = new Cart();
  const movie: Movie = new Movie(
    1,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['fantastic', 'actionMovie', 'fantasy', 'adventures'],
    137,
    500,
  );

  cart.add(movie);

  const result: Buyable[] = cart.items;

  expect(result).toEqual([movie]);
});
