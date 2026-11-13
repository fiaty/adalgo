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
AFFICHER " entrer
LIRE n
nombre ← 0
POUR i ← 1 à n
   SI i % 2 == 0 ALORS
       nombre ← nombre + 1
     FIN SI
    FIN POUR
    RETOURNE nombre
  FIN     


