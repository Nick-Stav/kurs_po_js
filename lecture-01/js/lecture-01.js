nextPrime:
for (var i = 2; i <= 100; i++) {

  for (var a = 2; a < i; a++) {
    if (i % a == 0) continue nextPrime;
  }

  console.log( i + " - Делители этого числа: 1 и " + i); // простые числа
}
