# Dependencies
npm install react-script



### Wissenswertes
React useEffect() braucht die leeren eckigen Klammern am Ende, für Abhängigkeiten auch, wenn keine vorhanden sind. 
```javascript
useEffect(() => {
  // Dieser Code läuft nur einmal, nach dem ersten Rendern
}, []); // Leere Abhängigkeiten
```
Folgendes ist hier unerwünscht, da mein kostenloser API key bei zuvielen Requests einfach gesperrt werden könnte.
``` javascript
useEffect(() => {
  // Läuft bei jedem Rendern der Komponente
});
```

