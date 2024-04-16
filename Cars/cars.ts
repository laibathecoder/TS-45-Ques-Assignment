//Question NO : 45
//CARS.

type car = {
    manufacturer : string,
    model : string,
    [key : string] : any;
}

function createCar(manufacturer : string , model : string , optional : Record<string,any>): car {
    return  {
        manufacturer,
        model,
        ...optional
    }
}

const mycar : car = createCar("Toyota","carolla",{color : "silver",year : "2024"});
console.log(mycar);





