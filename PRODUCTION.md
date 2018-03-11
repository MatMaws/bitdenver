# Mise en production

Non on ne vous a pas menti, nous n'allons pas mettre votre application en production sur l'internet #GrandMère. Il s'agit plutôt ici de vous donnez des consignes pour une bonne mise en production avec Meteor.

## Le client peut modifier la base ???
Vous ne vous êtes pas demandé si c'était logique que nous arrivions à modifier la base de données du serveur depuis notre client google chrome ??

Vous imaginez vous laisser cette "fonctionnalité" en prod ? Ça serait la porte ouverte à toute les fenêtre comme dirai Platon.

En fait meteor nous permet de manipuler la base de données du serveur depuis le client pour des raisons de simplicité pendant les devs mais une fois que vous voulez mettre en prod, il va falloir enlelver ça.


Comment ça marche ? En fait c'est tout simple, il y'a deux packages dans votre projet qui permettent de faire tous çà et il suffit de les enlever pour pouvoir mettre en production.

Executez juste les commandes
```
meteor remove insecure
```
et
```
meteor remove autopublish
```

et vous êtes enfin prêt à mettre en prod !

Pour ceux qui se sont dis
> Mais c'est nul, si à chaque fois je dois remove les packages avant de mettre en prod et les remettre quand je veux dev !!

À cela je répondrai
[![Taisez vouuuuus !](https://media1.tenor.com/images/c16daa1b7c891ae9dcedb4d96d57d6ff/tenor.gif?itemid=10479320)](http://www.youtube.com/watch?v=9TKC27K8cIo)

Dieu à inventé l'intégration continue à votre avis pourquoi ?
Pour faciliter la mise en prod bien joué Jean-Maubeuge !
Donc vous mettez ces deux commandes dans votre job Jenkins ou Travis et vous allez manger un Kebab. Merci, Aurevoir.

# Le mot de la fin
J'espère que la vidéo vous a plus, si c'est le cas, n'hésitez pas à lacher un gros PÔCE BLO et à mettre un commentaire (sous entendu une bonne notes hein SIVOPLÉÉÉ), quand à nous on vous dis à la prochaine une nouvelle vidéo, c'étais MatMaws, OVER !

# Le vrai mot de la fin
Kebab.


