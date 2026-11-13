const grand = Array.from(
    {length: 100000},
  (_, i) => i
);


const petit =[3, 6, 4, 2, 2]

const rechercherDoublonLent = (tableau) => {
    

    for (let i=0; i < tableau.length; i++){
        let n = tableau[i];
        for (let j=i+1; j <tableau.length; j++){
            if (n=== tableau[j]){
                console.log((i+1)*j);
                return true
            }
        }
    }
    return false;
}
const rechercheDoublonRapide = (tableau) => {
    let valeur = {};

    for (let i=0; i < tableau.length; i++) {
        let n = tableau[i];
        if(valeur[tableau[i]] === true)  {
            console.log(1);
            return true;
        } else {
            valeurs[n] = true;
        }
    }
}

console.time("rechercheDoublonNaiveLent");
console.log(rechercherDoublonLent(petit));
console.timeEnd("rechercheDoublonNaiveLent");

console.time("rechercheDoublonPetit");
console.log(rechercherDoublonLent(petit));
console.timeEnd("rechercheDoublonPetit");

console.time("rechercheDoublonNaive");
console.log(rechercherDoublonLent(grand));
console.timeEnd("rechercheDoublonNaive");

console.time("rechercheDoublonRapide");
console.log(rechercherDoublonLent(grand));
console.timeEnd("rechercheDoublonRapide");