export const portfolioData = [
  {
    id: 'spk-skripsi',
    category: 'web',
    badgeText: 'Tugas Akhir Informatika',
    techTag: 'Laravel 11',
    categoryLabel: 'Website & Sistem Informasi',
    title: 'Sistem Pendukung Keputusan Jurnal Skripsi',
    description: 'Platform manajemen skripsi dengan integrasi algoritma pencocokan dosen pembimbing dan filtering otomatis plagiarisme.',
    techSummary: 'Tech: Laravel, Tailwind, MySQL',
    gradientClasses: 'from-blue-600 to-navy',
    modalCategory: 'Website & Sistem Informasi',
    modalTech: 'Laravel 11, Tailwind CSS, MySQL, Algoritma TF-IDF',
    modalDesc: 'Penyusunan website fullstack dengan arsitektur MVC bersih, autentikasi multi-role (Mahasiswa, Dosen, Admin), dashboard visualisasi grafik chart.js, serta dokumentasi API lengkap.',
    cardMockup: {
      url: 'portal-skripsi.univ.ac.id',
      mainText: 'Sistem Rekomendasi Jurnal TF-IDF',
      subText: 'Akurat 94%'
    }
  },
  {
    id: 'unilink-uiux',
    category: 'uiux',
    badgeText: 'Studi Kasus UI/UX',
    techTag: 'Figma Prototype',
    categoryLabel: 'Mobile UI/UX Design',
    title: 'Unilink: Aplikasi Bimbingan Karir Mahasiswa',
    description: 'Perancangan end-to-end UX research, user journey, wireframe, hingga clickable prototype siap uji usability testing (SUS score 88).',
    techSummary: 'Tools: Figma, FigJam, Maze',
    gradientClasses: 'from-purple-600 to-indigo-900',
    modalCategory: 'Mobile UI/UX Design',
    modalTech: 'Figma, Design Token, Atomic Design System',
    modalDesc: 'Desain mobile app dengan 40+ flow interaktif, responsive frame iOS & Android, komponen autolayout lengkap dengan varian state hover, active, dan loading.',
    cardMockup: {
      title: 'Unilink — Campus Mentorship',
      badge: '40+ Screens',
      tags: ['Design System', 'Auto-Layout 5.0']
    }
  },
  {
    id: 'deck-skripsi',
    category: 'ppt',
    badgeText: 'Sidang Terbuka S1',
    techTag: 'PowerPoint 365',
    categoryLabel: 'Academic Presentation',
    title: 'Master Deck Sidang Skripsi Fakultas Ekonomi',
    description: 'Format infografis visual tanpa dinding teks (bullet points berlebih). Dilengkapi grafik interaktif dan catatan naskah presentasi.',
    techSummary: 'Output: .PPTX + PDF HD + Script',
    gradientClasses: 'from-emerald-600 to-teal-900',
    modalCategory: 'Academic Presentation',
    modalTech: 'PowerPoint HD 16:9, Adobe Illustrator Vector Icons',
    modalDesc: 'Penyusunan slide berstruktur: Pendahuluan, Gap Penelitian, Metodologi, Pembahasan Hasil Data, dan Kesimpulan dengan transisi morph profesional.',
    cardMockup: {
      title: 'Slide Analisis Keuangan & Pasar',
      subText: 'Animasi Smooth Morph',
      info: '22 Slides HD'
    }
  },
  {
    id: 'ml-bert',
    category: 'code',
    badgeText: 'Machine Learning',
    techTag: 'Python Jupyter',
    categoryLabel: 'Data Science & AI',
    title: 'Analisis Sentimen Twitter Algoritma BERT',
    description: 'Crawling data Twitter API, text preprocessing (stemming & tokenization), evaluasi confusion matrix, dan deployment Streamlit.',
    techSummary: 'Tech: Python, BERT, PyTorch',
    gradientClasses: 'from-amber-500 to-orange-700',
    modalCategory: 'Data Science & AI',
    modalTech: 'Python 3.11, PyTorch, Transformers BERT, Streamlit',
    modalDesc: 'Eksperimen komparasi algoritma Naive Bayes, SVM, dan IndoBERT dengan visualisasi heatmap seaborn dan laporan analisis bab 4.',
    cardMockup: {
      codeLine: 'model.evaluate(X_test, y_test)',
      accuracy: '96.8%',
      f1Score: '0.95'
    }
  },
  {
    id: 'tiket-react',
    category: 'web',
    badgeText: 'Frontend Project',
    techTag: 'React + Vite',
    categoryLabel: 'Web Application',
    title: 'Portal Tiket Kegiatan Mahasiswa',
    description: 'Single page application (SPA) dengan integrasi payment gateway Midtrans sandbox, QR code ticket scanner, dan dashboard panitia.',
    techSummary: 'Tech: React.js, Tailwind, Midtrans',
    gradientClasses: 'from-cyan-600 to-blue-900',
    modalCategory: 'Web Application',
    modalTech: 'React.js, Tailwind CSS, Axios, Midtrans Snap API',
    modalDesc: 'Frontend responsif dengan state management Zustand, validasi form Zod, dan QR Code Generator untuk absensi peserta.',
    cardMockup: {
      progress: '80%'
    }
  },
  {
    id: 'kantin-flutter',
    category: 'code',
    badgeText: 'Tugas Akhir Mobile',
    techTag: 'Flutter 3.x',
    categoryLabel: 'Mobile Development',
    title: 'Aplikasi Pesan Antar Kantin Kampus',
    description: 'Aplikasi cross-platform iOS & Android dengan fitur live order tracking, integrasi push notification, dan autentikasi OTP.',
    techSummary: 'Tech: Flutter, Dart, Firebase',
    gradientClasses: 'from-indigo-600 to-slate-900',
    modalCategory: 'Mobile Development',
    modalTech: 'Flutter 3, BLoC State Management, Firebase Realtime DB',
    modalDesc: 'Arsitektur Clean Architecture, caching offline hive, dan integrasi Google Maps API untuk tracking driver.',
    cardMockup: {
      title: 'Kantin Pintar Mobile App',
      subtitle: 'Geolocation & Firebase Realtime Order'
    }
  }
];
