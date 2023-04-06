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

//? 3- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız.

const age = 18;

age < 18 || age >= 18
?console.log(`Oy kullanabilirsiniz.`)
:console.log(`Oy kullanamazsınız.`);