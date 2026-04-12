document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const envelopeView = document.getElementById("envelope-view");
    const invitationView = document.getElementById("invitation-view");

    envelope.addEventListener("click", () => {
        envelope.classList.add("open");

        setTimeout(() => {
            envelopeView.classList.add("hidden");

            invitationView.classList.remove("hidden");

            setTimeout(() => {
                invitationView.classList.add("visible");
            }, 50);
            
        }, 1600);
    });
});