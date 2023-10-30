// let text= " this is programming language";
// let netice = "this"
// function myfunction( text1, index=0){
//     for (let i = 0; i < text1.length; i++) {
//        if (text1(text1[i]===this)) {
//         return true;
//        }
//     }
//     return false;

// }
// console.log(myfunction(text,"5"))

// const text="programming"
// const array1=text.split("")
// console.log(array1)

// ?---------------------task12--------------------------------

// function myfunction2(text){
//     text= text.toString()
//      array2=[]
// for (let i = 0; i < text.length; i++) {
//     array2.push(text[i])

// }
// return array2

// }
// console.log(myfunction2(34803233))

// ?--------------------task13----------------------------

// function myfunction( text2){
//     text2= text2.toString()
//    let num_enboyuk=text2[0]
//     for (let i = 0; i < text2.length; i++) {
//         if (num_enboyuk < text2[i]) {

//             num_enboyuk=text2[i]

//         }
//     }
//     return num_enboyuk

// }
// console.log(myfunction(136389))

//?--------------- task14-------------------------------
// function myfunction( text2,){
//     text2= text2.toString()
//      let num_enkicik=text2[0]
//     for (let i = 0; i < text2.length; i++) {
//         if (num_enkicik>text2[i]) {
//             num_enkicik=text2[i]

//         }
//     }
//     return num_enkicik

// }
// console.log(myfunction(36389))


//? --------------------task15---------------
// function myfunction(text3) {
//     text3 = text3.toString()
//     const array1 = text3.split("")
//     console.log(array1);
//     let cem = 0
//     let hasil = 0
//     let ededi_orta = 0
//     for (let i = 0; i < text3.length; i++) {
//         cem = cem + parseInt(array1[i])
//         hasil = hasil * parseInt(array1[i])
//         ededi_orta = ededi_orta * parseInt(array1[i])

        
//     }
//      console.log(cem);
// }
// console.log(myfunction(3267812))


//? ----------------task16-----------------------


// function myfunction(num){
//     bolenler=0;
//     arr=[]
//     for (let i = 0; i < num; i++) {
//         if (num%i==0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(myfunction(8));



//? ------------------------task17------------------


// function myfunction(num){
//     bolenler=0;
//     let count=0

//     for (let i = 0; i <= num; i++) {
//         if (num%i==0) {
//            count++
//            }
//     }
//     return count
// }

// console.log(myfunction(4));


// ?-------------------------------task18------------

// function myfunction(num,sum,hasil,edediorta){
 
//     sum = 0
//     hasil = 1
//     edediorta=0
//     for (let i = 0; i <= num; i++) {
//         if (num%i==0) {
//             sum = sum + i
//             hasil = hasil * i
//             edediorta=(edediorta+i)/i
//         }
        
//     }
//     console.log(sum);
//         console.log(hasil);
//         console.log(edediorta);   
// }
// console.log(myfunction(8))

// ?----------------------19---------------------------

// function myfunction(num, vuruqlar) {
//       vuruqlar =[] 
    
//     for (let i = 0; i <= num; i++) {
//         if (num % i == 0) {
//                  vuruqlar.push(i)
//                  num= num/i     
//         }
//     }
//     return vuruqlar  
// }

// console.log(myfunction(20))

// ?-----------------------20------------------------
function myfunction(num) {
    let text1 = " bu eded ne sade ne murekkebdir"
    let text2= "bu eded sadedir"
    let text="bu eded murekkebdir"
    if (num <= 1) {
        return text1   
    }
    else if (num == 2) {
        return text2
    }
    else if (num == 3 || num == 5 || num == 7) { 
        return text2
        }
    else   {
        for (let i = 2; i < num; i++){
            if (num % 2 == 0 || num % 3 == 0 || num%5==0 ||num%7==0) {   // 10a eder olan sade ededler bunlar oldugu ucun bunlari qeyd edirik
                return text
            } 
        }
        
    }  
}
console.log(myfunction(14));

