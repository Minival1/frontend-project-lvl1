[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/Minival1/frontend-project-lvl1/codeclimate/maintainability)

Первый проект на профессии Фронтенд JavaScript на Хекслете. Проект состоит из 5 консольных игр, где пользователь вводит ответ на вопрос, а программа проверяет его и выводит результат. 

## Setup

У вас должен быть установлен node.js v13+, после этого в консоли с директорией папки с проектом выполнить команду npm link, после этого у вас появиться возможность выполнять следующие команды с запуском игр:

```sh
$ brain-calc
$ brain-even
$ brain-gcd
$ brain-prime
$ brain-progression

Чтобы убрать возможность запускать эти команды в консоли, в консоли с директорией папки с проектом выполните команду npm unlink
```
Либо

В консоли выполнить команду npm i make -g.
После этого вам будут доступны следующие команды в консоли с директорией папки с проектом:
```sh
$ make brain-calc
$ make brain-even
$ make brain-gcd
$ make brain-prime
$ make brain-progression
```


### Игра: "Проверка на четность"

Пользователь видит рандомное число, он должен ответить yes, если число чётное, no — если нечётное.

**Запуск**
```brain-even``` или ```make brain-even```

### Игра: "Калькулятор"

Пользователю показывается случайное математическое выражение, которое нужно вычислить и записать правильный ответ.

**Запуск**
```brain-calc``` или ```make brain-calc```

### Игра: "Наибольший Общий Делитель"

Пользователю показывается два случайных числа. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

**Запуск**
```brain-gcd``` или ```make brain-gcd```

### Игра: "Арифметическая прогрессия"

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

**Запуск**
```brain-progression``` или ```make brain-progression```

### Игра: "Простое ли число?"

Показываем игроку случайное число. Игрок должен определить простое ли это число и ответить "yes", если оно простое или "no" - в ином случае.

**Запуск**
```brain-prime``` или ```make brain-prime```
