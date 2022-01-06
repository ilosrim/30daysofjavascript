// Tezlik cheklovi 70 km/soat
// Har 5 km/soat ucgun 1 point
// 12 point - 'Guvohnoma olib qo'yiladi

const SPEED_LIMIT = 70;
const KM_PER_POIN = 5;

const speedCheck = (speed) => {
  if (speed < SPEED_LIMIT)
    console.log("OK");
  else {
    let points = Math.floor((speed - SPEED_LIMIT) / KM_PER_POIN);
    if (points >= 12)
      console.log("Guvohnoma olib qo'yiladi!");
    else
      console.log(points);
  }
}
let speedTest = speedCheck(130)