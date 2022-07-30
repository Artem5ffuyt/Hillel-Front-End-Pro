/*1) Перевірити чи має користувач доступ до сайту. Користувач вводить імя та пароль. Якщо імя 
та пароль ПОВНІСТЮ збігаються вивести сповіщення через alert, 
що доступ надано. Порівнюйте з цими даними - Name: 'admin' Password: 'qWeRty123'

        //   Pішення
let namme = prompt ('Введить логін');
let pasword = prompt ('Введить пароль');


if (namme === 'admin' && pasword === `qWeRty123`) {
 alert(`пароль вірний`)
} else {
    alert(`пароль або логін не вірний`)
}


/*2) Юзер задає число, що відповідає віку людини (роки). Додайте до цього числа слово рік, роки
 грамматично правильно, та виведіть сповіщення з результатом через alert

Приклад:

Юзер ввів 10. Сповіщення - Вам 10 років.

Юзер ввів 1. Сповіщення - Вам 1 рік.

   // Pішення

   let age = parseInt( prompt('Скільки вам років?'));
   if(age === 1 ) {
       alert(` Вам ${age} рік`);
   }
   if (age ==2) {alert(`Вам ${age} роки`);
   }
   if (age ==3) {alert(`Вам ${age} роки`);
   }
   if (age ==4) {alert(` Вам ${age} роки`);
   } 
   if (age >=5) {alert(` Вам ${age} рокiв`);
   }

   

/*3) Юзер вводить 4 числа. Знайти добуток найбільшого і найменшого числа із заданих.

   Приклад:
   
   Задано : 2 , -5, 10, 1. Рішення: -5 * 10 = -50. 
   
        //Ршшення

    
let prOne = prompt('ведить першу цифру');
let prTwo = prompt('ведить другу цифру');
let prSre = prompt('ведить третю цифру');
let prPho = prompt('ведить четверту цифру');

let a = Math.min(prOne, prTwo, prSre, prPho);
let b = Math.max(prOne, prTwo, prSre, prPho);

alert(`Рішення ${a} * ${b} = ${a*b}` );



/*4) Задачка з зірочкою.
Дана шахова дошка і фігура коня.
Юзер вводить початкову позицію коня в цифрах ( число1 ) (число2 )
Число1 - відповідає цифрам на картинці, Число2 - замість літер. (Було а5, стало 1 5. Було d4 
стало 4 4)
Юзер вводить будь-яку комбінацію руху коня на нову позицію (число1) (число2)
Вивести на екран true якщо кінь зі своє позиіції може перемістись на нову позицію або 
false, якщо не може. ( за шахматними правилами)
Приклад.
Юзер вказує позицію ( 1 , 1 )- Шахматний кінь знаходится в лівому нижньому кутку дошки. 
(чорна клітина).
Юзер вказує рух на клітину (3, 2). Виводимо true, адже кінь може туди переміститись.
Юзер вказує позицію ( 8, 8 )
Юзер вказує рух на клітину (7, 7). Виводимо false, бо кінь не може туди переміститись.
Підказка у додатку. Перевіряйте, щоб юзер не міг ввести цифри менше за 1 та більше за 8.
І не міг ввести букви.
Усі сповіщення виводити через alert.


    //Рішення

const initialX = Number (prompt(`Start position x. Max 8,min 0`))
const initialY = Number (prompt(`Start position y. Max 8,min 0`))



if (initialX < 1 || initialX > 8 || initialY < 1 || initialY > 8 ) {
    alert('Ви ввели не вірне значення')
}

const moveX = Number (prompt(`move position x`))
const moveY = Number (prompt(`move position y`))

if ( moveX < 1 || moveX > 8 || moveY < 1 || moveY > 8 ) {
    alert('Ви ввели не вірне значення')
}

const moveUpLong = (initialX + 2 === moveX && initialY - 1 === moveY) || (initialX + 1 === moveX && initialY - 2 === moveY) ||
                   (initialX + 2 === moveX && initialY + 1 === moveY) || (initialX + 1 === moveX && initialY + 2 === moveY)

const moveShort =  (initialX - 2 === moveX && initialY - 1 === moveY) || (initialX - 1 === moveX && initialY - 2 === moveY) ||
                   (initialX - 2 === moveX && initialY + 1 === moveY) || (initialX - 1 === moveX && initialY + 2 === moveY)


if ( moveUpLong || moveShort){
    alert(`Ход вірний`)
}    
 else{
    alert(`Ход НЕ ВІРНИЙ`)
}
*/



