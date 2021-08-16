const nameEle = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");
console.log({ nameEle, password, form, error });

form.addEventListener("submit", (e) => {
  let messages = [];
  if (nameEle.value === "" || nameEle.value === null) {
    console.log('working')
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 6 characters')
  }

  if (password.value === "password") {
    messages.push('Password can\'t be password')
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ")
  }
})