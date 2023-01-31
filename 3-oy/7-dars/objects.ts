// Diyorbek Ravshanbekov 13
// property
let shokirjon: { oquvchiIsmi: string, surname: string, age: number } = {
    oquvchiIsmi: 'Shokirjon',
    surname: 'Shokirov',
    age: 13
}

shokirjon.age = 14

console.log(`O'quvchi ${shokirjon.oquvchiIsmi} ${shokirjon.surname} ${shokirjon.age} yoshda`)

// Kitob ma`lumotlari berilgan u malumotlarni objectlarga saqlang
// 1. Nomi: Solaris, Avtor: Stanislav Lem, bahosi: $32
// 2. Nomi: War and Peace, Avtor: Lev Tolstoy, bahosi: $45
// 3. Nomi: Past days, Avtor: Abdulla Qodiriy, bahosi: $40

// Oquvchi malumotlari berilgan u ma`lumotlar objectlarga saqlang
// 

// 1. numbers uchta sondan iborat object berilgan (a, b, c) 
// 2. result deb nomlangan object berilgan unda (summ va substract) 
// qiymatlari berilgan
// 3. result ni summ property siga numbers dagi sonlarni yigindisi
// substract property ga numbers ni ayirmasi joylansin

// 3 ta Employee object yarating, unda ismi, familiyasi va beriladigan
// oylik maoshi berilgan
// shu uchta ishchiga umumiy qancha maosh berilishini aniqlang
/**
 * let programming = {
        languages: ["JavaScript", "Python", "Ruby"],
        isChallenging: true,
        isRewarding: true,
        difficulty: 8,
        jokes: "Jokes"
    };
 * Beshta meva objecti berilgan, ularning nomi va baxosi berilgan
 * bahosi 10 dan kam bolgan mevalarning nomlarini string massivga
 * joylang
 */

/**
 * 5 foydalanuvchi malumotlari berilgan (email, password)
 * shu objectlardan tashkil topgan massiv yarating va 
 * 3 index dagi foydalanuvchini emailini chiqaring
 */

const users: { email: string, password: string }[] = []

// string <= { email: string, password: string } [!]
// { email: string, password: string } <= { email: string, password: string }

const user1: { email: string, password: string } = {
    email: "aslbek@gmail.com",
    password: "1234"
}

const user2: { email: string, password: string } = {
    email: "aisha@gmail.com",
    password: "1234"
}

const user3: { email: string, password: string } = {
    email: "dilshod@gmail.com",
    password: "1234"
}

users.push(user1, user2, user3)

console.log(users[2].email)

