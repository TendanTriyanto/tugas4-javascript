export default class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        if (kendaraan.statusDisewa) {
            console.log(`Maaf, ${kendaraan.getInfoKendaraan()} sedang disewa oleh orang lain.`);
            return;
        }

        this.kendaraanDisewa = kendaraan;
        kendaraan.statusDisewa = true;
        console.log(`Transaksi Berhasil: ${this.nama} berhasil menyewa ${kendaraan.getInfoKendaraan()}.`);
    }

    kembalikanKendaraan() {
        if (this.kendaraanDisewa) {
            console.log(`Transaksi Selesai: ${this.nama} telah mengembalikan ${this.kendaraanDisewa.getInfoKendaraan()}.`);
            this.kendaraanDisewa.statusDisewa = false;
            this.kendaraanDisewa = null;
        } else {
            console.log(`${this.nama} tidak sedang menyewa kendaraan apa pun.`);
        }
    }
}