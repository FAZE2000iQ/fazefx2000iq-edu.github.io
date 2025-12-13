function checkCode() {
  const correctCode = "1234"; // CHANGE THIS
  const userCode = document.getElementById("codeInput").value;

  if (userCode === correctCode) {
    window.location.href = "secret.html";
  } else {
    alert("Wrong code!");
  }
}
