document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        let valid = true;

        // Réinitialisation des messages d'erreur
        document.querySelectorAll(".error").forEach(err => err.style.display = "none");

        // Récupération des valeurs
        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const sexe = document.querySelector("input[name='sexe']:checked");
        const cp = document.getElementById("cp");
        const email = document.getElementById("email");
        const sujet = document.getElementById("sujet");
        const question = document.getElementById("commentaire");
        const accept = document.getElementById("accept");

        // Validation
        if (nom.value.trim() === "") {
            showError(nom, "Veuillez entrer votre nom.");
            valid = false;
        }

        if (prenom.value.trim() === "") {
            showError(prenom, "Veuillez entrer votre prénom.");
            valid = false;
        }

        if (!sexe) {
            showError(document.getElementById("sexe_f"), "Veuillez sélectionner votre sexe.");
            valid = false;
        }

        if (!/^[0-9]{5}$/.test(cp.value)) {
            showError(cp, "Le code postal doit contenir 5 chiffres.");
            valid = false;
        }

        if (email.value.trim() === "" || !email.checkValidity()) {
            showError(email, "Veuillez entrer un email valide.");
            valid = false;
        }

        if (sujet.value === "") {
            showError(sujet, "Veuillez sélectionner un sujet.");
            valid = false;
        }

        if (question.value.trim().length < 10) {
            showError(question, "Votre question doit contenir au moins 10 caractères.");
            valid = false;
        }

        if (!accept.checked) {
            showError(accept, "Vous devez accepter les conditions.");
            valid = false;
        }

        // Empêche l'envoi si erreur
        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(element, message) {
        let error = element.nextElementSibling;

        if (!error || !error.classList.contains("error")) {
            error = document.createElement("div");
            error.classList.add("error");
            element.insertAdjacentElement("afterend", error);
        }

        error.textContent = message;
        error.style.display = "block";
    }

});
