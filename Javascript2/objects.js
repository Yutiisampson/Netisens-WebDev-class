const myFirstOrder = {
    name: 'Toyota camry',
    price: 25000,
    year: 2010,
    color: 'blue',
    mileage: 150000,
    features: ['Auto-start', 'Bluetooth', 'LED Headlamb'],
    isElectric: false,
    isAvailable: true,
    engine:{
        type: 'V6',
        capacity: 2.5,
        cylinders: 6
    },
        drive: function (carname){

        }
}


console.log(myFirstOrder);
console.log(myFirstOrder.engine.type);
console.log(myFirstOrder.engine.capacity);
console.log(myFirstOrder['color']);
console.log(myFirstOrder['engine'] ['type']);
