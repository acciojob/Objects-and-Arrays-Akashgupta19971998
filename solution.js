const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team=players
let team1=team.copyWithin()
let cap1=JSON.parse(JSON.stringify(person));


// export {players,person,team,team1,cap1}
console.log(team)
console.log(team1)
console.log(cap1)