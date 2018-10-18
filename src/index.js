const brands = {
  brand1: "Volkswagen",
  brand2: "Audi"
};

const cars = [
  {
    brand: "brand1",
    model: "California",
    price: 50000,
    stock: 5
  },
  {
    brand: "brand1",
    model: "Passat",
    price: 19000,
    stock: 5
  },
  {
    brand: "brand1",
    model: "Tiguan",
    price: 90000,
    stock: 3
  },
  {
    brand: "brand1",
    model: "Touareg",
    price: 64000,
    stock: 12
  },
  {
    brand: "brand2",
    model: "A3",
    price: 9000,
    stock: 6
  },
  {
    brand: "brand2",
    model: "A5",
    price: 35000,
    stock: 3
  },
  {
    brand: "brand2",
    model: "Q7",
    price: 32000,
    stock: 7
  }
];

function printDetails(car, index, arr) {
  console.log(car.model + " - " + brands[car.brand]);
  console.log(car.price + " (" + car.stock + ")");
}

/*
function expensiveCar(arr) {
  let selectedCar;
  let price = 0;
  
  // Map loop option
  arr.map(function (car) {
    if (car.price > price) {
      price = car.price;
      selectedCar = car;
    }
  });

  // For loop option
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].price > price) {
      price = arr[i].price;
      selectedCar = arr[i];
    }
  }
  
  return selectedCar;
}
*/

// cars.map(printDetails);

//const theExpensiveCar = expensiveCar(cars);
//console.log(printDetails(theExpensiveCar));

const mostExpensive = cars.reduce((a, b) => (b.price > a.price ? b : a));

console.log(printDetails(mostExpensive));
