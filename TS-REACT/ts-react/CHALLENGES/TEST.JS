import assert from 'assert';
const objs ={
    name:"carlos",
    print: ()=>{console.log(this.name)}
}
Object.freeze(objs)//para que quede inmutable

const arr = ["cordoba", "cordoba", "cordoba", "cordoba", " rosario", " rosario", " rosario", "buenos aires"]
function a(arr, num){
    let obj={}
  
arr.forEach(el=>{
   obj[el]=!obj[el] ? 1 : obj[el] += 1;

}
);// contador de ciudades
return Object.keys(obj).map(city=>({name:city, times:obj[city]})).sort(( a,b)=>(b.times-a.times)).slice(0,num).map(city=>city.name);
//ordena la cantidade de las ciudades, corta de 0 a la que querramos y luego devuelve solo los nombres ordenados por cant de repeticion

}
a(arr, 5);

//slice corte(desde que elemento, hsta cual)
//splice(desde que elemento, cantidad de elemetos a sacar, elemento a poner) corta y remplaza+
//substring
//splite

const t = ["Cordoba", "Rosario", "Cordoba","Cordoba","Cordoba","Cordoba","la plata", "Buenos Aires","Rosario","Rosario","Rosario","Cordoba"]
function myFunction(t){


const s = {}
t.map(citi=>{
    //   console.log(citi);
        // s.citi=1;
      s[`${citi}`]=1+1;
//    console.log(s,"s" );
})
return Object.values(s);
}

async function  testDesecentOrder(){
    console.log("arranco el test");
    await assert( myFunction(t) );
    // assert(s, "carlos");

    console.log('no falló el test');
}
testDesecentOrder()

