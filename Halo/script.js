// File: script.js
function showMessage() {
    document.getElementById('pesan').style.display = 'block';
}
function showMessage() {
    // Menampilkan pesan pertama
    alert("Aku sangat sayang padamu!");

    // Menampilkan pesan tambahan setelah pesan pertama
    setTimeout(function() {
        alert("Aku tak pernah tahu kebahagiaan sejati hingga kamu datang ke dalam hidupku. Terima kasih telah menjadi cahaya dalam hari-hariku. Semoga setiap hari membawa kebahagiaan yang tak terhingga!");
    }, 500); // Pesan tambahan muncul setelah 0,5 detik
}
