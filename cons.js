console.log("================1st =====================")
frut=["apple","cherry","banana","mango","kiwi"]
console.log(frut.length);

console.log("================2nd =====================")
let colors=["red","lavender","black","purple"];
console.log(colors.indexOf("green"));
console.log(colors.indexOf("lavender"));

console.log("================3rd =====================")
let animals=["lion","tiger","cheeta"]
animals.push("dog");
console.log(animals);

console.log("================4th=====================")
let cars=["Tesla","BMW","audi","Jaguar"]
cars.pop();
console.log(cars);

console.log("================5th=====================")
let gadgets=["mobile","gps","laptop"]
gadgets.shift();
console.log(gadgets);

console.log("================6th=====================")
let cities=["chennai","madurai"]
cities.unshift("theni");
console.log(cities);

console.log("================7th=====================")
let lang=["html","css","javascript"]
 langStr=lang.join(", ")
console.log(langStr);

console.log("================8th=====================")
let lucks="dog,cat,bird";
let str = lucks.split(",");
   console.log(str);

console.log("================9th=====================")   
let countries=["india","japan","korea"]
countries.push("russia");
console.log(countries);
countries.pop();
console.log(countries);

console.log("================10th=====================")
let items=["pen","pencil","scale"]
items.unshift("divider");
console.log(items);
items.shift();
console.log(items);




console.log("================12th=====================")
let fruits=["apple","cherry","mango","kiwi"]
if(fruits.indexOf("apple")>=0){
    console.log("found");
}else{
console.log("not found")
}

console.log("================13th=====================")
let pen=["ink","gel","ballpoinnt"]
bendo=pen.join(", ");
console.log(bendo);

console.log("==============1st==============")
let bts=["rm","jin","suga","j-hope","jimin","v","jungkook"]
if(0<=bts.indexOf("lisa")){
   console.log("yes")
}else{
    console.log("no")
}

console.log("============2nd============")
let num=63;
if(num%11==0){
    console.log("divisible")
}else{
    console.log("non-divisible")
}

console.log("========3rd===============")
laptop=
    {
        model:"microsoft surface 3",
        ram:"8gb",
        osVersion:"windows 11",
        isGPUAvailable:true
                   
    }

    console.log(laptop);
console.log("======4th============")
function printReverse(a,b){
    while(a<b){
       if(b%2==0){
        console.log(b)
        b--
       }
    }
}
printReverse(1,60);




console.log("hello world")