
# RadioGuide voor Triple.
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Mediahuis, via Triple, wil graag een website waarop mensen hun favoriete radioprogramma's kunnen volgen en de tijdlijnen vergelijken om altijd te weten wie er wanneer presenteert.


Met deze RadioGuide kan je:


Wisselen tussen verschillende programma’s


Klikken op de cards voor meer informatie (is nog geen detail pagina voor gemaakt maar de buttons hebben wel al een hover effect)


Switchen van dagen en radiostations


Een tijdsindicatie zien die meeloopt met de huidige tijd


Een weekoverzicht en een overzicht van alle zenders per dag zien.
## Beschrijving



### Responsive


<img width="443" height="485" alt="mobile" src="https://github.com/user-attachments/assets/42f0a3d9-0c5f-4d2a-b14f-253804fb0930" />
<img width="515" height="437" alt="web" src="https://github.com/user-attachments/assets/3bd6f751-a01a-4a59-a81f-ac7cd8f0e1fb" />

Mijn breakpoints staan op 670px, Vanaf daar was er genoeg ruimte voor de header om de nav naast elkaar te staan, en 1100px, vanaf daar was er genoeg ruimte om de afspeler naast de radioguide te zetten.

### Toegankelijk

Voor de toegankelijkheid heb ik op verschillende vlakken van de WCAG richtlijnen getest. ik heb de website met een screenreader gestest, hier kwam uit dat de screenreader alleen de naam van de shows en welke tijd die show afspeelt opnoemt maar de rest niet. Met de tab knopjes om te zien of alles te bereiken is, helaas zijn er een aantal dingen waar hij op focust die niet te zien zijn. Ik heb ook de headingsmap goed bijgehouden en heb meerdere keren tijden het coderen de HTML validator gebruikt.


### Huisstijl
<img width="1520" height="863" alt="huisstijlvb2" src="https://github.com/user-attachments/assets/05e97061-febd-4500-933a-74ed7b535faf" />

Ik heb geprobeert om als huisstijl zo veel mogelijk te houden aan de layout van de Veronica, 100%NL en SLAM! websites maar met de kleuren de website toch neutraal te houden.

### Interactief


https://github.com/user-attachments/assets/73a20ba2-f2c8-4a94-a2ac-ee2b560b3ff9


Mijn interactie is de tijdlijn die meeloopt met de echte tijd en wanneer de pagina geladen wordt scrollt de tijdlijn gelijk into view.


### Performance


<img width="1903" height="862" alt="confettie2" src="https://github.com/user-attachments/assets/d5aa0b10-12e7-4ee2-81d1-be101121604f" />

Voor de performance heb ik gezorgd dat de lighthouse test 100 scoorde door de lettertypes te preloaden in de HTML, en door de afleelding in de afspeler een hogere priority te geven tijdens het laden.


### dark mode

<img width="1896" height="861" alt="darkmode" src="https://github.com/user-attachments/assets/c54afa17-65c3-4891-9e3e-173d76eed10e" />

Ik heb ook een prefers-color-scheme: dark toegevoegd aan de website ook om wat meer kleuren te gebruiken.


## Kenmerken
### Ademruimte en inspringen
Ik gebuik zelf 4 spaties en laat genoeg ruimete tussen verschillende elementen als die niet bij elkaar horen.

https://github.com/Kayleighhhhh/the-startup-responsive-interactive-website/blob/39edc0b10a6ff41c19bb586ee04ac3dfe139bd1a/index.html#L27-L38

### Volgorde en nesten van CSS selectors
Mijn CSS bestand houd bijna de zelfde volgorde aan als het HTML bestand, het enige verschil is dat er bovenin de root met alle variables staat en daar onder alle h1, h2, h3..enz omdat ik daar gelijk alle lettergroote en lettertypes aan meegegevn heb. verder staan de duidelijke categorieen genest, niet alles staat genest om het overzicht wel te houden.

https://github.com/Kayleighhhhh/the-startup-responsive-interactive-website/blob/770827741a9cefb9f50663cfef0476319069bdc5/styles/styles.css#L336-L351

### Nesten van media queries
Ik ben mobile first begonnen en heb daarna met media queries sommige onderdelen aangepast. ik heb dit gedaan door de media queries te nesten in de onderdelen die aangepast moeten worden.

https://github.com/Kayleighhhhh/the-startup-responsive-interactive-website/blob/770827741a9cefb9f50663cfef0476319069bdc5/styles/styles.css#L288-L303

### Naamgeving
ik gebruik engelse en nederlandse namen en namen die logish zijn voor mij zoals de naam van het album dat op de afbeelding staat.

https://github.com/Kayleighhhhh/the-startup-responsive-interactive-website/blob/aa983626973860e5e6ba39d45c1813f2efb0154c/index.html#L67-L70




## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


