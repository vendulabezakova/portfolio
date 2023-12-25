// script.js
document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault(); // Zabraňuje přirozenému odeslání formuláře

    const form = event.target;
    const formData = new FormData(form);

    // AJAX požadavek na Formspree
    const xhr = new XMLHttpRequest();
    const url = form.action;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            const response = JSON.parse(xhr.responseText);

            // Zde můžete zpracovat odpověď od Formspree
            console.log(response);

            // Případně můžete přesměrovat uživatele na jinou stránku nebo zobrazit potvrzení
            if (response.success) {
                alert("Zpráva byla odeslána. Děkujeme!");
                form.reset(); // Vymazání formuláře
            } else {
                alert("Odeslání zprávy selhalo. Zkuste to znovu.");
            }
        }
    };

    xhr.send(formData);
};
