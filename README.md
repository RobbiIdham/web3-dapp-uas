UAS Pemrograman web web3 fullstack

Nama   : Robbi Idham Fawaid
NIM    : 241111079
Matkul : Pemrograman Web
Kelas  : Informatika C

Deskripsi
ini merupakan web sederhana yang terintegrasi dengan blockchain etherium. aplikasi ini dibuat untuk memenuhi tugas ujian akhir semester (UAS) mata kuliah pemrograman web.
aplikasi ini berjalan di local dan fungsi dari aplikasi ini adalah :
1. menghubungkan wallet metamask menampilkan status connect dan menampilkan alamat address
2. Melihat dan menampilkan saldo ETH
3. melakukan simulasi donasi melalui smartcontract dengan sepolia testnet
4. menampilkan data dummy dari backend
5. responsive mobile dan destop

Alat yang digunakan :
1. Frontend
   - React
   - Tailwind CSS
   - ether,js
   - MetaMask
2. Backend
   - Node.js
   - Express.js
   - CORS
   - REST API
3. Blockchain
   - Solidity
   - Etherium Sepolia Testnet
   - Remix IDE

Struktur Folder

web3-dapp-uas/
│
├── frontend/
│ └── src/
│ ├── components/
│ │ ├── WalletConnect.js
│ │ └── TransactionList.js
│ ├── App.js
│ └── index.js
│
├── backend/
│ └── server.js
│
├── smart-contracts/
│ └── DonationContract.sol
│
└── README.md

untuk menjalankan backend
1. node server.js
2. diconsole.log akan muncul Backend running on http://localhost:5000 (tanda backend berjalan dengan baik)
3. cek di browser http://localhost:5000 (akan muncuk data dummy yang sebelumnya sudah diset di server.js)

untuk menjalakan frontend 
1. npm start
2. cek di browser htttp://localhost:3000

menghubungkan ke metamask
1. install extension metamask yang ada di browser (chrome)
2. buat akun metamask dan login
3. pastkan jaringan di sepolia testnet
4. pastikan ada saldo untuk melakukan tes di remix (untuk mendapatkan saldo gratis klaim di google clode etherium sepolia faucet)
5. klik tombol connect metamask di app
6. setelah berasil alamat address dan saldo ETH akan muncul


pengujian smartcontract 
disini untuk pengujian dilakukan di remix IDE
1. buka website remix IDE
2. login menggunakan akun github
3. buat smart conract dengan nama DonationContract.sol
4. Code sesuai dengan instruksi yang ada di soal UAS
5. setelah itu compile
6. setelah berhasil dicompile deploy dan run pada jaringan sepolia
7. menguji fungsi donate() dengan mengirim ETH
8. mengecek perubahan state dan event yang dihasilkan

fungsi donate() berhasil menyimpan data donasi dan event yang sesuai
sebelum berhasil berjalan sempat terjadi eror yaitu pada jumlah saldo yang akan dikirim pada state dan event, awal percobaan menggunakan event 1 state other dan di wallet membaca 1 sedangkan saldo sepolianya kurang dari 1.
untuk mengatasi hal tersebut ganti state other menjadi finney setelah itu donate() ulang. ketika menggunakan event 1 dan state finney ini value akan terbaca : 10000000000000000 setara dengan 0.01 pada sepolia testnet.

desain responsive mobile dan destop
UI aplikasi menggunakan tailwind css, layout dirancang menggunakan grid dan breakpoint sehingga tampilan dapat menyesuaikan dengan ukuran mobile dan destop.

Kesimpulan
App berhasil mengimplementasikan konsep web fullstactk yang terintegrasi dengan blockchain, fitur REST API, koneksi wallet, smartcontract, dan desain responsive berjalan dengan baik.

