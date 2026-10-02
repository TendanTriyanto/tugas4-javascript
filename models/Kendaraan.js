export default class Kendaraan {
    constructor(merk, model, tahun, hargaSewaPerHari) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.hargaSewaPerHari = hargaSewaPerHari;
        this.statusDisewa = false;
    }

    getInfoKendaraan() {
        return `${this.tahun} ${this.merk} ${this.model} (Rp ${this.hargaSewaPerHari.toLocaleString()} / hari)`;
    }
}
