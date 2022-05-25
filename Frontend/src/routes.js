export const navigation = [
  { name: "Dashboard", url: "/dashboard", active: true },
  {
    name: "Bagian A",
    url: "/bagian-a",
    active: false,
    child: [
      { name: "1 2 Hop!", url: "/bagian-a/Question_1", active: false },
      {
        name: "Sort Berdasarkan Posisi",
        url: "/bagian-a/Question_2",
        active: false,
      },
      { name: "Kamus Panda", url: "/bagian-a/Question_3", active: false },
    ],
  },
  {
    name: "Bagian B",
    url: null,
    active: false,
    child: [
      { name: "Master Pelanggan", url: null, active: false },
      { name: "Master Product", url: null, active: false },
      { name: "Data Transaksi", url: null, active: false },
      { name: "Detail Transaksi", url: null, active: false },
    ],
  },
];