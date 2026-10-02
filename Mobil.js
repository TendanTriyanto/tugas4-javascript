import Kendaraan from './Kendaraan.js';

export default class Mobil extends Kendaraan {
    constructor(merk, model, tahun, hargaSewaPerHari, jumlahPintu) {
        super(merk, model, tahun, hargaSewaPerHari);
        this.jumlahPintu = jumlahPintu;
    }
}