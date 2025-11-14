# Admin Dashboard — React + TypeScript + Vite

Admin dashboard modern yang dibangun menggunakan **React + TypeScript + Vite** dengan fitur lengkap seperti data table, chart analitik, sidebar collapsible, dan layout responsif.  
Project ini dibuat sebagai bagian dari take-home test Frontend Engineer.

---

## Tech Stack

| Teknologi              | Keterangan                      |
| ---------------------- | ------------------------------- |
| **React + TypeScript** | Fondasi utama aplikasi          |
| **Vite**               | Bundler cepat untuk development |
| **TailwindCSS**        | Styling cepat dan konsisten     |
| **Recharts**           | Library untuk visualisasi data  |
| **React Router DOM**   | Routing antar halaman           |
| **Lucide React**       | Icon modern dan ringan          |

---

## Fitur Utama

### Dashboard

- Summary card (Total User, Admin, Manager, User)
- Line chart (Users)
- Pie chart (Distribution overview)
- Table data interaktif

### Data Table

- Search (by name/email)
- Sorting setiap kolom
- Pagination
- Filter by role
- Responsive

### Sidebar (Collapsible)

- Sidebar fixed, tidak ikut scroll
- Bisa collapse / expand
- State tersimpan di `localStorage`
- Margin halaman otomatis menyesuaikan (global context)

### Charts (Recharts)

- Line chart menunjukkan growth (users)
- Pie chart menunjukkan komposisi data
- Responsive container

### Code Structure Clean

- React component terpisah
- Context API untuk global layout
- JSON mock data terpisah untuk testing

---

## Folder Structure

src/

│── assets/

│── components/
│ ├── Sidebar.tsx
│ ├── Header.tsx
│ ├── SummaryCard.tsx
│ ├── DataTable.tsx
│ ├── ChartCard.tsx
│ └── PieChartCard.tsx

│── context/
│ ├── AuthContext.tsx
│ └── SidebarContext.tsx

│── data/
│ └── users.json
│

│── pages/
│ ├── Login.tsx
│ └── Dashboard.tsx

│── App.tsx
│── main.tsx
│── index.css

## Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/rafsanjani21/magang.git
cd magang
```

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Jalankan Development Server
npm run dev

Dashboard berjalan pada: http://localhost:5173

## Data Mock

### users.json
Digunakan untuk data tabel, filtering, dan summary card.

### stats.json
Digunakan untuk line chart & pie chart

## Available Scripts
npm run dev = Menjalankan development server

npm run build = Build project untuk production

npm run preview = Preview hasil build

## Contact

Jika Anda ingin mendiskusikan lebih lanjut mengenai project ini:

Nama: Muhammad Rafsanjani
Email: rafsanjani1719@gmail.com
LinkedIn: www.linkedin.com/in/muhammadrafsanjani17
