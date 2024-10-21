// Emails mit dynamischen Namen
const emails = {
    1: {
        sender: 'Martin Maisarm',
        subject: 'Anweisungen',
        body: `
            <p>Guten Tag,</p>
            <p>Bitte folgen Sie den folgenden Anweisungen genau:</p>
            <ul>
                <li>Besorgen sie sich zugang zum <a href="Zeitungsartikelifno.html">Zeitungsartikel</a></li>
                <li>Lesen sie sich das Verhör-Protokoll von Herrn Dbübel durch</li>
                <li>Verschaffen sie sich zugang zum geheimen video des Verdächtigen Herrn Dübel</li>
            </ul>
            <p>Bei weiteren Fragen wenden Sie sich direkt an mich.</p>
            <p>Mit freundlichen Grüßen,<br><a href="Akte_Martin_Maisarm.html">Martin Maisarm</a></p>
        `
    },
    2: {
        sender: 'Kommissar Obermeyer',
        subject: 'Willkommen im Team',
        body: `
            <p>Schönen Guten Tag Ermittler <strong>{{nachname}}</strong>,</p>
            <p>Wir freuen uns, Sie in unserem Team begrüßen zu dürfen. Die nächsten Tage werden aufregend und intensiv, aber ich bin sicher, dass Sie eine wertvolle Bereicherung sein werden.</p>
            <p>Ich stehe Ihnen jederzeit zur Verfügung, falls Sie Fragen haben.</p>
            <p>Herzlich willkommen und auf gute Zusammenarbeit!</p>
            <p>Mit besten Grüßen,<br><a href="Akte_Obermeyer.html">Kommissar Obermeyer</a></p>
        `
    },
    3: {
        sender: 'Kommissar Obermeyer',
        subject: 'Ermittlungsstand',
        body: `
            <p>Guten Tag,</p>
            <p>Hier ist der aktuelle Stand der Ermittlungen:</p>
            <ul>
                <li><a href="Akte_Dübel.html">Alexander Dübel</a> wurde vernommen, keine neuen Erkenntnisse. </li>
                 <li><a href="Dübel_Verhör.html">Zum Verhör-protokoll</a> </li>
                <li>Der Verdächtiger befindet sich weiterhin in Untersuchungshaft.</li>
                <li>Die Analyse der Beweismittel wird morgen fortgesetzt.</li>
            </ul>
            <p>Wir werden die Lage weiterhin beobachten und Sie auf dem Laufenden halten.</p>
            <p>Mit freundlichen Grüßen,<br><a href="Akte_Obermeyer.html">Kommissar Obermeyer</a></p>
        `
    }
};

// Funktion zum Abrufen des Benutzernamens aus localStorage
const firstname = localStorage.getItem('firstname') || 'Benutzer';
const lastname = localStorage.getItem('lastname') || 'Benutzer';

// E-Mail-Anzeige aktualisieren, wenn eine E-Mail ausgewählt wird
document.querySelectorAll('.email-item').forEach(item => {
    item.addEventListener('click', function() {
        const emailId = this.getAttribute('data-email-id');
        const email = emails[emailId];

        // Setze den dynamischen Nachnamen in den E-Mail-Text ein
        let emailBody = email.body.replace(/{{nachname}}/g, lastname);

        document.getElementById('email-display').innerHTML = `
            <h3>${email.subject}</h3>
            <p><strong>Von:</strong> ${email.sender}</p>
            <div>${emailBody}</div>
        `;

        // Markiere die E-Mail als gelesen
        this.classList.remove('unread');
    });
});
