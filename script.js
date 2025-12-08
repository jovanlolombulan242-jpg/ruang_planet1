// Objek tata surya lengkap (Matahari, 8 planet, Bulan, Pluto)
const OBJECTS = [
  {
    id: "sun",
    name: "Matahari",
    type: "Bintang",
    color: "#ffcc33",
    orbitRadius: 0,
    overview: "Matahari adalah bintang tipe-G berurutan utama yang terletak di pusat Tata Surya. Bintang ini terdiri dari plasma panas, utamanya hidrogen dan helium. Energi yang dipancarkan berasal dari proses **fusi nuklir** (mengubah hidrogen menjadi helium) di intinya. Energi inilah yang menopang hampir semua kehidupan di Bumi. Massa Matahari menyumbang sekitar **99.8% dari total massa Tata Surya**, bertindak sebagai pusat gravitasi yang mengikat semua objek di orbitnya.",
    data: [
      { label: "Diameter", value: "1.39 juta km" },
      { label: "Massa", value: "1.99 × 10^30 kg" },
      { label: "Suhu permukaan", value: "5.500 °C" },
      { label: "Usia", value: "~4.6 miliar tahun" },
    ],
    facts: [
      "Lebih dari 99% massa tata surya berada pada Matahari.",
      "Energi berasal dari fusi hidrogen menjadi helium di inti.",
      "Matahari adalah bintang tipe-G deret utama."
    ],
    tagline: "Jantung tata surya."
  },
  {
    id: "mercury",
    name: "Merkurius",
    type: "Planet",
    color: "#bfbfbf",
    orbitRadius: 60,
    overview: "Merkurius adalah planet terkecil dan terdekat dari Matahari, dengan orbit tercepat (88 hari Bumi). Permukaannya penuh **kawah tumbukan** mirip Bulan. Karena hanya memiliki eksosfer yang sangat tipis (bukan atmosfer sejati), ia tidak dapat memerangkap panas, mengakibatkan **variasi suhu ekstrem**; mencapai 430 °C di siang hari dan turun hingga -180 °C pada malam hari. Rotasinya sangat lambat, dengan satu hari Merkurius sekitar 59 hari Bumi.",
    data: [
      { label: "Diameter", value: "4.879 km" },
      { label: "Periode orbit", value: "88 hari" },
      { label: "Gravitasi", value: "3.7 m/s²" },
      { label: "Satelit alami", value: "0" },
    ],
    facts: [
      "Permukaannya penuh kawah, mirip Bulan.",
      "Rotasi lambat membuat siang/malam sangat panjang.",
      "Planet tercepat dalam mengelilingi Matahari."
    ],
    tagline: "Kecil tapi cepat."
  },
  {
    id: "venus",
    name: "Venus",
    type: "Planet",
    color: "#ffb86b",
    orbitRadius: 90,
    overview: "Venus, 'kembaran' Bumi dalam ukuran, memiliki kondisi yang ekstrem. Ia diselimuti oleh **atmosfer tebal yang kaya karbon dioksida**, menciptakan **efek rumah kaca yang tak terkendali**. Ini menjadikannya planet **terpanas** (suhu rata-rata ~465 °C), cukup panas untuk melelehkan timah. Venus menunjukkan **rotasi retrograde** (berputar ke belakang) yang sangat lambat; satu hari Venus (rotasi, 243 hari Bumi) lebih lama dari satu tahun Venus (orbit, 225 hari Bumi).",
    data: [
      { label: "Diameter", value: "12.104 km" },
      { label: "Periode orbit", value: "225 hari" },
      { label: "Suhu rata-rata", value: "465 °C" },
      { label: "Satelit alami", value: "0" },
    ],
    facts: [
      "Rotasi retrograde—berlawanan arah dengan planet lain.",
      "Awan kaya asam sulfat menutupi permukaan.",
      "Planet terpanas karena efek rumah kaca ekstrem."
    ],
    tagline: "Cantik, ganas."
  },
  {
    id: "earth",
    name: "Bumi",
    type: "Planet",
    color: "#6ae3ff",
    orbitRadius: 120,
    overview: "Bumi adalah planet ketiga dan satu-satunya tempat yang diketahui menampung **kehidupan**. Hal ini didukung oleh keberadaan **air cair** (71% permukaan), atmosfer beroksigen, dan inti luar cair yang menghasilkan **medan magnet** kuat (magnetosfer) untuk melindungi dari angin matahari. Proses geologis seperti lempeng tektonik aktif dan siklus air memainkan peran penting dalam menjaga kestabilan iklim dan permukaan.",
    data: [
      { label: "Diameter", value: "12.742 km" },
      { label: "Periode orbit", value: "365 hari" },
      { label: "Satelit alami", value: "1 (Bulan)" },
      { label: "Gravitasi", value: "9.81 m/s²" },
    ],
    facts: [
      "Sekitar 71% permukaan Bumi tertutup air.",
      "Memiliki lempeng tektonik aktif dan medan magnet pelindung.",
      "Inti luarnya cair, menghasilkan medan magnet."
    ],
    tagline: "Rumah kita."
  },
  {
    id: "moon",
    name: "Bulan",
    type: "Satelit",
    color: "#d9d9d9",
    orbitRadius: 130,
    overview: "Bulan adalah satelit alami Bumi yang kelima terbesar. Diyakini terbentuk dari puing-puing tabrakan raksasa. Permukaannya terdiri dari dataran gelap (*maria*) dan wilayah yang lebih terang, berkawah (*terrae*). **Gaya gravitasi** Bulan adalah penyebab utama terjadinya **pasang surut** air laut di Bumi. Bulan memiliki rotasi dan periode orbit yang sama (*tidally locked*), sehingga kita selalu melihat sisi yang sama dari Bumi.",
    data: [
      { label: "Diameter", value: "3.474 km" },
      { label: "Periode orbit", value: "27 hari" },
      { label: "Gravitasi", value: "1.62 m/s²" },
      { label: "Atmosfer", value: "Sangat tipis (eksosfer)" },
    ],
    facts: [
      "Permukaan dipenuhi kawah akibat tumbukan meteoroid.",
      "Selalu menunjukkan sisi yang sama ke Bumi (*tidally locked*).",
      "Gaya gravitasinya menyebabkan pasang surut di laut Bumi."
    ],
    tagline: "Teman setia Bumi."
  },
  {
    id: "mars",
    name: "Mars",
    type: "Planet",
    color: "#fb7185",
    orbitRadius: 150,
    overview: "Mars, atau **Planet Merah**, adalah planet terestrial keempat. Warna khasnya berasal dari **besi oksida (karat)** di permukaannya. Mars adalah rumah bagi **Olympus Mons** (gunung berapi tertinggi) dan **Valles Marineris** (ngarai raksasa). Bukti geologis menunjukkan Mars **pernah memiliki air cair** di masa lalu. Ia memiliki dua satelit alami kecil: Phobos dan Deimos.",
    data: [
      { label: "Diameter", value: "6.779 km" },
      { label: "Periode orbit", value: "687 hari" },
      { label: "Satelit alami", value: "2 (Phobos, Deimos)" },
      { label: "Gravitasi", value: "3.71 m/s²" },
    ],
    facts: [
      "Debu besi oksida memberi warna kemerahan.",
      "Jejak masa lalu menunjukkan pernah ada air cair.",
      "Memiliki gunung berapi tertinggi, Olympus Mons."
    ],
    tagline: "Merah yang memanggil."
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Planet",
    color: "#fbbf24",
    orbitRadius: 200,
    overview: "Jupiter adalah planet **terbesar**, raksasa gas dengan massa dua kali lipat massa gabungan semua planet lain. Atmosfernya didominasi hidrogen dan helium, dicirikan oleh pita awan dan badai raksasa, termasuk **Great Red Spot**. Jupiter memiliki **medan magnet sangat kuat** dan lebih dari 79 satelit, termasuk empat satelit Galilea: Io, Europa, Ganymede, dan Callisto. Ganymede adalah satelit terbesar di Tata Surya.",
    data: [
      { label: "Diameter", value: "139.820 km" },
      { label: "Periode orbit", value: "12 tahun" },
      { label: "Satelit alami", value: ">79" },
      { label: "Gravitasi", value: "24.79 m/s²" },
    ],
    facts: [
      "Medan magnet sangat kuat dan sabuk radiasi intens.",
      "Empat satelit Galilea: Io, Europa, Ganymede, Callisto.",
      "Badai Great Red Spot telah berlangsung selama berabad-abad."
    ],
    tagline: "Raksasa gas."
  },
  {
    id: "saturn",
    name: "Saturnus",
    type: "Planet",
    color: "#facc15",
    orbitRadius: 240,
    overview: "Saturnus adalah raksasa gas kedua terbesar, terkenal karena **sistem cincinnya yang spektakuler** yang terdiri dari miliaran potongan es. Saturnus memiliki **densitas terendah**; ia adalah satu-satunya planet yang akan mengapung di water. Ia memiliki lebih dari 80 satelit, dengan **Titan** sebagai satelit terbesarnya, yang merupakan satu-satunya satelit dengan atmosfer tebal dan signifikan.",
    data: [
      { label: "Diameter", value: "116.460 km" },
      { label: "Periode orbit", value: "29 tahun" },
      { label: "Satelit alami", value: ">80" },
      { label: "Gravitasi", value: "10.44 m/s²" },
    ],
    facts: [
      "Cincin terdiri dari partikel es dan puing mikroskopis.",
      "Titan adalah satelit besar dengan atmosfer tebal.",
      "Memiliki densitas terendah di antara semua planet."
    ],
    tagline: "Si bercincin."
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Planet",
    color: "#60a5fa",
    orbitRadius: 280,
    overview: "Uranus diklasifikasikan sebagai **raksasa es**. Fitur paling uniknya adalah **kemiringan sumbu rotasi yang ekstrem** (~98°), membuatnya seolah-olah 'menggelinding' di orbit. Kemiringan ini menghasilkan musim yang sangat ekstrem dan panjang. Atmosfernya mengandung metana yang menyerap cahaya merah, memberikan planet ini **warna cyan-biru** yang khas. Uranus memiliki sistem cincin tipis dan lebih dari dua lusin satelit.",
    data: [
      { label: "Diameter", value: "50.724 km" },
      { label: "Periode orbit", value: "84 tahun" },
      { label: "Satelit alami", value: ">27" },
      { label: "Gravitasi", value: "8.69 m/s²" },
    ],
    facts: [
      "Atmosfer kaya metana memberi warna kebiruan.",
      "Rotasi miring membuat musim ekstrem dan panjang.",
      "Diklasifikasikan sebagai 'raksasa es'."
    ],
    tagline: "Miring unik."
  },
  {
    id: "neptune",
    name: "Neptunus",
    type: "Planet",
    color: "#3b82f6",
    orbitRadius: 320,
    overview: "Neptunus adalah raksasa es kedelapan dan terjauh. Dikenal memiliki **angin tercepat** di Tata Surya (lebih dari 2.100 km/jam), didorong oleh sumber panas internal. Satelit terbesarnya, **Triton**, adalah objek unik yang mengorbit Neptunus dalam arah **retrograde** (berlawanan), mengindikasikan bahwa ia mungkin adalah objek Sabuk Kuiper yang ditangkap oleh gravitasinya.",
    data: [
      { label: "Diameter", value: "49.244 km" },
      { label: "Periode orbit", value: "165 tahun" },
      { label: "Satelit alami", value: ">14" },
      { label: "Gravitasi", value: "11.15 m/s²" },
    ],
    facts: [
      "Angin dapat mencapai ~2.100 km/jam.",
      "Triton adalah satelit besar dengan orbit retrograde.",
      "Planet terluar di Tata Surya."
    ],
    tagline: "Biru misterius."
  },
  {
    id: "pluto",
    name: "Pluto",
    type: "Planet kerdil",
    color: "#a3a3a3",
    orbitRadius: 360,
    overview: "Pluto adalah **planet kerdil** terbesar dan paling terkenal, terletak di **Sabuk Kuiper**. Klasifikasinya diubah pada tahun 2006 karena tidak memenuhi kriteria 'membersihkan orbitnya'. Pluto sangat kompleks, memiliki pegunungan es dan dataran nitrogen beku (seperti area berbentuk hati **Tombaugh Regio**). Ia berpasangan dengan satelit terbesarnya, **Charon**, dalam sistem biner yang unik, dan memiliki empat satelit kecil lainnya.",
    data: [
      { label: "Diameter", value: "2.377 km" },
      { label: "Periode orbit", value: "248 tahun" },
      { label: "Satelit alami", value: "5 (termasuk Charon)" },
      { label: "Gravitasi", value: "0.62 m/s²" },
    ],
    facts: [
      "Dulu diklasifikasikan sebagai planet ke-9, kini planet kerdil.",
      "New Horizons memotret detail permukaannya pada 2015.",
      "Terletak di Sabuk Kuiper."
    ],
    tagline: "Kecil tapi ikonik."
  }
];

// Konstanta
const REVIEWS_KEY = 'rp_reviews'; 

// State
let state = {
  selectedIndex: 0,
  focused: false,
  theme: localStorage.getItem("theme") || "dark",
  rotationSpeedFactor: 1.0,
  isLoggedIn: false, 
  username: ""       
};

// State Review
let reviews = {}; 

// Elemen DOM
const listEl = document.getElementById("objectList");
const breadcrumbEl = document.getElementById("breadcrumb");
const selectedNameEl = document.getElementById("selectedName");
const selectedTaglineEl = document.getElementById("selectedTagline");
const overviewTextEl = document.getElementById("overviewText");
const dataGridEl = document.getElementById("dataGrid");
const factListEl = document.getElementById("factList");
const searchInputEl = document.getElementById("searchInput");
const themeToggleEl = document.getElementById("themeToggle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const focusBtn = document.getElementById("focusBtn");
const homeBtn = document.getElementById("homeBtn");
const jumpSelect = document.getElementById("jumpSelect");
const canvas = document.getElementById("orbitCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const speedSliderEl = document.getElementById("speedSlider");
const speedValueEl = document.getElementById("speedValue");

const profileSectionEl = document.getElementById("profileSection");
const loginModalEl = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");

// Elemen DOM untuk Ulasan
const reviewObjectNameEl = document.getElementById("reviewObjectName");
const reviewFormFieldsEl = document.getElementById("reviewFormFields");
const reviewFormEl = document.getElementById("reviewForm");
const reviewListEl = document.getElementById("reviewList");
const reviewRatingEl = document.getElementById("review-rating");
const reviewCommentEl = document.getElementById("review-comment");
const reviewLoginMessageEl = document.getElementById("reviewLoginMessage");

// Tabs Logic
const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = {
  overview: document.getElementById("tab-overview"),
  data: document.getElementById("tab-data"),
  facts: document.getElementById("tab-facts"),
  reviews: document.getElementById("tab-reviews"), 
};

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    Object.values(panels).forEach(p => p.classList.remove("active"));
    panels[tab.dataset.tab].classList.add("active");
  });
});

// Theme Logic
function applyTheme() {
  document.documentElement.classList.remove("light", "high-contrast"); 
  
  if (state.theme === "light") {
    document.documentElement.classList.add("light");
  } else if (state.theme === "high-contrast") {
    document.documentElement.classList.add("high-contrast");
  }
}
applyTheme();

themeToggleEl.addEventListener("click", () => {
  if (state.theme === "dark") {
    state.theme = "light";
  } else if (state.theme === "light") {
    state.theme = "high-contrast";
  } else {
    state.theme = "dark";
  }
  localStorage.setItem("theme", state.theme);
  applyTheme();
});

// Fungsi Login/Logout
function checkLoginStatus() {
  const storedUser = localStorage.getItem('rp_username');
  if (storedUser) {
    state.isLoggedIn = true;
    state.username = storedUser;
  }
  renderLoginUI();
  updateReviewFormAccess(); 
}

function renderLoginUI() {
  if (!profileSectionEl) return;
  
  if (state.isLoggedIn) {
    profileSectionEl.innerHTML = `
      <div class="profile-info">
        <span>Halo, <strong>${state.username}</strong>!</span>
        <small>Pengguna Mode Eksplorasi</small>
      </div>
      <button id="logoutBtn" class="btn ghost btn-sm">Keluar</button>
    `;
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);
  } else {
    profileSectionEl.innerHTML = `
      <button id="loginBtn" class="btn">Masuk / Daftar</button>
    `;
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) loginBtn.addEventListener("click", showLoginModal);
  }
}

function showLoginModal() {
  if (loginModalEl) {
    loginModalEl.classList.add("visible");
  }
}

function hideLoginModal() {
  if (loginModalEl) {
    loginModalEl.classList.remove("visible");
  }
}

function handleLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('login-username').value;
  
  if (usernameInput.trim() === "") {
    alert("Nama pengguna tidak boleh kosong!");
    return;
  }

  state.isLoggedIn = true;
  state.username = usernameInput;
  localStorage.setItem('rp_username', usernameInput);
  
  hideLoginModal();
  renderLoginUI();
  updateReviewFormAccess(); 
}

function handleLogout() {
  state.isLoggedIn = false;
  state.username = "";
  localStorage.removeItem('rp_username');
  renderLoginUI();
  updateReviewFormAccess(); 
}

// Fungsi Ulasan
function loadReviews() {
    const storedReviews = localStorage.getItem(REVIEWS_KEY);
    if (storedReviews) {
        try {
            reviews = JSON.parse(storedReviews);
        } catch (e) {
            console.error("Gagal memuat ulasan dari localStorage:", e);
            reviews = {};
        }
    }
}

function saveReviews() {
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

function updateReviewFormAccess() {
    if (reviewFormFieldsEl) {
        reviewFormFieldsEl.disabled = !state.isLoggedIn;
        
        if (reviewLoginMessageEl) {
            reviewLoginMessageEl.style.display = state.isLoggedIn ? 'none' : 'block';
        }
    }
}

function renderReviews() {
    if (!reviewListEl || !reviewObjectNameEl) return;

    const currentObject = OBJECTS[state.selectedIndex];
    const objectId = currentObject.id;
    reviewObjectNameEl.textContent = currentObject.name; 

    const objectReviews = reviews[objectId] || [];
    reviewListEl.innerHTML = "";

    if (objectReviews.length === 0) {
        reviewListEl.innerHTML = '<p style="color: var(--muted); padding: 10px;">Belum ada ulasan untuk objek ini. Jadilah yang pertama!</p>';
        return;
    }

    objectReviews.sort((a, b) => new Date(b.date) - new Date(a.date));

    objectReviews.forEach((review, index) => {
        const item = document.createElement("div");
        item.className = "review-item";
        item.dataset.reviewIndex = index;

        const stars = '🌟'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        item.innerHTML = `
            <div class="review-header">
                <span class="review-author">${review.username}</span>
                <span class="review-rating-stars">${stars}</span>
            </div>
            <p class="review-body">${review.comment}</p>
            <div class="review-actions">
                <span class="review-date">${new Date(review.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</span>
                ${review.username === state.username ? 
                    `<button class="btn delete" data-review-index="${index}">Hapus Ulasan</button>` : 
                    ''}
            </div>
        `;
        reviewListEl.appendChild(item);
    });

    // Tambahkan event listener untuk tombol hapus
    document.querySelectorAll('.btn.delete').forEach(button => {
        button.addEventListener('click', handleDeleteReview);
    });
}

function handleReviewSubmit(e) {
    e.preventDefault();

    if (!state.isLoggedIn) {
        alert("Anda harus masuk untuk memberikan ulasan!");
        return;
    }

    const currentObject = OBJECTS[state.selectedIndex];
    const objectId = currentObject.id;

    const rating = parseInt(reviewRatingEl.value);
    const comment = reviewCommentEl.value.trim();

    if (comment.length < 5) {
        alert("Komentar minimal 5 karakter.");
        return;
    }

    const newReview = {
        username: state.username,
        rating: rating,
        comment: comment,
        date: new Date().toISOString()
    };

    if (!reviews[objectId]) {
        reviews[objectId] = [];
    }

    reviews[objectId].push(newReview);
    saveReviews();

    reviewFormEl.reset();
    
    renderReviews();
    
    alert(`Terima kasih, ulasan Anda untuk ${currentObject.name} telah disimpan!`);
}

// Fungsi untuk menghapus ulasan
function handleDeleteReview(e) {
    if (!state.isLoggedIn) {
        alert("Anda harus masuk untuk menghapus ulasan!");
        return;
    }

    const currentObject = OBJECTS[state.selectedIndex];
    const objectId = currentObject.id;
    const reviewIndex = parseInt(e.target.dataset.reviewIndex);

    const objectReviews = reviews[objectId] || [];
    
    if (reviewIndex < 0 || reviewIndex >= objectReviews.length) {
        console.error("Indeks ulasan tidak valid");
        return;
    }

    const reviewToDelete = objectReviews[reviewIndex];
    
    // Verifikasi bahwa pengguna yang login adalah pemilik ulasan
    if (reviewToDelete.username !== state.username) {
        alert("Anda hanya dapat menghapus ulasan Anda sendiri!");
        return;
    }

    // Konfirmasi penghapusan
    if (confirm(`Apakah Anda yakin ingin menghapus ulasan ini?\n\n"${reviewToDelete.comment.substring(0, 50)}${reviewToDelete.comment.length > 50 ? '...' : ''}"`)) {
        // Hapus ulasan dari array
        objectReviews.splice(reviewIndex, 1);
        
        // Jika tidak ada ulasan lagi untuk objek ini, hapus properti objek tersebut
        if (objectReviews.length === 0) {
            delete reviews[objectId];
        }
        
        // Simpan perubahan ke localStorage
        saveReviews();
        
        // Render ulang ulasan
        renderReviews();
        
        alert("Ulasan berhasil dihapus!");
    }
}

// Render dropdown Loncat 
function renderJumpSelect() {
  if (!jumpSelect) return;
  jumpSelect.innerHTML = '<option value="">Loncat ke…</option>';
  OBJECTS.forEach((obj, idx) => {
    const opt = document.createElement("option");
    opt.value = String(idx);
    opt.textContent = obj.name;
    jumpSelect.appendChild(opt);
  });
  jumpSelect.addEventListener("change", (e) => {
    const v = e.target.value;
    if (v !== "") selectIndex(Number(v));
    jumpSelect.value = ""; 
  });
}

// Helper: escape HTML (prevent injection)
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper: highlight query inside text (returns safe HTML)
function highlightText(text, q) {
  if (!q) return escapeHtml(text);
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "ig");
  return escapeHtml(text).replace(re, '<mark style="background: var(--warning); padding: 0 2px; border-radius: 4px; color: var(--text);">$1</mark>');
}

// Render list (dengan filter pencarian hanya berdasarkan NAMA)
function renderList(filter = "") {
  if (!listEl) return;
  listEl.innerHTML = "";
  const q = filter.trim();
  const qLower = q.toLowerCase();

  // Filter HANYA berdasarkan nama objek
  const filteredObjects = OBJECTS.filter(obj => {
    return q.length === 0 || obj.name.toLowerCase().includes(qLower);
  });

  if (filteredObjects.length === 0) {
    listEl.innerHTML = '<li style="padding: 15px; color: var(--muted);">Tidak ada objek yang ditemukan.</li>';
    return;
  }

  filteredObjects.forEach((obj, displayIdx) => {
    const idx = OBJECTS.findIndex(o => o.id === obj.id);
    
    const li = document.createElement("li");
    li.className = "nav-item" + (idx === state.selectedIndex ? " active" : "");
    li.setAttribute("role", "button");
    li.tabIndex = 0;

    const left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";
    left.style.gap = "10px";

    const dot = document.createElement("div");
    dot.style.width = "12px";
    dot.style.height = "12px";
    dot.style.borderRadius = "50%";
    dot.style.background = obj.color;
    dot.style.boxShadow = `0 0 12px ${obj.color}80`;

    const name = document.createElement("span");

    // Highlight nama jika query ditemukan
    if (q.length > 0) {
      name.innerHTML = highlightText(obj.name, q);
    } else {
      name.textContent = obj.name;
    }

    left.appendChild(dot);
    left.appendChild(name);

    // Badge (type)
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = obj.type;

    const rightWrapper = document.createElement("div");
    rightWrapper.style.display = "flex";
    rightWrapper.style.flexDirection = "column";
    rightWrapper.style.alignItems = "flex-end";
    rightWrapper.style.gap = "6px";

    // Append badge at top-right
    rightWrapper.appendChild(badge);

    // Combine left + right into li
    const contentWrapper = document.createElement("div");
    contentWrapper.style.display = "flex";
    contentWrapper.style.justifyContent = "space-between";
    contentWrapper.style.alignItems = "center";
    contentWrapper.style.width = "100%";

    contentWrapper.appendChild(left);
    contentWrapper.appendChild(rightWrapper);

    li.appendChild(contentWrapper);

    li.addEventListener("click", () => selectIndex(idx));
    li.addEventListener("keydown", (e) => { if (e.key === "Enter") selectIndex(idx); });

    listEl.appendChild(li);
  });
}

// Select Object Index and Render Details
function selectIndex(idx) {
  state.selectedIndex = (idx + OBJECTS.length) % OBJECTS.length;
  const obj = OBJECTS[state.selectedIndex];
  
  // Update Detail Panel
  if (selectedNameEl) selectedNameEl.textContent = obj.name;
  if (selectedTaglineEl) selectedTaglineEl.textContent = obj.tagline;
  if (breadcrumbEl) breadcrumbEl.textContent = `Objek • ${obj.type} • ${obj.name}`;

  // Overview Tab
  if (overviewTextEl) overviewTextEl.innerHTML = obj.overview.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Data Tab
  if (dataGridEl) {
    dataGridEl.innerHTML = "";
    obj.data.forEach(d => {
      const item = document.createElement("div");
      item.className = "data-item";
      item.innerHTML = `<h4>${d.label}</h4><p>${d.value}</p>`;
      dataGridEl.appendChild(item);
    });
  }

  // Facts Tab
  if (factListEl) {
    factListEl.innerHTML = "";
    obj.facts.forEach(f => {
      const li = document.createElement("li");
      li.className = "fact";
      li.textContent = f;
      factListEl.appendChild(li);
    });
  }

  // Ulasan Tab
  renderReviews();

  // Update Visuals
  drawOrbit();
  renderList(searchInputEl ? searchInputEl.value : ""); 
}

// Orbit canvas (2D halus, dengan fokus opsional)
let animFrame;
let t = 0;

function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  drawOrbit();
}
window.addEventListener("resize", resizeCanvas);

function drawOrbit() {
  if (!ctx) return;
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const cx = w * 0.5, cy = h * 0.58;
  const dpr = window.devicePixelRatio;

  // 1. Matahari
  const sunRadius = 20 * dpr;
  ctx.save();
  const gradient = ctx.createRadialGradient(cx, cy, sunRadius * 0.2, cx, cy, sunRadius);
  gradient.addColorStop(0, "#ffcc33");
  gradient.addColorStop(1, "#ff9933");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(cx, cy, sunRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 2. Orbit (Ellipse)
  OBJECTS.forEach((obj) => {
    if (obj.id === "sun") return;
    const r = obj.orbitRadius * dpr;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--orbit-line-color').trim();
    ctx.lineWidth = 1.2 * dpr;
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r * 0.88, 0, 0, Math.PI * 2); 
    ctx.stroke();
  });

  // 3. Planet/Satelit (Positions & Animation)
  OBJECTS.forEach((obj, i) => {
    if (obj.id === "sun") return;
    const r = obj.orbitRadius * dpr;
    const speed = 0.0007 + i * 0.00023; 
    
    const currentSpeed = state.focused && i === state.selectedIndex ? speed * 1.6 : speed;
    
    const angle = t * currentSpeed;
    
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r * 0.88;

    const size = (i === state.selectedIndex ? 7 : 5) * dpr;
    
    ctx.save();
    ctx.shadowColor = obj.color + "aa";
    ctx.shadowBlur = 16 * dpr;
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();

    if (i === state.selectedIndex) {
      ctx.strokeStyle = "rgba(106,227,255,0.45)";
      ctx.lineWidth = 2 * dpr;
      ctx.beginPath();
      ctx.arc(x, y, size + 6 * dpr, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  });
}

function loop() {
  t += 16 * state.rotationSpeedFactor;
  drawOrbit();
  animFrame = requestAnimationFrame(loop);
}

// Initialization
function init() {
  loadReviews(); 
  checkLoginStatus(); 

  renderJumpSelect();
  renderList();
  selectIndex(0);
  resizeCanvas();
  
  if (speedSliderEl) speedSliderEl.value = state.rotationSpeedFactor;
  if (speedValueEl) speedValueEl.textContent = `${state.rotationSpeedFactor.toFixed(1)}x`;

  // Event listeners
  if (closeModalBtn) closeModalBtn.addEventListener("click", hideLoginModal);
  if (loginModalEl) loginModalEl.addEventListener("click", (e) => {
      if (e.target === loginModalEl) hideLoginModal();
  });
  if (loginForm) loginForm.addEventListener("submit", handleLogin);
  if (reviewFormEl) reviewFormEl.addEventListener("submit", handleReviewSubmit);

  // Event delegation untuk tombol hapus
  document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete')) {
      handleDeleteReview(e);
    }
  });

  loop();
}

// Fungsi showLoginModal harus tersedia secara global untuk link di pesan login
window.showLoginModal = showLoginModal;

document.addEventListener('DOMContentLoaded', init);

// Controls Event Listeners
if (prevBtn) prevBtn.addEventListener("click", () => selectIndex(state.selectedIndex - 1));
if (nextBtn) nextBtn.addEventListener("click", () => selectIndex(state.selectedIndex + 1));
if (focusBtn) focusBtn.addEventListener("click", () => {
  state.focused = !state.focused;
  focusBtn.textContent = state.focused ? "🔎 Lepas fokus" : "🔍 Fokus orbit";
});
if (homeBtn) homeBtn.addEventListener("click", () => selectIndex(0));

// Listener untuk Slider Kecepatan
if (speedSliderEl && speedValueEl) {
    speedSliderEl.addEventListener("input", (e) => {
        const value = parseFloat(e.target.value);
        state.rotationSpeedFactor = value;
        speedValueEl.textContent = `${value.toFixed(1)}x`;
    });
}

// Search (hanya berdasarkan nama)
if (searchInputEl) searchInputEl.addEventListener("input", (e) => {
  renderList(e.target.value);
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
    return;
  }
  
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    selectIndex(state.selectedIndex - 1);
  }
  if (e.key === "ArrowRight") {
    e.preventDefault();
    selectIndex(state.selectedIndex + 1);
  }
  if (e.key.toLowerCase() === "f" && focusBtn) {
    e.preventDefault();
    state.focused = !state.focused;
    focusBtn.textContent = state.focused ? "🔎 Lepas fokus" : "🔍 Fokus orbit";
  }
});