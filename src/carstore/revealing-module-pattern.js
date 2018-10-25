function carstore() {
  let privateBrands = {};
  let privateCars = [];

  const setBrands = brands => {
    privateBrands = brands;
  };

  const setCars = cars => {
    privateCars = cars;
  };

  const privateMostExpensive = () =>
    privateCars.reduce((a, b) => (b.price > a.price ? b : a));

  function privatePrintDetails(car) {
    console.log(car.model + ' - ' + privateBrands[car.brand]);
    console.log(car.price + ' (' + car.stock + ')');
  }

  function privatePrintAll() {
    privateCars.map(car => privatePrintDetails(car));
  }

  return {
    setBrands,
    setCars,
    getMostExpensive: privateMostExpensive,
    showCar: privatePrintDetails,
    listCars: privatePrintAll
  };
}

export default carstore();
