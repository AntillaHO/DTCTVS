// Formular abschicken und Warnung anzeigen
document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // Modal anzeigen
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
});

// Checkbox aktivieren/deaktivieren des Weiter-Buttons
const checkbox = document.getElementById('checkbox');
const confirmBtn = document.getElementById('confirmBtn');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        confirmBtn.disabled = false;
    } else {
        confirmBtn.disabled = true;
    }
});

// Bestätigen und Weiterleitung
confirmBtn.addEventListener('click', function() {
    window.location.href = "Emailpostfach.html"; // Leitet zur Emailfach.html weiter
});
