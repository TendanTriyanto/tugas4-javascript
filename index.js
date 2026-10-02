import Mobil from './models/Mobil.js';
import Pelanggan from './models/Pelanggan.js';
import SistemManajemenTransportasi from './Sistem.js';

const sistem = new SistemManajemenTransportasi();

const mobil1 = new Mobil("Toyota", "Avanza", 2022, 350000, 4);
const mobil2 = new Mobil("Honda", "Brio", 2023, 300000, 4);

const pelanggan1 = new Pelanggan("Budi Santoso", "081234567890");
const pelanggan2 = new Pelanggan("Siti Aminah", "089876543210");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(mobil2);

sistem.tampilkanPelangganAktif();
