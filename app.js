//console.log("Any string");

let pronoun = ["My", "You", "Her", "Our", "Their", "his"];
let adj = ["angry", "excited", "attractive", "awake", "asleep", "beautiful"];
let noun = ["army", "jury", "team", "house", "athlete", "garden"];

for (let countPronoun = 0; countPronoun < pronoun.length; countPronoun++) {

    for (let countAdj = 0; countAdj < adj.length; countAdj++) {

        for (let countNoun = 0; countNoun < noun.length; countNoun++){

            console.log(pronoun[countPronoun] + adj[countAdj] + noun[countNoun] + ".com");
        }
    } 
} 