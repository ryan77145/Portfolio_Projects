function initTracking() {
    const domain = window.location.hostname;
    document.addEventListener("click", function(e) {
        const link = e.target.closest("a");
        const button = e.target.closest("button");
        if (link) {
            const href = link.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
            const isExternal = href.startsWith("http") && !href.includes(domain);
            if (isExternal) {
                gtag("event", "external_link_click", {
                    link_url: href,
                    link_text: link.innerText.trim() || "(no text)"
                });
            } else {
                gtag("event", "internal_link_click", {
                    link_url: href,
                    link_text: link.innerText.trim() || "(no text)"
                });
            }
        }
        if (button) {
            gtag("event", "button_click", {
                button_id: button.id || "(no id)",
                button_text: button.innerText.trim() || "(no text)"
            });
        }
    });
}

function loadGA(withCookies) {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-23E6CKPGSD";
    script.async = true;
    script.onload = function() {
        initTracking();
    };
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-23E6CKPGSD', {
        'anonymize_ip': true,
        'storage': withCookies ? 'granted' : 'none',
        'client_storage': withCookies ? 'granted' : 'none'
    });
}

function checkCookie() {
    const banner = document.querySelector(".cookieBanner");
    if (document.cookie.includes("cookieConsent=yes")) {
        banner.style.display = "none";
        loadGA(true);
    } else if (document.cookie.includes("cookieConsent=no")) {
        banner.style.display = "none";
        loadGA(false);
    } else {
        banner.style.display = "block";
        loadGA(false);
    }
}
