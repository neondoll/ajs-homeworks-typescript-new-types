import Buyable from '../interfaces/Buyable';
import { Genre } from '../types/Genre';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: Genre[],
    readonly durationInMinutes: number,
    readonly price: number,
  ) {
  }
}
