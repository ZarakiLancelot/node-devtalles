import { HEROES } from '../data/heroes';

export const findHeroById = (id: number) => {
  return HEROES.find(hero => hero.id === id);
}
