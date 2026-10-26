/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "2810";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Sayangku";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Real Love",             // ← GANTI JUDUL LAGU
    artist: "SKYLINE",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "ngl one smile from you and my whole day just gets so much better." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you're literally the reason my heart feels this full, no cap." },
  { file: "img3.jpeg", caption: "every single sec with you is hands down my fave." },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you, fr." },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into something this beautiful, idk how." },
  { file: "img6.jpeg", caption: "my heart genuinely feels safest whenever it's with you." },
  { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"happy birthday, sayangkuuu 🤍",
"hari ini, salah satu hari yang paling aku syukuri, karena di tanggal ini seseorang yang begitu berarti buat aku dilahirkan ke dunia. seseorang yang kehadirannya perlahan mengubah banyak hal dalam hidup ku, yang tanpa sadar menjadi bagian dari doa-doa ku, dari rencana masa depan, dan dari alasan kenapa aku ingin menjadi seseorang yang lebih baik setiap harinya.",
"di hari ulang tahun kamu kali ini, aku berharap semoga dunia bisa lebih lembut sama kamu. semoga hal-hal baik selalu menemukan jalan untuk datang ke hidup kamu, semoga setiap langkah yang kamu ambil didekatkan dengan keberhasilan, dan semoga semua doa yang selama ini kamu simpan diam-diam bisa satu per satu menjadi kenyataan. kalau suatu hari semua terasa berat, aku harap kamu selalu punya cukup kekuatan untuk bertahan, dan kalau kamu lelah, semoga kamu selalu ingat kalau kamu nggak harus menghadapi semuanya sendirian.",
"sayanggg, kalau boleh aku menitipkan satu harapan di antara semua doa ku buat kamu, aku berharap semoga ulang tahun kamu kali ini bukan cuma menjadi awal dari usia yang baru, tapi juga awal dari banyak kebahagiaan yang akan kita rayakan bersama. aku mau melihat kamu tumbuh, mengejar semua mimpi kamu, meraih hal-hal yang selama ini kamu inginkan, dan menjadi versi terbaik dari diri kamu. dan di setiap proses itu, aku berharap aku masih menjadi seseorang yang kamu pilih untuk berjalan di samping kamu.",
"aku tau, mencintai seseorang bukan berarti kita akan selalu punya hari-hari yang mudah. mungkin nanti akan ada perbedaan, kesalahpahaman, keadaan yang nggak sesuai harapan, bahkan masa-masa ketika kita sama-sama lelah. tapi aku berharap, sesulit apa pun keadaan yang akan kita hadapi nanti, kita nggak mudah menyerah untuk satu sama lain. semoga kita selalu punya alasan untuk bertahan, keberanian untuk saling memahami, kerendahan hati untuk meminta maaf, dan hati yang cukup luas untuk terus memaafkan.",
"aku nggak bisa menjanjikan kalau hubungan kita akan selalu sempurna, tapi aku ingin terus belajar mencintai kamu dengan cara yang lebih baik. aku mau kita bukan cuma menjadi dua orang yang saling mencintai hari ini, tapi juga dua orang yang tetap memilih satu sama lain ketika waktu mengubah banyak hal. semoga rasa kita nggak berhenti di kata-kata manis, tapi tumbuh menjadi kesetiaan, kepercayaan, tanggung jawab, dan kesungguhan untuk membangun masa depan bersama.",
"dan entah akan seperti apa kehidupan kita beberapa tahun dari sekarang, aku berharap semoga nama kita masih ada dalam doa satu sama lain. semoga suatu hari nanti kita bisa melihat ke belakang, mengingat semua hal yang pernah kita lewati, lalu tersenyum karena ternyata kita berhasil bertahan sejauh ini. aku pengen suatu hari nanti, hal-hal yang sekarang cuma bisa kita ceritakan sebagai mimpi, berubah menjadi kenyataan yang bisa kita nikmati bersama. bukan cuma merayakan ulang tahun, tapi juga merayakan pencapaian, melewati kesulitan, membangun rumah yang penuh kehangatan, dan menua bersama sebagai dua orang yang nggak pernah berhenti memilih satu sama lain.",
"terima kasih karena sudah hadir dalam hidup ku, karena sudah menjadi seseorang yang begitu berarti, dan karena sudah memberikan aku kesempatan untuk mengenal cinta melalui diri kamu. kalau ada satu hal yang ingin terus aku usahakan, itu adalah membuat kamu merasa bahwa kamu dicintai, dihargai, didengarkan, dan nggak sendirian dalam menjalani hidup ini.",
"selamat bertambah usia, perempuan kesayangan ku. semoga umur kamu dipenuhi keberkahan, hati kamu dipenuhi ketenangan, langkah kamu dipenuhi kemudahan, dan masa depan kamu dipenuhi hal-hal indah yang bahkan belum pernah kamu bayangkan.",
"dan untuk kita, semoga semesta selalu memberi kita kesempatan untuk terus tumbuh bersama. semoga jarak, waktu, keadaan, dan segala ujian yang mungkin datang nggak membuat kita lupa kenapa kita memulai semuanya. semoga kita selalu menemukan jalan untuk kembali satu sama lain, bukan karena kita nggak punya pilihan lain, tapi karena setelah mengenal banyak hal tentang dunia, kita tetap ingin menjadikan satu sama lain sebagai rumah.",
"i love you, more than these words could ever explain. aku nggak tahu seberapa jauh perjalanan kita nanti, tapi selama kita masih sama-sama ingin memperjuangkan hubungan ini, aku mau terus berjalan bersama kamu. semoga hari ini, tahun depan, bertahun-tahun setelahnya, dan di setiap ulang tahun yang masih menunggu di depan sana, aku masih menjadi orang yang mengucapkan selamat ulang tahun, juga bisa peluk kamu, dan bersyukur karena tuhan masih mengizinkan aku buat mencintai orang yang sama.",
"happy birthday, my favorite person. semoga semua hal baik menemukan kamu, semoga semua mimpi kamu menemukan jalannya, dan semoga pada akhirnya, setelah semua perjalanan panjang yang kita lalui, kita benar-benar sampai di masa depan yang selama ini kita doakan bersama. bukan cuma menjadi bagian dari cerita indah satu sama lain, tapi menjadi akhir dari pencarian panjang kita tentang rumah, ketenangan, dan cinta yang ingin kita jaga seumur hidup.",
"i hope it's always you and me, until the very end 🤍"

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "where it all started",
    text:  "that exact moment when everything just clicked, dan tiba-tiba semuanya mulai make so much sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the quiet days",
    text:  "literally cuma kamu, aku, and those lil simple moments yang ternyata ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through the storms",
    text:  "we've had our rough patches fr, ada badai dan chaos juga, but somehow kita selalu find our way back to each other.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "finding the light",
    text:  "you're genuinely the brightest part of my whole journey, yang selalu bikin everything feels a little lighter even when things get heavy.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "may this year give you all the calm of the ocean, dan sedalam itu juga hati kamu yang selalu penuh dengan kindness, fr." },
  { icon: "shell",   text: "hope your days stay this bright, kayak sun yang mantul di atas water, and your nights tetap peaceful seperti tide yang pelan-pelan balik ke laut." },
  { icon: "star",    text: "may every lil wish kamu pelan-pelan come true, exactly when you need it the most, no cap." },
  { icon: "compass", text: "wherever this year takes you, i hope kamu selalu find your way back to the people who genuinely care and adore you." },
  { icon: "anchor",  text: "stay grounded, stay grateful, and tbh tetap jadi kamu yang sekarang — beautiful in your own way, always." },
  { icon: "heart",   text: "happy birthday istg — cheers buat another year penuh memories yang bakal selalu worth keeping." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6282190422878";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);