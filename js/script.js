document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tempForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah form refresh halaman

        const celsiusInput = document.getElementById('celsius').value; // Ambil nilai input
        const celsius = parseFloat(celsiusInput); // Konversi input ke angka desimal

        // Debug: Periksa apakah input berhasil diambil
        console.log('Celsius:', celsius);

        // Validasi apakah input adalah angka
        if (isNaN(celsius)) {
            alert('Masukkan nilai suhu yang valid.');
            return;
        }

        // Logika konversi Celsius ke Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;

        // Debug: Periksa apakah konversi berjalan dengan benar
        console.log('Fahrenheit:', fahrenheit);

        // Tampilkan hasil konversi di halaman
        resultDiv.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    });
});
