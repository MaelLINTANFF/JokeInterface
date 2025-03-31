"use strict";

async function FonctionBlague() {
    try {
        let response = await fetch('https://api.chucknorris.io/jokes/random');
        let data = await response.json();
        let blague = data.value;
        let translatedJoke = await translateJoke(blague, "fr");
        document.getElementById("blague").innerText = translatedJoke;
    } catch (error) {
        document.getElementById("blague").innerText = "Erreur lors de la récupération ou de la traduction de la blague.";
    }
}

async function translateJoke(blague, targetLang) {
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(blague)}&langpair=en|${targetLang}`);
        const data = await response.json();
        return data.responseData?.translatedText || "Erreur de traduction.";
    } catch (error) {
        return "Erreur de traduction.";
    }
}
