function randomizer(randomizer) {
  let random = {
    0: "A certain victory",
    1: "not so certain victory",
    2: "an uneasy victory",
  };
  for (const key in random) {
    if (key == randomizer) {
      return `your fate is ${random[key]}`;
    }
  }
  return `Your fate is unclear, ô chosen undead`;
}
console.log(randomizer(9));
