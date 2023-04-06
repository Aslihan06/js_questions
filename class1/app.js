//? 1- Bir sayının tek mi çift mi olduğunu consol'a yazdıran koşulu yazınız.

const num = 977;

if (num%2 === 0){
    console.log(`${num} çift sayıdır`);
}else if(num%2 !== 0){
    console.log(`${num} tek sayıdır`);

}


//? 2- Bir sayının 0 ile 100 arasında olup olmadığını consol'a yazdıran ternary yapıyı yazınız.

const sayi = 334;

0<sayi && sayi<100 
? console.log(`Sayi 0 ile 100 arasındadır.`) 
: console.log(`Sayi 0 ile 100 arasında değildir.`);


