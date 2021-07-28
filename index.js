function generateNumberSequence(maxStore = 250){
  let store = 0
  while(store <= maxStore) {
    yield store++
    
  }
}
const iter = generateNumberSequence(10)

for (const num of iter) {
  console.log(num);
}
