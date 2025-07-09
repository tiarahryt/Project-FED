document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk menampilkan alert kustom
  function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");
    alertMessage.textContent = message;
    alertBox.style.display = "flex"; // Menampilkan alert

    // Menghilangkan alert setelah 3 detik
    setTimeout(() => {
      alertBox.style.display = "none"; // Menyembunyikan alert
    }, 3000);
  }

  // Menangani form transaksi
  const transaksiForm = document.getElementById("transaksiForm");
  if (transaksiForm) {
    transaksiForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah pengiriman form

      const namaTransaksi = document.getElementById("namaTransaksi").value;
      const jumlah = document.getElementById("jumlah").value;
      const kategori = document.getElementById("kategori").value;

      // Cek apakah field kosong
      if (!namaTransaksi || !jumlah || !kategori) {
        showAlert("Semua field harus diisi!"); // Tampilkan alert jika ada field kosong
      } else {
        showAlert("Transaksi berhasil disimpan!"); // Tampilkan alert jika berhasil
        transaksiForm.reset(); // Kosongkan form input setelah alert
      }
    });
  }

  // Menangani form login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah pengiriman form

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Cek apakah field kosong
      if (!username || !password) {
        showAlert("Semua field harus diisi!"); // Tampilkan alert jika ada field kosong
      } else {
        showAlert("Login berhasil!"); // Tampilkan alert jika berhasil
        loginForm.reset(); // Kosongkan form input setelah alert
      }
    });
  }

  // Menangani penutupan alert
  const closeAlertButton = document.getElementById("closeAlert");
  if (closeAlertButton) {
    closeAlertButton.addEventListener("click", function () {
      const alertBox = document.getElementById("customAlert");
      alertBox.style.display = "none"; // Sembunyikan alert
    });
  }
});
