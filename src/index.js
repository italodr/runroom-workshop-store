//import carstore from './carstore/singleton-pattern';
//import carstore from './carstore/module-pattern';
import carstore from './carstore/revealing-module-pattern';
import { brands, cars } from './data';

function commonThings() {
  const mostExpensiveCar = carstore.getMostExpensive();
  carstore.showCar(mostExpensiveCar);
  console.log('--------------');
  carstore.listCars();
}

// Singleton Pattern
function singletonPattern() {
  commonThings();
}

// Module Pattern
function modulePattern() {
  commonThings();
}

// Revealing Module Pattern
function revealingModulePattern() {
  carstore.setBrands(brands);
  carstore.setCars(cars);
  commonThings();
}

//singletonPattern();
//modulePattern();
revealingModulePattern();
