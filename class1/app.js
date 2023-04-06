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

//? 4- Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirtilen bir sayının hangi güne karşılık gelidiğini switch case yapı ile konsola yazdıran kodu yazınız.

// pazar 0
// Pazartesi 1
// Salı 2
// Çarşamba 3
// Perşembe 4
// Cuma 5
// Cumartesi 6

const day = 8;

switch (day) {
    case 0:
        console.log(`Pazar`);
        
        break;
    case 1:
        console.log(`Pazartesi`);
        break;
    case 2:
        console.log(`Salı`);
        break;
    case 3:
        console.log(`Çarşamba`);
        break;
    case 4:
        console.log(`Perşembe`);
        break;
    case 5:
        console.log(`Cuma`);
        break;
    case 6:
        console.log(`Cumartesi`);
        break;            


    default:
        console.log(`Lütfen günlere denk gelen numarayı giriniz.`);
        break;
}
