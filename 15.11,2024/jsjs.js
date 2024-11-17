let Password = "amjilt_the_best";
let success = false;
let a = 0;

while (a < 5) {
  let num = prompt("пароль жазыңыз");
  a++;

  if (num == Password) {
    alert("пароль дұрыс");
    success = true;
    break;
  } else {
    alert("пароль қате");
  }
}

if (!success) {
  alert("Too many attempts");
}
