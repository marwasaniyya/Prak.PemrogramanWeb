function validate() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
  
    if (nama !== "" && email !== "" && alamat !== "") {
      alert("Anda sudah berhasil mengisi");
    } else {
      alert("Anda harus mengisi data secara lengkap!");
    }
  }