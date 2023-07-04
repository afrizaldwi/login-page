const password = document.getElementById("password");
const btnShowPassword = document.getElementById("btnShowPassword");
const btnShowPasswordIcon = document.querySelector("#btnShowPassword i");

btnShowPassword.addEventListener("click", (e) => {
    e.preventDefault();

    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");

        btnShowPasswordIcon.classList.toggle("fa-eye-slash");
        btnShowPasswordIcon.classList.toggle("fa-eye");
    } else {
        password.setAttribute("type", "password");

        btnShowPasswordIcon.classList.toggle("fa-eye-slash");
        btnShowPasswordIcon.classList.toggle("fa-eye");
    }
});
