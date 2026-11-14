VARIABLES
n,i: ENTIERS
DEBUT 
i = 1
POUR i ← 1 à n
AFFICHER i
FIN POUR
FIN


VARIABLES
n: ENTIER
DEBUT
i = 1
POUR i ← 1 à n
SI i % 2 = 0 ALORS
AFFICHER i
FIN SI 
FIN POUR
FIN


VARIABLES
n, somme: ENTIER
DEBUT
i = 1
SOMME: n
POUR i ← 1 à n
SOMME ← somme + i
FIN POUR
RETOURNER somme
FIN


VARIABLES
n, produit: ENTIER 
DEBUT
produit = 1
POUR i ← 1 à n
Produit ← produit * i
FIN POUR
RETOURNER produit

VARIABLES
n, i, nombre: ENTIER 
DEBUT
AFFICHER " entrer "
LIRE n
nombre ← 0
POUR i ← 1 à n
   SI i % 2 == 0 ALORS
       nombre ← nombre + 1
     FIN SI
    FIN POUR
    RETOURNE nombre
  FIN     


VARIABLES
n, i : ENTIER
tableau: TABLEAU
DEBUT
AFFICHER "tableau"
LIRE n
tableau ← []
 POUR i ← 1 à n FAIRE
AJOUTER (n * i) à tableau 
 FIN POUR
RETOUNER tableau
FIN

VARIABLES
n, limite, i : ENTIER
tableau : TABLEAU
AFFICHER "tableau"
LIRE n
DEBUT
tableau ← []
i ← n
  TANT QUE i <= limite FAIRE
  AJOUTER i À tableau
   i ← i + n
 FIN TANT QUE
RETOURNER tableau
FIN