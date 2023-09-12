function CapitalDisplayer() {
  let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
  let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];
  for (i = 0; i < countries.length; i++) {
    console.log(`the capitale of ${countries[i]} is ${capital[i]}`);
  }
}
CapitalDisplayer();
