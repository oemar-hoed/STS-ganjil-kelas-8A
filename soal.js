// file: soal8A.js
// Sumber: NASKAH SOAL SUMATIF MATEMATIKA SMP KELAS 8A

const bankSoal = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA TUNGGAL (10 SOAL)
  // ==========================================
  {
    id: 1,
    tipe: "pg_tunggal",
    pertanyaan: "Berdasarkan sifat perpangkatan perkalian dan pembagian bilangan berpangkat dengan basis yang sama, bentuk sederhana dari \\( \\frac{2^4 \\times 2^3}{2^5} \\) adalah...",
    opsi: ["4", "8", "2", "32"],
    jawabanBenar: 0 // Kunci: A
  },
  {
    id: 2,
    tipe: "pg_tunggal",
    pertanyaan: "Bentuk paling sederhana dari \\( \\sqrt{72} \\) adalah...",
    opsi: ["\\( 3\\sqrt{8} \\)", "\\( 6\\sqrt{2} \\)", "\\( 2\\sqrt{18} \\)", "\\( 12\\sqrt{2} \\)"],
    jawabanBenar: 1 // Kunci: B
  },
  {
    id: 3,
    tipe: "pg_tunggal",
    pertanyaan: "Bentuk baku (notasi ilmiah) dari bilangan desimal 0,0000356 adalah...",
    opsi: ["\\( 3,56 \\times 10^{-5} \\)", "\\( 3,56 \\times 10^{-4} \\)", "\\( 35,6 \\times 10^{-6} \\)", "\\( 3,56 \\times 10^5 \\)"],
    jawabanBenar: 0 // Kunci: A
  },
  {
    id: 4,
    tipe: "pg_tunggal",
    pertanyaan: "Bentuk sederhana dari operasi penjumlahan dan pengurangan bentuk akar \\( 4\\sqrt{3} + \\sqrt{108} - 2\\sqrt{27} \\) adalah...",
    opsi: ["\\( 4\\sqrt{3} \\)", "\\( 3\\sqrt{3} \\)", "\\( 2\\sqrt{3} \\)", "\\( 6\\sqrt{3} \\)"],
    jawabanBenar: 0 // Kunci: A
  },
  {
    id: 5,
    tipe: "pg_tunggal",
    pertanyaan: "Bentuk perpangkatan paling sederhana dari bentuk berikut \\( \\frac{(-6)^9 \\times (-6)^4}{(-6)^5} \\) adalah…",
    opsi: ["\\( (-6)^4 \\)", "\\( (-6)^8 \\)", "\\( (-6)^9 \\)", "\\( (-6)^{13} \\)"],
    jawabanBenar: 1 // Kunci: B
  },
  {
    id: 6,
    tipe: "pg_tunggal",
    pertanyaan: "Hasil dari operasi hitung \\( \\frac{4,2 \\times 10^8 \\times 2,0 \\times 10^{-3}}{1,4 \\times 10^3} \\) dan dinyatakan dalam bentuk baku yang valid adalah...",
    opsi: ["\\( 6,0 \\times 10^2 \\)", "\\( 6,0 \\times 10^1 \\)", "\\( 6,0 \\times 10^3 \\)", "\\( 6,0 \\times 10^4 \\)"],
    jawabanBenar: 0 // Kunci: A
  },
  {
    id: 7,
    tipe: "pg_tunggal",
    pertanyaan: "Bentuk sederhana dari ekspresi merasionalkan penyebut pecahan \\( \\frac{6}{\\sqrt{7} + \\sqrt{3}} \\) adalah...",
    opsi: ["\\( \\frac{3}{2}(\\sqrt{7} - \\sqrt{3}) \\)", "\\( 3(\\sqrt{7} - \\sqrt{3}) \\)", "\\( \\frac{3}{2}(\\sqrt{7} + \\sqrt{3}) \\)", "\\( 6(\\sqrt{7} - \\sqrt{3}) \\)"],
    jawabanBenar: 0 // Kunci: A
  },
  {
    id: 8,
    tipe: "pg_tunggal",
    pertanyaan: "Suatu jenis sel amuba membelah diri menjadi 2 setiap 20 menit. Jika pada awal pengamatan terdapat 150 amuba, banyaknya amuba setelah 2 jam adalah...",
    opsi: ["1.200 sel", "2.400 sel", "4.800 sel", "9.600 sel"],
    jawabanBenar: 3 // Kunci: D
  },
  {
    id: 9,
    tipe: "pg_tunggal",
    pertanyaan: "Sebuah berkas video berukuran 4,8 Gigabyte (\\( 4,8 \\times 10^9 \\) Byte) diunduh menggunakan jaringan internet berkecepatan \\( 2,5 \\times 10^6 \\) Byte/detik. Waktu yang dibutuhkan hingga proses unduhan selesai sepenuhnya adalah...",
    opsi: ["16 menit", "32 menit", "48 menit", "64 menit"],
    jawabanBenar: 1 // Kunci: B
  },
  {
    id: 10,
    tipe: "pg_tunggal",
    pertanyaan: "Bentuk sederhana dari pecahan bentuk akar \\( \\frac{\\sqrt{6} + \\sqrt{2}}{\\sqrt{6} - \\sqrt{2}} \\) adalah...",
    opsi: ["\\( 2 + \\sqrt{3} \\)", "\\( 2 - \\sqrt{3} \\)", "\\( 4 + 2\\sqrt{3} \\)", "\\( 3 + \\sqrt{3} \\)"],
    jawabanBenar: 0 // Kunci: A
  },

  // ==========================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 SOAL)
  // ==========================================
  {
    id: 11,
    tipe: "pg_kompleks",
    pertanyaan: "Perhatikan penyederhanaan bentuk akar berikut. Pernyataan yang BENAR adalah:",
    opsi: [
      { teks: "(1) \\( \\sqrt{45} = 3\\sqrt{5} \\)", benar: true },
      { teks: "(2) \\( \\sqrt{48} = 4\\sqrt{3} \\)", benar: true },
      { teks: "(3) \\( \\sqrt{50} = 25\\sqrt{2} \\)", benar: false },
      { teks: "(4) \\( \\sqrt{80} = 4\\sqrt{5} \\)", benar: true }
    ]
  },
  {
    id: 12,
    tipe: "pg_kompleks",
    pertanyaan: "Tentukan kesesuaian penulisan Notasi Ilmiah (Bentuk Baku) berikut yang bernilai BENAR:",
    opsi: [
      { teks: "(1) \\( 144.000.000 = 1,44 \\times 10^8 \\)", benar: true },
      { teks: "(2) \\( 0,0000085 = 8,5 \\times 10^{-6} \\)", benar: true },
      { teks: "(3) \\( 25,4 \\times 10^5 \\) merupakan bentuk baku valid", benar: false },
      { teks: "(4) \\( 0,00032 = 3,2 \\times 10^{-4} \\)", benar: true }
    ]
  },
  {
    id: 13,
    tipe: "pg_kompleks",
    pertanyaan: "Perhatikan proses merasionalkan penyebut. Manakah pernyataan yang BENAR?",
    opsi: [
      { teks: "(1) Bentuk rasional dari \\( \\frac{10}{\\sqrt{5}} \\) adalah \\( 2\\sqrt{5} \\)", benar: true },
      { teks: "(2) Bentuk rasional dari \\( \\frac{6}{3 - \\sqrt{3}} \\) adalah \\( 3 + \\sqrt{3} \\)", benar: true },
      { teks: "(3) Pasangan sekawan dari \\( (2 + \\sqrt{5}) \\) adalah \\( (2 + \\sqrt{5}) \\)", benar: false },
      { teks: "(4) Bentuk rasional dari \\( \\frac{12}{\\sqrt{3}} \\) adalah \\( 4\\sqrt{3} \\)", benar: true }
    ]
  },
  {
    id: 14,
    tipe: "pg_kompleks",
    pertanyaan: "Manakah di antara pernyataan sifat eksponen di bawah ini yang bernilai BENAR?",
    opsi: [
      { teks: "(1) \\( 3^4 \\times 3^2 = 3^6 \\)", benar: true },
      { teks: "(2) \\( 5^8 : 5^2 = 5^4 \\)", benar: false },
      { teks: "(3) \\( (2^3)^4 = 2^{12} \\)", benar: true },
      { teks: "(4) \\( 4^0 = 0 \\)", benar: false }
    ]
  },
  {
    id: 15,
    tipe: "pg_kompleks",
    pertanyaan: "Sebuah elemen pemanas memiliki hambatan \\( R = 4 \\times 10^2 \\ \\Omega \\) dialiri arus listrik \\( I = 5 \\times 10^{-1} \\) Ampere selama \\( t = 2 \\times 10^3 \\) detik. Menggunakan rumus energi listrik \\( W = I^2 \\cdot R \\cdot t \\), analisis yang BENAR adalah:",
    opsi: [
      { teks: "(1) Nilai \\( I^2 = 2,5 \\times 10^{-1} = 0,25 \\)", benar: true },
      { teks: "(2) Besar energi listrik yang dihasilkan adalah \\( 2,0 \\times 10^5 \\) Joule", benar: true },
      { teks: "(3) Jika dinyatakan dalam kiloJoule (kJ), energi tersebut bernilai 200 kJ", benar: true },
      { teks: "(4) Besar energi listrik tersebut adalah \\( 2,0 \\times 10^4 \\) Joule", benar: false }
    ]
  },

  // ==========================================
  // BAGIAN III: URAIAN / ESSAY (5 SOAL)
  // ==========================================
  {
    id: 16,
    tipe: "uraian",
    pertanyaan: "Sederhanakan operasi penjumlahan dan pengurangan bentuk akar berikut:<br> \\( 3\\sqrt{12} + 2\\sqrt{75} - \\sqrt{147} \\)"
  },
  {
    id: 17,
    tipe: "uraian",
    pertanyaan: "Rasionalkan penyebut dari pecahan bentuk akar berikut:<br> a. \\( \\frac{12}{\\sqrt{6}} \\) <br> b. \\( \\frac{2\\sqrt{5}}{\\sqrt{10}} \\)"
  },
  {
    id: 18,
    tipe: "uraian",
    pertanyaan: "Nyatakan besaran-besaran berikut ke dalam bentuk baku (notasi ilmiah) yang valid:<br> a. Luas daratan benua: 14.800.000 km²<br> b. Muatan dasar proton: 0,00000000000000000016 Coulomb<br> c. Hasil pembagian: \\( \\frac{3,6 \\times 10^{12}}{1,2 \\times 10^{-4}} \\)"
  },
  {
    id: 19,
    tipe: "uraian",
    pertanyaan: "Sinyal gelombang radio dikirimkan dari wahana antariksa di planet Neptunus ke stasiun penerima di Bumi dengan jarak \\( 4,5 \\times 10^9 \\) km. Gelombang radio merambat dengan kecepatan cahaya \\( 3,0 \\times 10^5 \\) km/detik.<br> a. Hitung waktu tempuh sinyal dalam satuan detik (tulis dalam notasi ilmiah)!<br> b. Konversikan waktu tempuh tersebut ke dalam satuan jam!"
  },
  {
    id: 20,
    tipe: "uraian",
    pertanyaan: "Suatu segitiga siku-siku ABC siku-siku di titik C. Diketahui panjang hipotenusa AB = 25 cm dan panjang salah satu sisi tegaknya AC = 24 cm. Berapa panjang sisi BC?"
  }
];