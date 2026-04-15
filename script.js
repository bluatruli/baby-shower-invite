document.addEventListener("DOMContentLoaded", () => {
    const steamer = document.getElementById("steamer");
    const envelopeView = document.getElementById("envelope-view");
    const invitationView = document.getElementById("invitation-view");

    steamer.addEventListener("click", () => {
        steamer.classList.add("open");

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

    // --- APPLE CALENDAR (.ICS) GENERATOR ---
const calendarBtn = document.getElementById('calendar-btn');

if (calendarBtn) {
    calendarBtn.addEventListener('click', () => {

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Vega Baby Shower//ES
BEGIN:VEVENT
UID:babyshower-heidy@invitation.com
DTSTAMP:20260101T000000Z
DTSTART:20260516T230000Z
DTEND:20260517T040000Z
SUMMARY:Vega Baby Shower
LOCATION:3527 47TH ST\\, San Diego\\, CA 92105
DESCRIPTION:https://my.babylist.com/baby-reg-heidy-molina
END:VEVENT
END:VCALENDAR`;

            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                
            if (isIOS) {
                window.location.href = "data:text/calendar;charset=utf8," + encodeURIComponent(icsContent);
            } else {
                const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'Baby_Shower_Heidy.ics'; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }
});