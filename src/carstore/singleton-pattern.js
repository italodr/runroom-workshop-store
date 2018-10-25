import { brands, cars } from '../data';

const carstore = {
  showCar: function(car) {
    console.log(car.model + ' - ' + brands[car.brand]);
    console.log(car.price + ' (' + car.stock + ')');
  },
  listCars: function() {
    cars.map(this.showCar);
  },
  getMostExpensive: function() {
    return cars.reduce((a, b) => (b.price > a.price ? b : a));
  }
};

export default carstore;
