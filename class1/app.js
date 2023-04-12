// //? 1- Bir sayının tek mi çift mi olduğunu consol'a yazdıran koşulu yazınız.

// const num = 977;

// if (num%2 === 0){
//     console.log(`${num} çift sayıdır`);
// }else if(num%2 !== 0){
//     console.log(`${num} tek sayıdır`);

// }


// //? 2- Bir sayının 0 ile 100 arasında olup olmadığını consol'a yazdıran ternary yapıyı yazınız.

// const sayi = 334;

// 0<sayi && sayi<100 
// ? console.log(`Sayi 0 ile 100 arasındadır.`) 
// : console.log(`Sayi 0 ile 100 arasında değildir.`);

// //? 3- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız.

// const age = 18;

// age < 18 || age >= 18
// ?console.log(`Oy kullanabilirsiniz.`)
// :console.log(`Oy kullanamazsınız.`);

// //? 4- Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirtilen bir sayının hangi güne karşılık gelidiğini switch case yapı ile konsola yazdıran kodu yazınız.

// // pazar 0
// // Pazartesi 1
// // Salı 2
// // Çarşamba 3
// // Perşembe 4
// // Cuma 5
// // Cumartesi 6

// const day = 8;

// switch (day) {
//     case 0:
//         console.log(`Pazar`);
        
//         break;
//     case 1:
//         console.log(`Pazartesi`);
//         break;
//     case 2:
//         console.log(`Salı`);
//         break;
//     case 3:
//         console.log(`Çarşamba`);
//         break;
//     case 4:
//         console.log(`Perşembe`);
//         break;
//     case 5:
//         console.log(`Cuma`);
//         break;
//     case 6:
//         console.log(`Cumartesi`);
//         break;            


//     default:
//         console.log(`Lütfen günlere denk gelen numarayı giriniz.`);
//         break;
// }

// //? 5-Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız? 

// //  Not:
// //  90'dan büyükse AA.
// // - 80'den büyük yada 90'a eşitse AB,
// // - 70'den büyük yada 80'a eşitse BB,
// // - 60'den büyük yada 70'a eşitse BC,
// // - 50'den büyük yada 60'a eşitse CC,
// // - 40'den büyük yada 50'a eşitse CD,
// // - 30'den büyük yada 40'a eşitse DD,
// // - 30'dan küçük yada eşitse FF ,

// const not = 101;

// if (not>100 || not<0){
//     console.log(`Lütfen 100'den küçük ve 0'dan büyük sayı giriniz`);
// }else if(not>90){
//     console.log(`Puanınız AA`);
// }else if (not>80 || not === 90){
//     console.log(`Puanınız AB`);
// }else if(not>70 || not === 80){
//     console.log(`Puanınız BB`);
// }else if(not>60 || not === 70){
//     console.log(`Puanınız BC`);
// }else if(not>50 || not === 60){
//     console.log(`Puanınız CC`);
// }else if(not>40 || not === 50){
//     console.log(`Puanınız CD`);
// }else if(not>30 || not === 40){
//     console.log(`Puanınız DD`);
// }else if(not<=30 ){
//     console.log(`Puanınz FF`);
// }


// //?6- Artık yıl sorusu.Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.
// //!Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

// //? Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.

// const yil = 2013;

// if(yil%4===0 || yil%100 !==0 && yil%400===0){
//     console.log(`${yil} artık yıldır`);
// }else{
//     console.log(`${yil} artık yıl değildir`);
// }

// //?7- kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız.

// const ay = 2;
// const years = 2023;

// if(ay==2){
//     if(years%4===0 || years%100 !==0 && years%400===0){
//         console.log(`${ay}. ay 29 çeker`);
//     }else{
//         console.log(`${ay}. ay 28 çeker`);
//     }
// }else if(
//     ay==1||
//     ay==3||
//     ay==5||
//     ay==7||
//     ay==8||
//     ay==10||
//     ay==12
// ){
//     console.log(`${ay}. ay 31 çeker`);
// }else if(
//     ay==4||
//     ay==6||
//     ay==9||
//     ay==11
// ){
//     console.log(`${ay}. ay 30 çeker`);
// }
