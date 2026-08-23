# Gym Tracker

App web per fer seguiment dels entrenaments al gimnàs: rutines, sèries/repeticions, pesos, suggeriments de progressió i gràfics d'evolució. Pensada per substituir la llibreta de paper.

**Demo:** https://albert-ka.github.io/gym_tracker/

Totes les dades es guarden **només al teu dispositiu** (al navegador), no s'envien a cap servidor.

## Funcionalitats

- **Rutines**: crea rutines i afegeix-hi exercicis amb sèries, repeticions objectiu i increment de pes personalitzat. Marca un exercici com a "pes corporal" (fondos, dominades...) per no haver-hi de registrar pes.
- **Registrar**: tria la data i la rutina, i anota les repeticions i el pes fets a cada sèrie. L'app et suggereix el pes de partida a partir de la sessió anterior (si vas completar totes les sèries, et proposa pujar pes).
- **Progrés**: per cada exercici, gràfic del 1RM estimat (fórmula d'Epley) o de repeticions totals (exercicis de pes corporal), amb una predicció simplificada basada en una corba logarítmica de progressió.
- **Historial**: totes les sessions registrades, com una llibreta digital, amb opció d'esborrar-ne alguna si t'equivoques.
- **Còpia de seguretat**: exporta i importa totes les dades en un fitxer JSON (a la pestanya Historial), per si canvies de mòbil o esborres dades del navegador.
- Icones pròpies per exercici, instal·lable com a app al mòbil (PWA) i funciona sense connexió un cop carregada.

## Ús bàsic

1. Obre la app i ves a **Rutines** per revisar o editar els exercicis (ja hi ha una rutina d'exemple "Body sculpt").
2. Abans d'entrenar, ves a **Registrar**, tria la data i la rutina.
3. Per cada exercici, omple les repeticions i el pes fets a cada sèrie (l'app ja suggereix un pes de partida).
4. Prem **Desar sessió**.
5. Consulta **Historial** per veure totes les sessions passades, o **Progrés** per veure l'evolució i la predicció d'un exercici concret.
6. De tant en tant, fes una **còpia de seguretat** des d'Historial (botó "Exportar dades").

## Instal·lar-la al mòbil

Obre la URL amb Chrome (Android) → menú (⋮) → **"Instal·la l'aplicació"**. Queda a la pantalla d'inici amb icona pròpia i s'obre a pantalla completa.

## Desenvolupament / desplegament

L'app és un únic fitxer `index.html` (HTML + CSS + JS, amb Chart.js incrustat, sense dependències externes) més els fitxers de suport per a la instal·lació com a PWA:

```
docs/
├── index.html          — l'aplicació
├── manifest.json        — metadades de la PWA (nom, icones, colors)
├── service-worker.js    — cache offline
├── icon-192.png
├── icon-512.png
└── icon-512-maskable.png
```

Es serveix amb **GitHub Pages** des de la carpeta `docs/` de la branca `main` (Settings → Pages).

## Llicència

Ús personal.
