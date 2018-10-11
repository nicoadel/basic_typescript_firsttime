//-----------------------------------Vehicless CLASS with 4 CHILDREN -----------------------------------------------//
abstract class Vehicless {
	name:string;
	ps:number;
	buildyear:number;
	distance_traveled:number;
	img:string;
	constructor(name:string, ps:number, buildyear:number, distance_traveled:number, img:string){
		this.name = name;
		this.ps = ps;
		this.buildyear = buildyear;
		this.distance_traveled = distance_traveled;
		this.img = img
	}
}
class Car extends Vehicless {
	reg_date:string;
	constructor(name:string, ps:number, buildyear:number, distance_traveled:number, img:string, reg_date:string){
		super(name, ps, buildyear, distance_traveled, img);
		this.reg_date = reg_date;
	}


}
class Motorcycle extends Vehicless{
	cycle_type:string;
	constructor(name:string, ps:number, buildyear:number, distance_traveled:number, img:string, cycle_type:string){
		super(name, ps, buildyear, distance_traveled, img);
		this.cycle_type = cycle_type;
	}


}
class Bus extends Vehicless{
	seats: number;
	constructor(name:string, ps:number, buildyear:number, distance_traveled:number, seats:number,img:string){
		super(name, ps, buildyear, distance_traveled, img);
		this.seats = seats;
	}


}
class LKW extends Vehicless{
	weight: number;
	constructor(name:string, ps:number, buildyear:number, distance_traveled:number, img:string, weight:number){
		super(name, ps, buildyear, distance_traveled, img);
		this.weight = weight;
	}

}
//-----------------------------------creating arrays with 5 class objects (each of each kind) in it, had to init it else its undefined  -----------------------------------------------//
var cars: Car[];
cars = [new Car("test",0,0,0,"test","test"),new Car("test",0,0,0,"test","test"),new Car("test",0,0,0,"test","test"),new Car("test",0,0,0,"test","test"),new Car("test",0,0,0,"test","test")];
var cars_i:number = 0;
var motorcycle: Motorcycle[];
motorcycle = [new Motorcycle("test",0,0,0,"text","test"),new Motorcycle("test",0,0,0,"text","test"),new Motorcycle("test",0,0,0,"text","test"),new Motorcycle("test",0,0,0,"text","test"),new Motorcycle("test",0,0,0,"text","test")];
var motorcycle_i:number = 0;
var bus: Bus[];
bus = [new Bus("test",0,0,0,0,"test"),new Bus("test",0,0,0,0,"test"),new Bus("test",0,0,0,0,"test"),new Bus("test",0,0,0,0,"test"),new Bus("test",0,0,0,0,"test")];
var bus_i:number = 0;
var lkw: LKW[];
lkw = [new LKW("test",0,0,0,"test",0),new LKW("test",0,0,0,"test",0),new LKW("test",0,0,0,"test",0),new LKW("test",0,0,0,"test",0),new LKW("test",0,0,0,"test",0)];
var lkw_i:number = 0;
//-----------------------------------Counting through each object-----------------------------------------------//
var jsonData = Vehicles;
for (var i:number= 0; i < jsonData.length;i++){
	let type = jsonData[i];
	console.log(i);
	if (type.type == 'Car'){
		cars[cars_i].name = type.type;
		cars[cars_i].ps = type.ps;
		cars[cars_i].buildyear = type.buildyear;
		cars[cars_i].distance_traveled = type.distance_traveled;
		cars[cars_i].reg_date = type.reg_date;
		cars[cars_i].img = type.img;
		cars_i++;
	}
	if (type.type == 'Motorcycle'){
		motorcycle[motorcycle_i].name = type.type;
		motorcycle[motorcycle_i].ps = type.ps;
		motorcycle[motorcycle_i].buildyear = type.buildyear;
		motorcycle[motorcycle_i].distance_traveled = type.distance_traveled;
		motorcycle[motorcycle_i].cycle_type = type.cycle_type;
		motorcycle[motorcycle_i].img = type.img;
		motorcycle_i++;
	}
	if (type.type == 'Bus'){
		bus[bus_i].name = type.type;
		bus[bus_i].ps = type.ps;
		bus[bus_i].buildyear = type.buildyear;
		bus[bus_i].distance_traveled = type.distance_traveled;
		bus[bus_i].seats = type.seats;
		bus[bus_i].img = type.img;
		bus_i++;
	}
	if (type.type == 'LKW'){
		lkw[lkw_i].name = type.type;
		lkw[lkw_i].ps = type.ps;
		lkw[lkw_i].buildyear = type.buildyear;
		lkw[lkw_i].distance_traveled = type.distance_traveled;
		lkw[lkw_i].weight = type.weight;
		lkw[lkw_i].img = type.img;
		lkw_i++;
	}
}
console.log(cars);

//document.getElementById("option1").addEventListener("click")

document.getElementById("option1").addEventListener("click",changecontent_all);
document.getElementById("option2").addEventListener("click",changecontent_car);
document.getElementById("option3").addEventListener("click",changecontent_motorcycle);
document.getElementById("option4").addEventListener("click",changecontent_bus);
document.getElementById("option5").addEventListener("click",changecontent_lkw);



function changecontent_all(){
document.getElementById("item_container").innerHTML =
        `${jsonData.map(car_item).join('')}`
}
function changecontent_car(){
document.getElementById("item_container").innerHTML =
        `${cars.map(car_item).join('')}`
}
function changecontent_motorcycle(){
document.getElementById("item_container").innerHTML =
        `${motorcycle.map(car_item).join('')}`
}
function changecontent_bus(){
document.getElementById("item_container").innerHTML =
        `${bus.map(car_item).join('')}`
}
function changecontent_lkw(){
document.getElementById("item_container").innerHTML =
        `${lkw.map(car_item).join('')}`
}

//-----------------------------DISPLAY IT IN INNERHTML-----------------------------//
function car_item(item) {
        return `
                <div class="col-lg-4 col-md-6 col-sm-6 col-xsm-12 bg-danger border">
                <div class="block_element rounded">
                    <img class="p-2 rounded" src="${item.img}" alt="">
                    <div class="movie_description">
                        <h4 class="pt-3  font-weight-bold text-center">${item.name}</h4>
                        <h5>PS: ${item.ps}</h5> 
                        <h5 class="">BUILD IN YEAR: ${item.buildyear}</h5>
                    </div>
                </div>
            </div>
                `
    }

