const countries = ["Indonesia", "Malaysia", "Singapura", "Brunei", "Filipina", "Kamboja", "Amerika Serikat", "Inggris", "Timor Leste"];

function cariNegara(countryName) {
  const result = countries.find((country) => country.toLowerCase().includes(countryName.toLowerCase()));
  return result ? "Ada" : "Tidak Ada";
}

console.log("Cari Negaramu disini : ");
console.log(cariNegara("Malaysia")); // output: Ada
console.log(cariNegara("indo")); // output: Ada
console.log(cariNegara("singapur")); // output: Ada
console.log(cariNegara("jepang")); // output: Tidak Ada
