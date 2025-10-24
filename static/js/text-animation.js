document.addEventListener('DOMContentLoaded', function () {
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = ["Data", "Enterprise Data", "Automation", "Pandas", "Coffee"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(typedTextSpan) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            }
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(typedTextSpan) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            }
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length && typedTextSpan) setTimeout(type, newTextDelay + 250);
});