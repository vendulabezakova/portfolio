const submitForm = () => {
    // Získání hodnot z formuláře
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validace nebo další manipulace s daty může být provedena zde

    // Odeslání e-mailu
    const mailtoLink =
        "mailto:vendula.bezakova@gmail.com" +
        "?subject=" + encodeURIComponent("Nová zpráva od " + name) +
        "&body=" + encodeURIComponent("Jméno: " + name + "\nE-mail: " + email + "\n\n" + message);

    // Otevření e-mailového klienta
    window.location.href = mailtoLink;
};