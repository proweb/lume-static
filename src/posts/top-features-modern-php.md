---
title: Современный PHP с примерами
---

PHP за последние годы изрядно поменялся в своем синтаксисе и языковых конструкциях.

Многое было заимствовано из других языков, поэтому оставим данную заметку чтоб было где посмотреть.

# Стрелочные функции

`доступно с PHP 7.4`

- https://www.php.net/manual/ru/functions.anonymous.php
- https://www.php.net/manual/ru/class.closure.php
- https://ashallendesign.co.uk/blog/a-beginner-s-guide-to-closures-and-arrow-functions-in-php



по классике в PHP функции обычно пишут так:

```php
function add($a, $b) {
    return $a + $b;
}
```

здесь мы видим обычную функция `add` которая возвращает сумму двух аргументов передаваемых в нее.

также мы может эту функцию сделать анонимной:

```php
$add = function ($a, $b) {
    return $a + $b;
}

$add(2, 3); // outputs: 5

```



- https://codecourse.com/courses/php-arrow-functions


Пример использования:

```php
$add = fn(int $a, int $b) => $a + $b;
echo $add(2, 3); // outputs: 5
```


## Именованные аргументы PHP ( named arguments )
`PHP 8`

До их появления мы писали так:

```php
function calculatePrice(
    $net = 0,
    $raw = 0,
    $taxes = 0
) {}

// to pass only the tax it would be necessary to do this
calculationPrice(
    null,
    null,
    200
)
```

После их появления так:

```php
calculationPrice(taxes: 200);
```

> Link: https://dev.to/razielrodrigues/five-most-daily-helpers-php-8-brought-3a6b

## Деструкутризация

```php

$users = [
  ["id" => 1, "name" => "Josh"],
  ["id" => 2, "name" => "Alice"],
  ["id" => 3, "name" => "Bob"]
];

foreach ($users as ['id' => $id, 'name' => $name]) {
  echo "User ID: $id, Name: $name\n";
}
```

JIT Compiler

Attributes

Named arguments

Union Types

Match Expression


Nullsafe Operator

`$length = $obj?->getNestedObject()?->getString()?->length ?? 0;`


String and Array Improvements

```
// String improvement
if (str_contains($haystack, $needle)) {
    // Contains logic
}

// New array syntax sugar
$array = [1, 2, ...$anotherArray, 4, 5];
```

