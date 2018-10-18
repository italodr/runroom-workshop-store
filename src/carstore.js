import brands from './brands.json';

const cars = [
  {
    brand: 'brand1',
    model: 'California',
    price: 50000,
    stock: 5
  },
  {
    brand: 'brand1',
    model: 'Passat',
    price: 19000,
    stock: 5
  },
  {
    brand: 'brand1',
    model: 'Tiguan',
    price: 90000,
    stock: 3
  },
  {
    brand: 'brand1',
    model: 'Touareg',
    price: 64000,
    stock: 12
  },
  {
    brand: 'brand2',
    model: 'A3',
    price: 9000,
    stock: 6
  },
  {
    brand: 'brand2',
    model: 'A5',
    price: 35000,
    stock: 3
  },
  {
    brand: 'brand2',
    model: 'Q7',
    price: 32000,
    stock: 7
  }
];

function carstore() {
  const privateConst = 12345;

  function printDetails(car) {
    console.log(car.model + ' - ' + brands[car.brand]);
    console.log(car.price + ' (' + car.stock + ')');
  }

  function printAllCars() {
    cars.map(car => this.printDetails(car));
  }

  const mostExpensive = cars.reduce((a, b) => (b.price > a.price ? b : a));

  return {
    getMostExpensive: mostExpensive,
    printDetails
  };
}

export default carstore();
