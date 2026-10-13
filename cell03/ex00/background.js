function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById('bgButton');

button.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});
