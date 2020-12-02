
//import* as math from './modules/math'



// variables 

var x =10;
var X=10;
var y=x;

// tipos de datos 

var numero=10;
var numero_f=55.55;
var nombre ='pedro';
var text="Mi nombre es pedro perez";
var texto='hola a todos! \'soy Pedro un estudiante que aprende a programar.\'';
var verdad=true;

// operadores matematicos

var a=10;
var b=a+5+22+1000+50;
var z=a*2;
var c=b/4;
var d=26%6;

// operadores de incremento y decremento

var h=10;
var j=++h;

var g=20;
var k=--g; 

alert(k);

// operadores de asignacion

 a=g;
 a+=g;
 a-=g;
 a*=g;
 a/=g;
 a%=g;

 //operadores de comparacion

a==g;
a===b;
a!=b;
a!==b;
a>b;
a>=b;
a<b;
a<=b;

// operadores logicos

(4>2)&&(10<15);

(4>2)||(10<15);

//if(a!=num)


//Operadores de cadena de texto


// concatenacion 
var texto1="Mi nombre es Pedro Perez";
var texto2=" y aprendo js";
document.write(texto1+texto2);

var z="20";
var v="20";
document.write(z+v);

console.log(a===b);

// condicionales

var myNum1=7;
var myNum2=10;

if(myNum1<myNum2){
    alert("JS is easy to learn");
}else{
  alert("js is dificult to learn");

}

if(myNum1===myNum2){
    alert("TRUE");
}else{
  alert("FALSE");
}

var course=3;

if (course==1) {
    document.write("<h1>HTML tutorial</h1>") 
}else if (course==2) {
    document.write("<h2>CSS TUTORIAL</h2>")  
}else{
document.write("<h1>JS tutorial</h1>");
}

// que pasa si la variable course es =3 r= evalua dos condiciones que resultan falsas y una verdadera que es la de JS TUTORIAL

// estructura switch

var day=2;
switch (day) {
    case 1:
        document.write("lunes")
        break;
    case 2:
        document.write("martes");
        break;
    case 3:
        document.write("miercoles");
        break;

    default:document.write("Dia random");
        break;
}

//bucles

//for

var dias=[1,2,3,4,5,6];

for (let i = 0; i <dias.length; i++) {
   console.log(dias[i]);
}

//while

var date=4;

while (date<=6) {
  document.write("<br/>"+"Hola Mundo");
  date++;      
}

// do while 

var data=20;

do {
    document.write(data+"<br/>");
    data++;
    
} while (data<=25);

// break and continue 

for ( i=0; i <=data; i++) {
    if(i==10){
        break;
    }
    document.write("conteo break"+i+"<br/>");
}


for ( i=0; i <=data; i++) {
    if(i==5){
        continue;
    }
    document.write("conteo"+i+"<br/>");
}

// funciones

function sayGood(n){
alert("hello"+n);

}

sayGood("ANDRES DE LA RIVA");


// Funciones con return

function suma(p,o){

return console.log(p+o);

}

var sumando=suma(1,2);


// arrow function
var name,lastName;

sayHello=(name,lastName)=>{
    console.log("mi nombre es "+name+lastName)
}

sayHello("Camilo","Cordoba");


// ventanas alert ,prompt ,Confirm

alert("Quieres salir de esta pagina?");

//prompt

var usuario=prompt("Por favor ingrese su nombre");
alert(usuario);

// confirm

var confirme=confirm("Quiere aprender react js");
if(confirme==true){
alert("Por favor  llene  el formulario");
}else{
    alert("Gracias por su visita");
}


// Es6

var direccion="Calle 3a";
let m=true;
const l=Math.PI;

// Prueba de variables locales y globales

function varTest(){
var q=1;
if(true){
var q=2;
 console.log(q);
}
console.log(q);
}

function  letTest(){
    let w=3;
if(true){
    let w=4;
 console.log(w);   
} 
console.log(w);
}


// Template literals

 let name_1='David';
 let msg=`Welcome ${name}`;
 console.log(msg);

 let num_1=4;
 let num_2=3;

 let msg_2=`The sum is equal to ${num_1+num_2}`;
 console.log(msg_2);

// asignacion val en ciclo for  desde array

let list=["x","y","c"];

for(let val of list){
    console.log(val)
}

// funciones simplificadas "arrow function"

function add(element_1,element_2){
    var sumar=element_1+element_2;
    console.log(sumar);
}

// con es6

const nan=(n,m)=>{
    let mus=n+m;
    console.log(mus);
}

// con parametros predeterminados

const test=(e,r=4,t=9)=>{
return e+r+t;
}
// asignacion de variable e
console.log(test(5));


// Objetos js  *

let tree={
heigth:10,
color:'Red',
grow(){
    this.heigth +=2;
}
};

tree.grow();
console.log(tree.heigth);


let hg=5;
let ht=100;

let atlethe={
    hg,ht
};


// nombres de propiedad calculados []  *

let prop='name';
let id='1234';
let mobile='08923';

let nuevo_u={
[prop]:'carlos',
[`user_${id}`]:`${mobile}`
};


var i =0;
var a={
['foo'+ ++i]:1,
['foo'+ ++i]:1,
['foo'+ ++i]:1
}
 
// METODO CHARAT DEVUELVE UN CARACTER EN LA POSICION ESPECIFICADA

// METODO SLICE devuelve una parte de un array desde el inicio hasta el fin especificado

var param='size';
var config={
[param]:12,
['mobile'+param.charAt(0).toUpperCase()+param.slice(1)]:4

}

console.log(config);


// object assing

// objecto.assing con parametro {} denota clonacion del objeto source
let person={
name:'jack',
age:18,
sex:'male'
}

let student ={
name:'Bob',
age:20,
xp:'2'
};

let newStudent=Object.assign({},person,student);

console.log(newStudent);

// asignacion propiedad  objeto 

let persona={
    name:"jack",
    age:18
}

let newPersona=({},persona,{name:'Bob'});


// descomposicion de arrays  

let arr=['1','2','3','4'];

let[one,two,three]=arr;

console.log(one);
console.log(two);
console.log(three);

// descomponer un array devuelto por un arrow function()

let arr_2=['4','5','6','7'];
let[cuatro,cinco,seis,siete]=arr_2;

let lo=()=>{
    return [arr_2];
}



// descomponiendo objetos

//let obj={zx:100,xs:true};
//let{xz,zx}=obj;

//console.log(h);
//console.log(s);


// sin parentesis

let { ll,nn}={ll:'Hello',nn:'jack'};
console.log(ll);

// cambio de variables en el objeto

var ce={h:42,s:true};
var { h:dart,s:lingo}=ce;

console.log(ce.h);


var obj={id:42,name:"jack"};

//let{id=10,age=20}=obj;


console.log(id);
//console.log(age);



// Rest

function containsAll(arr,...nums){
for(let num of nums){
if(arr.indexOf(num)===-1){
return false;

}}
return true;
};


// spreads  en f(x)

function myFunction(w,x,y,z){
console.log(w+x+y+z);

}

var args=[1,2,3];
myFunction.apply(args.concat(4));

//after
var w;
const  myFUNCTION=(w,x,y,z)=>{
console.log(w+x+y+z);
};

let Args=[1,2,3];
myFunction(...Args,4);


//example


// metodo splice averiguar 
var dateFields=[1970,0,1];
var date=new 
Date(...dateFields);
console.log(date);

var Arr=["one","two","five"];

Arr.splice(2,0,"three");
Arr.splice(3,0,"Four");

console.log(Arr);

//after

let newArr=['three','Four'];
let Arrr=['one','two',...newArr,'five'];
console.log(arr);



// spread en objetos 

const obj1={foo:'bar',
x:42};

const obj2={foo:'baz',
x:5};

const clonedObj={...obj1};
const mergeObj={...obj1,...obj2};


//Clases 

var altura;
var ancho;

class rectangle{
    constructor(altura,ancho){
     this.altura=altura;
     this.ancho=ancho;

    }
}

const square=new rectangle(5,5);
const poster=new rectangle(2,3);

// clases con metodos y atributos

var Square=class{
constructor(altura,ancho){
    this.altura=altura;
    this.ancho=ancho;
}
};

class Rectangulo{
constructor(altura,ancho){
    this.altura=altura;
    this.ancho=ancho;
}
 get area(){
return this.calcArea();
}
calcArea(){
    return this.altura * this.ancho;
}
}

const cuadro=new Rectangulo(10,10);
console.log(cuadro.area);



class point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
static distance(a,b){
const dx=a.x-b.x;
const dy=a.y-b.y;

return Math.hypot(dx,dy);
}

}

const p3=new point(7,2);
const pw=new point(3,8);


//HERENCIA CON EXTENDS FROM

class animal {
    constructor(name){
        this.name=name; 
    }
    speak(){
        console.log(this.name+"el animal hace ruido");
    }
}

class Dog extends animal{
    speak(){
        console.log(this.name+"ladra");
    }
}


let dog =new Dog("Lucas");
dog.speak();


// usando metodos de la clase padre


 /* class animal {
    constructor(name){
        this.name=name; 
    }
    speak(){
        console.log(this.name+"el animal hace ruido");
    }
}*/


/* class Dog extends animal{
    speak(){
    
    super.speak()
        console.log(this.name+"ladra");
    }
}; */

// metodo map para arrays

let map =new Map([['k1','v1'],['k2','v2']]);
//1 -pollo
//2 -arroz
console.log(map.size);




/*map.set('k1','v1').set('k2','v2');

console.log(map.get('k1'));

console.log(map.has('k2'));

for (let kv of map.entries())
console.log(kv[0]+":"+kv[1]);*/


//OBJETOS SET

let set=new Set([1,2,4,2,59,9,4,9,1]);

console.log(set.size);

 let set_2=new Set();

 set_2.add(5).add(9).add(59).add(9);

 console.log(set_2.has(9));



 // Promises

 new Promise(function(resolve,reject){

if( true)
   resolve();

   else 
    ( reject (Error("Failure")));
 }
  
 );



 function asyncFunc(work){
     return new 
   Promise(function(resolve,reject)
   {
       if(work==="")
       reject(Error("Nothing"));
       setTimeout(function(){
         resolve(work);  
       },1000);
   });
} 


asyncFunc("work1").then(
    function(result){
   console.log(result); 
   return asyncFunc("work 2");

    },function(error){
        console.log(error);
    }).then(function(result){
     console.log(result);   
    },function(error){
        console.log(error);
    });

   


 //iteradores y generadores

 let myIteravleObj={
     [Symbol.iterator]:function*(){
     yield 1;yield 2 ;yield 3;
 }};

console.log(...myIteravleObj);


function* idMarker(){
let index=0;
while(index<5)

yield index++;
}
//var gen=idMaker();
//console.log(gen.next().value);


const art=['0','1','4','a'];

const my_obj={
[Symbol.iterator]:function*()
{
for (let index of art){
    yield `${index}`;
}
}
};

const all=[...my_obj].map(i=>parseInt(i,10)).map(Math.sqrt).filter((i)=>i<5).reduce((i,d)=>i+d);

console.log(all);


//console.log(`2p=+${math.sum(math.pi,math.pi)}`);



//Métodos integrados 
//Búsqueda de elemeto de arrays: 
[4, 5, 1, 8, 2, 0] .find (x => x > 3);
[4, 5, 1, 8, 2, 0] .findIndex (x => x > 3);

//Repeticiones de strings
console.log ("foo" .repeat(3)); //foofoofoo

//Búsqueda de strings 
"SoloLearn" .startsWith ("Solo", 0); //true
"SoloLearn" .endsWith ("Solo", 4); //true
"SoloLearn" .includes ("loLe"); //true
"SoloLearn" .includes ("olo", 1); //true
"SoloLearn" .includes ("olo", 2); //false