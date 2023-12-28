function submitForm() {
    var kodeInput = document.getElementById('kodeInput').value;
    var barangInput = document.getElementById('barangInput').value;

    
    console.log("Kode: " + kodeInput);
    console.log("Banyaknya Barang: " + barangInput);
    
}

function calculateTotal() {
    var kodeSelect = document.getElementById('kodeSelect');
    var selectedOption = kodeSelect.options[kodeSelect.selectedIndex];
    var barangInput = document.getElementById('barangInput').value;

    if (barangInput === "") {
        alert("Masukkan banyaknya barang terlebih dahulu.");
        return;
    }

    var harga = getHargaByKode(selectedOption.value);
    var totalHarga = harga * barangInput;

    var uangBayar = prompt("Total Harga yang Harus Dibayar: " + totalHarga + "\nMasukkan Jumlah Uang yang Dibayarkan:");

    if (uangBayar === null) {
        return;
    }

    uangBayar = parseFloat(uangBayar);

    if (isNaN(uangBayar)) {
        alert("Masukkan jumlah uang yang valid.");
        return;
    }

    var kembalian = uangBayar - totalHarga;

    alert("Terima kasih! Kembalian Anda: " + kembalian.toFixed(2));
}

function getHargaByKode(kode) {
    switch (kode) {
        case "001":
            return 10000; 
        case "002":
            return 20000; 
        case "003":
            return 30000; 
        default:
            return 0;
    }
}


