
[![Maintainabilityhttps://github.com/Minival1/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/Minival1/frontend-project-lvl1/actions <a [![Build Status]href="https://codeclimate.com/github/Minival1/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>

Первый проект на профессии Фронтенд JavaScript на Хекслете. Проект состоит из 5 консольных игр, где пользователь вводит ответ на предложенный вопрос, а скрипт проверяет его и выводит результат. 

## Setup

У вас должен быть установлен node.js v13+, после этого

```sh
$ В консоли с директорией папки с проектом выполнить команду npm link, после этого у вас появиться возможность выполнять следующие команды с запуском игр:

$ brain-calc
$ brain-even
$ brain-gcd
$ brain-prime
$ brain-progression


Чтобы убрать возможность запускать эти команды в консоли, в консоли с директорией папки с проектом выполните команду npm unlink
```

Либо

```sh
$ В консоли выполнить команду npm i make -g
$ После этого вам будут доступны следующие команды в консоли с директорией папки с проектом:
$ make brain-calc
$ make brain-even
$ make brain-gcd
$ make brain-prime
$ make brain-progression
```


### Игра: "Проверка на четность"

Пользователь видит рандомное число, он должен ответить yes, если число чётное, no — если нечётное.

**Запуск**
```$ brain-even```

### Игра: "Калькулятор"

Пользователю показывается случайное математическое выражение, которое нужно вычислить и записать правильный ответ.

**Запуск**
```$ brain-calc```

### Игра: "Наибольший Общий Делитель"

Пользователю показывается два случайных числа. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

**Запуск**
```$ brain-gcd```

### Игра: "Арифметическая прогрессия"

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

**Запуск**
```$ brain-progression```

### Игра: "Простое ли число?"

Показываем игроку случайное число. Игрок должен определить простое ли это число и ответить "yes", если оно простое или "no" - в ином случае.

**Запуск**
```$ brain-prime```
