
const global = ['resume', 'letter']; if (global.some(path => window.location.pathname.includes(path))) {document.getElementsByTagName("html")[0].lang = 'en';};
const lokal = ['kerja', 'lamaran', 'contoh', 'surat', 'cara', 'indonesia', 'gambar', 'id', 'video']; if (lokal.some(path => window.location.pathname.includes(path))) {document.getElementsByTagName("html")[0].lang = 'id';};
