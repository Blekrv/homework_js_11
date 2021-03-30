let car = function (mark, model, year, speed) {
  return {
    mark: mark,
    model: model,
    year: year,
    speed: speed,
  };
};
let bmw = car("BMW", "X7", 2021, 150);
show(bmw);
time(bmw, 1500);

function show(car) {
  for (key in car) {
    console.log(key, ":", car[key]);
  }
}
function time(car, distance) {
  return console.log(
    Math.floor(
      (Math.floor(distance / car.speed) / 4 + distance / car.speed) * 100
    ) /
      100 +
      " hours"
  );
}
// Task 2
function drob(x, y) {
  return {
    chysel: x,
    znam: y,
  };
}
let drob_1 = drob(1, 4);
let drob_2 = drob(2, 3);
let drobTestShort = drob(25, 100);
// Додавання
function addition(obj_1, obj_2) {
  if (obj_1.znam == obj_2.znam) {
    zna = obj_2.znam;
    chys = obj_1.chysel + obj_2.chysel;
  } else {
    zna = obj_1.znam * obj_2.znam;
    chys1 = obj_2.chysel * obj_1.znam;
    chys2 = obj_1.chysel * obj_2.znam;
    chys = chys1 + chys2;
  }

  return (drob_4 = drob(chys, zna));
}
// Віднімання
function subtraction(obj_1, obj_2) {
  if (obj_1.znam == obj_2.znam) {
    zna = obj_2.znam;
    chys = obj_1.chysel - obj_2.chysel;
  } else {
    zna = obj_1.znam * obj_2.znam;
    chys1 = obj_2.chysel * obj_1.znam;
    chys2 = obj_1.chysel * obj_2.znam;
    chys = chys1 - chys2;
  }
  return (drob_3 = drob(chys, zna));
}
// Множення
function multiplication(obj_1, obj_2) {
  chys = obj_1.chysel * obj_2.chysel;
  zna = obj_1.znam * obj_2.znam;
  return (drob_5 = drob(chys, zna));
}
// Ділення
function division(obj_1, obj_2) {
  chys = obj_1.chysel * obj_2.znam;
  zna = obj_1.znam * obj_2.chysel;
  return (drob_6 = drob(chys, zna));
}
// Скорочення
function shortSighted(obj) {
  (M = obj.chysel), (N = obj.znam);
  for (var i = 2; i <= obj.chysel; i++) {
    if (obj.chysel % i === 0 && obj.znam % i === 0)
      (M = obj.chysel / i), (N = obj.znam / i);
  }
  return (drob_7 = drob(M, N));
}

let drob_add = addition(drob_1, drob_2);
console.log(drob_add);
let drob_sub = subtraction(drob_1, drob_2);
console.log(drob_sub);
let drob_mult = multiplication(drob_1, drob_2);
console.log(drob_mult);
let drob_div = division(drob_1, drob_2);
console.log(drob_div);
let drob_short = shortSighted(drobTestShort);
console.log(drob_short);

// Task 3
function clock(hours, minutes, seconds) {
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    show: function () {
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    addHours: function (hours) {
      this.hours += hours;
      if (this.hours >= 24) {
        this.hours = this.hours - 24;
      }
    },
    addMinutes: function (minutes) {
      this.minutes += minutes;
      if (this.minutes >= 60) {
        this.addHours(Math.floor(this.minutes / 60));
      }
      this.minutes %= 60;
    },
    addSeconds: function (seconds) {
      this.seconds += seconds;
      if (this.seconds >= 60) {
        this.addMinutes(Math.floor(this.seconds / 60));
      }
      this.seconds %= 60;
    },
  };
}
let realTime = clock(20, 17, 10);
realTime.show();
realTime.addSeconds(360);
realTime.show();
realTime.addMinutes(109);
realTime.show();
realTime.addHours(3);
realTime.show();
