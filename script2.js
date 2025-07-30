const password = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");

password.addEventListener("input", () => {
  const val = password.value;
  let strength = 0;

  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  switch (strength) {
    case 0:
      strengthText.textContent = "Strength: Too Short";
      strengthBar.style.backgroundColor = "#ccc";
      break;
    case 1:
      strengthText.textContent = "Strength: Weak";
      strengthBar.style.backgroundColor = "#e74c3c";
      break;
    case 2:
      strengthText.textContent = "Strength: Moderate";
      strengthBar.style.backgroundColor = "#f1c40f";
      break;
    case 3:
      strengthText.textContent = "Strength: Strong";
      strengthBar.style.backgroundColor = "#2ecc71";
      break;
    case 4:
      strengthText.textContent = "Strength: Very Strong";
      strengthBar.style.backgroundColor = "#27ae60";
      break;
  }
});
