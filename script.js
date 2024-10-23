const whatsappNumber = "+62895398194010";
const message = "Pacaran YUK!!!";

function moveButton(button) {
    const container = document.querySelector('.container');
    const maxWidth = container.clientWidth - button.clientWidth;
    const maxHeight = container.clientHeight - button.clientHeight;

    const newX = Math.random() * maxWidth;
    const newY = Math.random() * maxHeight;

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

document.getElementById('yes-button').addEventListener('click', () => {
    alert("SERIUS NIHHHH?");
    openWhatsApp();
});

const noButton = document.getElementById('no-button');

// Pindahkan tombol saat di-click
noButton.addEventListener('click', function() {
    moveButton(this);
});

// Pindahkan tombol saat di-hover
noButton.addEventListener('mouseover', function() {
    moveButton(this);
});

function openWhatsApp() {
    const encodedMessage = encodeURIComponent(message);
    let url;

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Untuk mobile
        url = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
    } else {
        // Untuk desktop
        url = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    }

    window.open(url, '_blank');
}
