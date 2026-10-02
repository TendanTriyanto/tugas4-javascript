export default class SistemManajemenTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanPelangganAktif() {
        console.log("\n=== DAFTAR PELANGGAN YANG SEDANG MENYEWA KENDARAAN ===");

        const pelangganAktif = this.daftarPelanggan.filter(p => p.kendaraanDisewa !== null);

        if (pelangganAktif.length === 0) {
            console.log("Tidak ada pelanggan yang sedang menyewa kendaraan saat ini.");
            return;
        }

        pelangganAktif.forEach((pelanggan, index) => {
            console.log(`${index + 1}. Nama: ${pelanggan.nama}`);
            console.log(`   No. Telepon: ${pelanggan.nomorTelepon}`);
            console.log(`   Kendaraan  : ${pelanggan.kendaraanDisewa.getInfoKendaraan()}`);
            console.log("--------------------------------------------------");
        });
    }
}