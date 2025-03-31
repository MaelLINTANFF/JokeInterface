"use strict"; 

async function FonctionBlague() {
    try {
        // Récupère une blague aléatoire de l'API de Chuck Norris
        let response = await fetch('https://api.chucknorris.io/jokes/random');
        let data = await response.json(); // Convertit la réponse en JSON
        let blague = data.value; // Récupère la valeur de la blague

        // Traduit la blague en français avec la fonction BlagueTraduite
        let BlagueTraduite = await translateJoke(blague, "fr");

        // Affiche la blague traduite dans l'élément HTML avec l'ID "blague"
        document.getElementById("blague").innerText = BlagueTraduite    ;
    } catch (error) {
        // Si ya une erreur (par exemple un problème de connexion) : affiche un message d'erreur
        document.getElementById("blague").innerText = "Erreur lors de la récupération ou de la traduction de la blague.";
    }
}

// Fonction pour traduire la blague  en francais (ici "fr" pour le français)
async function translateJoke(blague, Langue) {
    try {
        // Envoie la blague à l'API de traduction (MyMemory) pour la traduire
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(blague)}&langpair=en|${Langue}`);
        const data = await response.json(); // Convertit la réponse en JSON

        // Retourne le texte traduit ou un message d'erreur si la traduction échoue
        return data.responseData?.translatedText || "Erreur de traduction.";
    } catch (error) {
        // En cas d'erreur de traduction, retourne un message d'erreur
        return "Erreur de traduction.";
    }
}
