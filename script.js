function checkCode() {
  const correctCode = "haroeverybody"; // CHANGE THIS
  const userCode = document.getElementById("codeInput").value;

  if (userCode === correctCode) {
    window.location.href = "secret.html";
  } else {
    alert("Wrong code!");
  }
}
