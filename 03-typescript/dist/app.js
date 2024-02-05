"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const HERO = (0, hero_service_1.findHeroById)(6);
console.log((_a = HERO === null || HERO === void 0 ? void 0 : HERO.name) !== null && _a !== void 0 ? _a : 'Hero not found'); // { id: 2, name: 'Spiderman', owner: 'Marvel' }
