// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
// 2. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
// 3. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
// 4. Pretvori svoj objekt u JSON string.

let newCar = {
  make: "Smart",
  color: "blue",
  doorNum: 2,
  batteryCapacity: 17.5 * 100,
  energyConsumptionRate: 13.3,
  carRange: function () {
    let range = this.batteryCapacity / this.energyConsumptionRate;
    return range.toFixed(2);
  },
};

for (let key in newCar) {
  console.log(`${key} : ${newCar[key]}`);
}

console.log(
  `Car make is ${newCar.make} with ${newCar.color} color, have ${
    newCar.doorNum
  } doors and have range of ${newCar.carRange()} km.`
);

let newCarPrint = JSON.stringify(newCar);
console.log(newCarPrint);

Object.defineProperty(auto, "kretanje", { enumerable: false });