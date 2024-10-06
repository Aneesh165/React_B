let string = "cabab";

let counts = {};
let positions = {};
let nrpositions = [];


for (let i = 0; i < string.length; i++) {
  let char = string[i];
  counts[char] = (counts[char] || 0) + 1;

  if (!positions[char]) {
    positions[char] = [];
  }
  positions[char].push(i);
  
}

// console.log(counts);

// console.log(positions);


for (let char in counts) {
  if (counts[char] === 1) {
    nrpositions.push(...positions[char]);
  }
}

nrpositions.length > 0 ? console.log(nrpositions) : console.log("-1");
