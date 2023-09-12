function saisonFinder(Month) {
  let saisons = {
    autmn: ["september", "october", "november"],
    winter: ["december", "january", "February"],
    spring: ["march", "april", "may"],
    summer: ["june", "july", "august"],
  };

  for (elem in saisons) {
    for (elem2 of saisons[elem]) {
      if (elem2 == Month.toLowerCase()) {
        return `you are in ${elem} saison`;
      }
    }
  }
  return `rewrite correctly the month that you put , It doesn't exist `;
}
console.log(saisonFinder("roror"));
