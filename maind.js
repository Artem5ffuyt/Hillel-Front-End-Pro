

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
Усі сповіщення виводити через alert.*/


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