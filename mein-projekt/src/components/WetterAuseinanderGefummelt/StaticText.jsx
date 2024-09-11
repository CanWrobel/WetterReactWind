import React from "react";

const StaticText = () => {
    return (
        <div>
            <h4>Wettervorhersage für Berlin in der Übersicht</h4>
            <p>Hallo ich habe diese App geschrieben, weil ich gerne im voraus wissen möchte, ob es sich lohnt mit dem Fahrrad zu fahren oder Tischtennisschläger mitzunehmen.&nbsp;</p>
            <p>Winde von unter 15 km/Std halte ich für tolerabel. Daher werden diese gelb markiert</p>
            <p>Winde von unter 10 km/Std halte ich für optimal. Daher werden diese grün markiert.&nbsp;</p>
            <p>Man bekommt genaue Wetterdaten immer 3-Stunden-Weise. Ganz oben findet ihr den aktuellsten Eintrag für das momentane Wetter (Blaue große Ansicht). Darunter die verbleibenden Vorhersagen für den laufenden Tag.&nbsp;</p>
            <p>Für die folgenden Tage ist die große Vorschau auf den Nachmittag ausgelegt (wegen Feierabend).&nbsp; &nbsp;<br></br></p>
            <p>Meine Daten decken sich mit denen von OMW, da ich diese auch von dort ancurle:<br></br><a href="https://openweathermap.org/city/2950159" target="_blank" >Berlin bei Openweathermap</a><br></br></p>
            <p>Edit: Google hat bereits ein doodle, das den Wind für die 3 Stunden Vorhersage anzeigt, aber nur für den einen ausgewählten Tag&nbsp;<a href="https://www.google.com/search?q=wetter+berlin" target="_blank">https://www.google.com/search?q=wetter+berlin</a></p>
        </div>
    );
};

export default StaticText;