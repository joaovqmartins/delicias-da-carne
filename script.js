// location
let = local = document.querySelector(".location");

document.querySelector("#location-btn").onclick = () => {
  local.classList.toggle("active");
  form.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

// form
let = form = document.querySelector(".contact");

document.querySelector("#message-btn").onclick = () => {
  form.classList.toggle("active");
  local.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

// shopping cart
let = shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  local.classList.remove("active");
  form.classList.remove("active");
  navbar.classList.remove("active");
};

// media queries - menu hamburger
let = navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  local.classList.remove("active");
  form.classList.remove("active");
  shoppingCart.classList.remove("active");
};

// click and remove
window.onscroll = () => {
  navbar.classList.remove("active");
  local.classList.remove("active");
  form.classList.remove("active");
  shoppingCart.classList.remove("active");
};

//swiper responsive-beakpoints
let swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    deley: 7500,
    disableOnInteraction: true,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// continuos form - select
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// checkbox
function checkboxAmazing(checkbox) {
  checkbox.classList.toggle("checked");
}

function updateCheck() {
  const checkboxes = document.querySelectorAll(".checkbox-main .checkbox");
  const allCheckbox = checkboxes[0];

  let checked = true;
  for (let i = 1; i < checkboxes.length; i++) {
    if (!checkboxes[i].classList.contains("checked")) {
      checked = false;
      break;
    }
  }

  if (checked) {
    allCheckbox.classList.add("checked");
  } else {
    allCheckbox.classList.remove("checked");
  }
}

document.addEventListener("click", function(event) {
  const checkbox = event.target.closest(".checkbox");
  if (checkbox) {
    if (
      checkbox.parentElement ===
      checkbox.parentElement.parentElement.firstElementChild
    ) {
      checkboxAmazing(checkbox);
      const checkboxes = document.querySelectorAll(".checkbox-main .checkbox");
      for (let i = 1; i < checkboxes.length; i++) {
        if (checkbox.classList.contains("checked")) {
          checkboxes[i].classList.add("checked");
        } else {
          checkboxes[i].classList.remove("checked");
        }
      }
    } else {
      checkboxAmazing(checkbox);
      updateCheck();
    }
  }
});

// radio button
function selectOption(option) {
  const radioOptions = document.querySelectorAll(".radio-option");
  radioOptions.forEach((radioOption, index) => {
    if (index === option - 1) {
      radioOption.classList.add("selected");
    } else {
      radioOption.classList.remove("selected");
    }
  });
  console.log("Opção selecionada:", option);
}

// validation
function validate(form) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const textarea = document.getElementById("textarea").value;


  if (name.trim() === "") {
    alert("Por favor, digite seu nome ");
    return false;
  }

  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!nameRegex.test(name)) {
    alert("Por favor, digite um nome válido (nome e sobrenome).");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, digite um e-mail válido.");
    return false;
  }

  if (email.trim() === "") {
    alert("Por favor, digite seu e-mail.");
    return false;
  }

  if (telephone.trim() === "") {
    alert("Por favor, digite seu numero de telefone.");
    return false;
  }

  const telephoneRegex = /^\d{11}$/;
  if (!telephoneRegex.test(telephone)) {
    alert("Por favor, digite um número de telefone válido (11 dígitos).");
    return false;
  }

  if (textarea.trim().length < 5) {
    alert("Por favor, digite pelo menos 5 caracteres na mensagem.");
    return false;
  }

  const selectedOption = document.querySelector(".sBtn-text").innerText;
  if (selectedOption === "Selecione Preferência") {
    alert("Por favor, selecione uma preferência.");
    return false;
  }

  const checkboxes = document.querySelectorAll(".checkbox-main .checkbox");
  let checked = false;
  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[i].classList.contains("checked")) {
      checked = true;
      break;
    }
  }
  if (!checked) {
    alert("Por favor, escolha pelo menos um meio de contato.");
    return false;
  }

  const radioOptions = document.querySelectorAll(".radio-option");
  let optionSelected = false;
  radioOptions.forEach((radioOption) => {
    if (radioOption.classList.contains("selected")) {
      optionSelected = true;
    }
  });
  if (!optionSelected) {
    alert("Por favor, marque sua preferência.");
    return false;
  }

  alert("Formulário válido. Enviando...");
  form.submit();
}
