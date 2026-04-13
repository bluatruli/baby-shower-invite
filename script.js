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
            
        }, 2600);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    const hiddenElements = document.querySelectorAll('.fade-in-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
});