# Smart Room Dashboard

## Inhaltsverzeichnis
1. [Einführung](#introduction)
2. [Techstack](#techstack)
3. [Wie starte ich das Dashboard?](#start)
4. [Konfiguration](#Konfigurationen)

 - Einführung (wozu das ganze?)
 - Tech stack
 - wo liegt was?
 - starten der Anwendung inkl. zugriff
 - neues Element hinzufügen
 - Projektaufbau

## Einführung <a name="introduction"></a> 
Das Projekt stellt ein Dashboard für den Smart Room der FH Wedel da. Es ist zeigt ausgewählte Webseiten an und erlaubt Interaktionen mit diesen. Hierdurch ist für Besucher und Nutzer des Smart Rooms ein einfacher Überblick über die Funktionen des Smart Rooms gegeben. 

## Techstack <a name="techstack"></a>

- [Nextjs](https://nextjs.org/docs/getting-started) als Framework für serverseitig gerenderte React Apps
- [React](https://reactjs.org/) als Javascript Bibliothek für Benutzeroberfächen
- [Typescript](https://www.typescriptlang.org/) als Typenbasierte JavaScript Erweiterung
- CSS

## Wie starte ich das Dashboard?<a name="techstack"></a>

### Voraussetzungen:

 - Git Projekt lokal geclont 
 - Administrator Rechte auf dem System
 - Akutelle NPM version ( update mit `npm install -g npm` )
	 ```Bash
	 npm install -g npm
	 ```
 - Aktuelle Node.js Version, die Version kann mit folgenden Befehlen auf den neusten Stand gebracht werden
	 ```Bash
	 #NPM cache löschen
	 sudo npm cache clean -f
	 
	 #n (verwaltet die NODE Version) installieren
	 sudo npm install -g n
	 
	 #die letzte stabile Version installieren
	 sudo n stable
	 ```
	 
### Starten für den Dauerbetrieb

Für den Start im Dauerbetrieb, muss das Projekt zu erst gebaut und dann gestartet werden. Hierzu wechselt man im Terminal auf den Projektpfad und nutzt folgende 
Befehle:

```Bash
#Projekt bauen:
npm run build

#Projekt starten:
npm run start 
```

Das Dashboard ist jetzt standardmäßig unter Port 3000 erreichbar. 


### Starten während der Entwicklung

Während der Entwicklung gibt Next.js die Möglichkeit, den Sever mit einer "Hot-Reload" Funktion zu starten. Dies hat den Vorteil, dass Änderungen am Projekt direkt sichtbar werden, ohne das neu gebaut werden muss.

```bash
#starten des Server im Entwicklungsmodus
npm run dev
```

## Konfigurationen <a name="configuration"></a> 

#### Neue Seiten hinzufügen

#### Individuellen Port wählen

In der Package.json kann der Port, auf dem der Server erreichbar ist geändert werden. Gibt man diesen nicht explizit an, ist es der Port 3000.  Hierzu können die Befehle `dev` und `build` um den Parameter `-p PORTNUMMER` erweitert werden.

```Json
"scripts": {  
  "dev": "next dev -p 8080",  
  "build": "next build",  
  "start": "next start -p 80"  
},
```