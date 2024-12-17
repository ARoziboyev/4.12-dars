// 1-10: Obyektlarni tanlash va chiqarish


// 1.Masala: Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.


// let people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];

// console.log(people[0].name);


// 2.Masala: Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.


//  let items = [
//   { id: 101 },
//   { id: 102 },
//   { id: 103 },
//   { id: 104 },
//   { id: 105 }
// ];
// console.log(items[4].id);


// 3.Masala: 4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.


// let people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 },
//   { name: "Karim", age: 35 }
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].age);
// }


// 4.Masala: 3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.

//  let users = [
//   { name: "Ali", city: "Toshkent" },
//   { name: "Vali", city: "Samarqand" },
//   { name: "Sami", city: "Buxoro" }
// ];
// console.log(users[1].city);
  


// 5.Masala: Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.


//  let workers = [
//   { name: "Ali", job: "Dasturchi" },
//   { name: "Vali", job: "O'qituvchi" },
//   { name: "Sami", job: "Haydovchi" }
// ];

// for (let i = 0; i < workers.length; i++) {
//     console.log(workers[i].job);
//   }



// 6.Masala: 5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.

//  let employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 900 },
//   { name: "Karim", salary: 1500 },
//   { name: "Asad", salary: 1100 }
// ];
// console.log(employees[2].salary);



// 7.Masala: 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.


//  let countries = [
//   { country: "Uzbekistan" },
//   { country: "Russia" },
//   { country: "USA" },
//   { country: "China" }
// ];

//       console.log(countries[0].country);


// 8.Masala: 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.

//  let orders = [
//   { id: 1, status: "New" },
//   { id: 2, status: "Pending" },
//   { id: 3, status: "Shipped" },
//   { id: 4, status: "Delivered" },
//   { id: 5, status: "Cancelled" },
//   { id: 6, status: "Returned" }
// ];
// console.log(orders[4].status);


// 9.Masala: 3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.

//  let contacts = [
//   { name: "Ali", phone: "998901234567" },
//   { name: "Vali", phone: "998902345678" },
//   { name: "Sami", phone: "998903456789" }
// ];
// console.log(contacts[2].phone);


// 10.Masala: 4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga chiqaring.


//  let users = [
//   { name: "Ali", email: "ali@gmail.com" },
//   { name: "Vali", email: "vali@yahoo.com" },
//   { name: "Sami", email: "sami@hotmail.com" },
//   { name: "Karim", email: "karim@outlook.com" }
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].email);
// }


// 11-20: Obyektlar qiymatini o'zgartirish
// 11. Masala: Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.

// let users = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];

// users[0].name = "Alisher";

// console.log(users);


// 12.Masala: Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.
 
//  let tasks = [
//   { id: 1, status: "New" },
//   { id: 2, status: "In Progress" },
//   { id: 3, status: "Pending" }
// ];

// tasks[2].status = "Updated"

// console.log(tasks);


// 13.Masala: 3-obyektning salary qiymatini 2000 ga tenglashtiring.


//  let employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 1500 }
// ];

// employees[2].salary = 2000;
// console.log(employees);


// 14.Masala: Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.
 

//  let cities = [
//   { id: 1, city: "Toshkent" },
//   { id: 2, city: "Namangan" },
//   { id: 3, city: "Samarqand" }
// ];
// cities[2].city = "Farg'ona"
// console.log(cities);


// 15.Masala: 4-obyektning email qiymatini yangi qiymat bilan almashtiring.

//  let clients = [
//   { name: "Ali", email: "ali@mail.com" },
//   { name: "Vali", email: "vali@mail.com" },
//   { name: "Sami", email: "sami@mail.com" },
//   { name: "Karim", email: "karim@mail.com" }
// ];
// clients[3].email = "karim_new@mail.com"
// console.log(clients);


// 21-30: Yangi maydon qo'shish va qiymatni yangilash

// 21.Masala: Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.
 

//  let users = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];
// users[0].status = "active"
// console.log(users);



// 22.Masala: Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.


//  let people = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// people[2].role = "admin"
// console.log(people);


// 23.Masala: Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.

//  let users = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// for (let i = 0; i < users.length; i++) {
//   users[i].isVerified = false
  
// }
// console.log(users);


// 24.Masala: 2-obyektning salary qiymatini 500 ga oshiring.

//  let workers = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 900 }
// ];
// workers[1].salary += 500
// console.log(workers);


// 25.Masala: 4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.

//  let contacts = [
//   { name: "Ali", phone: "998901234567" },
//   { name: "Vali", phone: "998902345678" },
//   { name: "Sami", phone: "998903456789" },
//   { name: "Karim", phone: "998904567890" }
// ];
// contacts[3].phone += " (updated)"
// console.log(contacts);


// 26.Masala: Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.

//  let people = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Sami", age: 30 }
// ];
// people[1].age *= 2
// console.log(people);

// 27.Masala: Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.
 
//  let employees = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// employees[2].joinedAt = "2024-07-01"
// console.log(employees);


// 28.Masala: Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.
 
//  let team = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// team[0].name += " (CEO)"
// console.log(team);



// 29.Masala: 3-obyektning price qiymatini 10% kamaytiring.

//  let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];
// products[2].price *= 0.9
// console.log(products);


// 30.Masala: Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.

// let users = [
//   { name: "Ali", isActive: false },
//   { name: "Vali", isActive: false },
//   { name: "Sami", isActive: false }
// ];
// for (let i = 0; i < users.length; i++) {
//   users[i].isActive = true
// }
// console.log(users);


// 31-40: Shartli tekshirish va qiymatlar o'zgarishi

// 31. Shartli tekshirish va qiymatlar o'zgarishi

// Masala: Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.

// let data = [
//   { id: 1, name: "Ali", status: "Completed" },
//   { id: 2, name: "Vali", status: "Pending" },
//   { id: 3, name: "Sami", status: "Completed" }
// ];

// if (data[1].status === "Pending") {
//   data[1].status = "Completed";
// }

// console.log(data);



// 32.Masala: 1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.

// let data = [
//   { id: 1, name: "Ali", age: 35 },
//   { id: 2, name: "Vali", age: 25 },
//   { id: 3, name: "Sami", age: 28 }
// ];
// if (data[0].age > 30) {
//     data[0].status = "Senior";
//   }
  
//   console.log(data);


// 34.Masala: Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.

// let data = [
//   { id: 1, name: "Ali", role: "manager" },
//   { id: 2, name: "Vali", role: "guest" },
//   { id: 3, name: "Sami", role: "supervisor" }
// ];

// data[0].role = "user";
// data[1].role = "user";
// data[2].role = "admin";

// console.log(data);


// 35.Masala: 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.

// let data = [
//   { id: 1, name: "Ali", city: "Buxoro" },
//   { id: 2, name: "Vali", city: "Namangan" },
//   { id: 3, name: "Sami", city: "Toshkent" }
// ];

// if (data[2].city === "Toshkent") {
//     data[2].city = "Samarqand";
//   }
// console.log(data);


// 36. Masala: Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.

// let data = [
//   { id: 1, name: "Ali", salary: 900 },
//   { id: 2, name: "Vali", salary: 1200 },
//   { id: 3, name: "Sami", salary: 800 }
// ];

// data.forEach(v => {
//   if (v.salary < 1000) {
//     v.low = true;
//   }
// });

// console.log(data);

// 37.Masala: 2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.

// let data = [
//   { id: 1, name: "Ali", email: "ali@yahoo.com" },
//   { id: 2, name: "Vali", email: "vali@gmail.com" },
//   { id: 3, name: "Sami", email: "sami@mail.com" }
// ];
// if (data[1].email.endsWith("@gmail.com")) {
//   data[1].email += " (verified)";
// }

// console.log(data);

// 39.  Masala: Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.

// let data = [
//   { id: 1, name: "Product1", stock: 0 },
//   { id: 2, name: "Product2", stock: 5 },
//   { id: 3, name: "Product3", stock: 10 }
// ];
// if (data[0].stock === 0) {
//   data[0].isAvailable = false;
// }

// console.log(data);


// 40.Masala: Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.

// let data = [
//   { id: 1, name: "Ali", status: "Pending" },
//   { id: 2, name: "Vali", status: "Active" },
//   { id: 3, name: "Sami", status: "Completed" }
// ];
// data.forEach((v, i) => {
//   if (i === 0) {
//     v.status = "Active"; 
//     } else {
//     v.status = "Inactive";
//     }
// });

// console.log(data);



// 41-50: Obyektni saralash, tanlash va qiymatlarni tekshirish

// 41.Masala: Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.

// let data = [
//   { id: 1, name: "Product1", price: 600 },
//   { id: 2, name: "Product2", price: 400 },
//   { id: 3, name: "Product3", price: 800 }
// ];
// data.forEach(v => {
//   if (v.price > 500) {
//     v.isExpensive = true;
//   }
// });

// console.log(data);

// 42.Masala: 2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.

// let data = [
//   { id: 1, name: "Ali", salary: 900 },
//   { id: 2, name: "Vali", salary: 1000 },
//   { id: 3, name: "Sami", salary: 800 }
// ];
// data.forEach(v => {
//   if (v.salary >= 1000) { 
//         v.HighSalary = true; 
//     }
// });

// console.log(data);


// 43.Masala: Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilang.

// let data = [
//   { id: 1, name: "Vali", role: "user" },
//   { id: 2, name: "Sami", role: "user" },
//   { id: 3, name: "Ali", role: "guest" }
// ];
// data.forEach(v => {
//   if (v.name === "Ali") {
//     v.isManager = true;
//   }
// });

// console.log(data);


// 44. Masala: Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing.

// let data = [
//   { id: 1, name: "Ali", age: 17 },
//   { id: 2, name: "Vali", age: 20 },
//   { id: 3, name: "Sami", age: 16 }
// ];
// data.forEach(v => {
//     if (v.age <= 18) {
//       v.isUnderage = true;
//     }
//   });
  
//   console.log(data);


// 45.Masala: Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing.

// let data = [
//   { id: 1, name: "Product1", stock: 5 },
//   { id: 2, name: "Product2", stock: 15 },
//   { id: 3, name: "Product3", stock: 8 }
// ];
// data.forEach(v => {
//       if (v.stock <= 10) {
//         v.lowStock = true;
//       }
//     });
    
//     console.log(data);



// 46. Masala: 1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.

// let data = [
//   { id: 1, name: "Ali", role: "admin" },
//   { id: 2, name: "Vali", role: "user" },
//   { id: 3, name: "Sami", role: "supervisor" }
// ];

// data[0].role = 'guest'
// console.log(data);


// 47.Masala: Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.

// let data = [
//   { id: 1, name: "Ali", status: "Pending" },
//   { id: 2, name: "Vali", status: "Completed" },
//   { id: 3, name: "Sami", status: "Pending" }
// ];
// data.forEach(v => {
//   if (v.status === "Pending") {
//     v.isPending = true;
//   }
// });

// console.log(data);
  

// 48.Masala: Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.

// let data = [
//   { id: 1, name: "Ali", city: "Samarqand" },
//   { id: 2, name: "Vali", city: "Namangan" },
//   { id: 3, name: "Sami", city: "Toshkent" }
// ];
// if (data[2].city === "Toshkent") {
//   data[2].city = "Buxoro"
// }
// console.log(data);


// 49.Masala: Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.

// let data = [
//   { id: 1, name: "Ali", score: 70 },
//   { id: 2, name: "Vali", score: 90 },
//   { id: 3, name: "Sami", score: 40 }
// ];
// data.forEach(v => {
//     if (v.score < 50) {
//       v.failed = true;
//     }
//   });
  
//   console.log(data);


// 50.Masala: Barcha obyektlarning discount qiymatini 0 qilib belgilang, lekin price qiymati > 1000 bo'lgan obyektlarda "discount" qiymatini 20 qilib belgilang.

// let data = [
//   { id: 1, name: "Product1", price: 1200 },
//   { id: 2, name: "Product2", price: 800 },
//   { id: 3, name: "Product3", price: 1500 }
// ];
// data.forEach(v => {
//   v.discount = v.price > 1000 ? 20 : 0;
// });

// console.log(data);


// 51-60: Obyektlarni o'zgartirish va murakkabroq amallar

// 51. Masala: Massivdagi obyektlarning salary qiymatini 10% ga oshiring.

// let data = [
//   { id: 1, name: "Ali", salary: 1000 },
//   { id: 2, name: "Vali", salary: 1500 },
//   { id: 3, name: "Sami", salary: 2000 }
// ];

// data.forEach(v =>{
//   v.salary = v.salary * 1.10
// })

// console.log(data);


// 52. Masala: 2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.

// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[1].name = " - employee"
// console.log(data);


// 53.Masala: Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.

// let data = [
//   { id: 1, name: "Product1", stock: 5 },
//   { id: 2, name: "Product2", stock: 0 },
//   { id: 3, name: "Product3", stock: 10 }
// ];
// data.forEach(v => {
//   v.isAvailable = v.stock > 0;
// });

// console.log(data);


// 54.Masala: Agar birinchi obyektning price qiymati 1000 dan katta bo'lsa, uni 900 ga tushiring.

// let data = [
//   { id: 1, name: "Product1", price: 1200 },
//   { id: 2, name: "Product2", price: 800 },
//   { id: 3, name: "Product3", price: 1000 }
// ];
//  if (data[0].price >= 1000) {
//    data[0].price = 900
//  }
//  console.log(data);
 

// 55. Masala: Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.

// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[data.length - 1].updatedAt = "2024-07-10";

// console.log(data);


