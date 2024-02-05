import { findHeroById } from './services/hero.service';

const HERO = findHeroById(6);
console.log(HERO?.name ?? 'Hero not found'); // { id: 2, name: 'Spiderman', owner: 'Marvel' }
