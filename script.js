
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const switchBtn = document.getElementById('switchBtn');

// Set lampu awal (Merah nyala, lainnya mati)
red.style.backgroundColor = 'red';
let current = 'red';

function switchLight() {
    if (current === 'red') {
        // Dari Merah pindah ke Hijau
        red.style.backgroundColor = '#444';
        yellow.style.backgroundColor = '#444';
        green.style.backgroundColor = 'green';
        current = 'green';
    } else if (current === 'green') {
        // Dari Hijau pindah ke Kuning
        green.style.backgroundColor = '#444';
        yellow.style.backgroundColor = 'yellow';
        red.style.backgroundColor = '#444';
        current = 'yellow';
    } else if (current === 'yellow') {
        // Dari Kuning kembali ke Merah
        yellow.style.backgroundColor = '#444';
        red.style.backgroundColor = 'red';
        green.style.backgroundColor = '#444';
        current = 'red';
    }
}
switchBtn.addEventListener('click', switchLight);

