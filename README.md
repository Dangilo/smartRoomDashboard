# Smart Room Dashboard

1. [Einführung](#introduction)
2. [Techstack](#techstack)
3. [Projektaufbau](#projektaufbau)
4. [Wie starte ich das Dashboard?](#start)
5. [Konfiguration](#Konfigurationen)
 
## Einführung <a name="introduction"></a> 
Das Projekt stellt ein Dashboard für den Smart Room der FH Wedel da. Es ist zeigt ausgewählte Webseiten an und erlaubt Interaktionen mit diesen. Hierdurch ist für Besucher und Nutzer des Smart Rooms ein einfacher Überblick über die Funktionen des Smart Rooms gegeben. 

## Techstack <a name="techstack"></a>

- [Nextjs](https://nextjs.org/docs/getting-started) als Framework für serverseitig gerenderte React Apps
- [React](https://reactjs.org/) als Javascript Bibliothek für Benutzeroberfächen
- [MaterialUI](https://material-ui.com/)
- JavaScript
- CSS
- [NPM](https://www.npmjs.com/) als Paketmanager (Alternativ kann auch [YARN](https://yarnpkg.com/) genutzt werden.)

## Projektaufbau <a name="projektaufbau"></a>
Für das Projekt gibt es drei wichtige Ordner. 
1. Components
	Enthält wiederverwendbare Komponenten. Im diesem Projekt liegen dort das Layout und der Header. Das Layout sorgt 		dafür, das von überall aus auf z.B. die Primär und Sekundär Farben zugegriffen werden kann. Der Header unterscheidet zwischen den Seiten und ändert sich dementsprechend.	
2. Pages
	Im Pages Ordner sind, wie der Name schon vermuten lässt, die einzelnen Seiten vertreten. `Index.js` ist standardmäßig die Startseite. `dashboard.js` öffnet sich, wenn ein Element auf der Startseite ausgewählt wird. In `_app.js` werden zudem die SCSS Dateien importiert.
3. Public
	Der Public Ordner enthält alle Statischen Komponenten (Bspw. Bilder). In diesem Projekt liegen dort die SCSS Dateien, sowie die `urls.js` die die konfigurierbaren URLs enthält.

In der `Package.json` sind zudem alle Abhängigkeiten enthalten. Diese können über `npm install` bei Bedarf erweitert werden.


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
	 
### Starten für den Dauerbetrieb<a name="dauerbetrieb"></a>

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

Im Development Modus kann es passieren, dass nicht alle CSS Dateien vor dem Start geladen werden. Dies hat zu Folge, dass die Pfeile vom Karussell verrutschen. Im Produktionsmodus (`npm start`) kann dies aber nicht passieren, da das Projekt vorher gebaut wird (siehe [Starten für den Dauerbetrieb](#dauerbetrieb)).

## Konfigurationen <a name="configuration"></a> 

#### URLs konfigurieren
Die URLs, die auf dem Dashboard angezeigt werden können unter `public/urls.js` angepasst werden. Diese können beliebig geändert und erweitert werden. 

```JavaScript
static items = [  
    {
	    url: "http://192.168.178.38:1880/ui/#!/0?socketid=ErzmKfwOANkECKcHAAAF",
	    description: "Dashboard"  
	},  
	{
		url: "http://wiki.stec.fh-wedel.de/",
		description: "STEC WIKI"  
	},  
	{
		url: "http://192.168.178.38:1880/#flow/6fff9a44.41d484",
		description: "Node-Red Flow"  
	},  
	{
		url: "http://www.fh-wedel.de",
		description: "FH Wedel"  
  }  
];
```


#### Individuellen Port wählen

In der `Package.json` kann der Port, auf dem der Server erreichbar ist geändert werden. Gibt man diesen nicht explizit an, ist es der Port 3000.  Hierzu können die Befehle `dev` und `build` um den Parameter `-p PORTNUMMER` erweitert werden.

```Json
"scripts": {  
  "dev": "next dev -p 8080",  
  "build": "next build",  
  "start": "next start -p 80"  
},
```