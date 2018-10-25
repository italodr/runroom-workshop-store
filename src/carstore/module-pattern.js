import { brands, cars } from '../data';

function carstore() {
  const privateBrands = brands;
  const privateCars = cars;

  function printDetails(car) {
    console.log(car.model + ' - ' + privateBrands[car.brand]);
    console.log(car.price + ' (' + car.stock + ')');
  }

  function printAllCars() {
    privateCars.map(car => printDetails(car));
  }

  const mostExpensive = () =>
    privateCars.reduce((a, b) => (b.price > a.price ? b : a));

  return {
    getMostExpensive: () => {
      return mostExpensive();
    },
    showCar: car => {
      printDetails(car);
    },
    listCars: () => {
      printAllCars();
    }
  };
}

export default carstore();
