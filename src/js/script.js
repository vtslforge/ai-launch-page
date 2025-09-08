function placeholderbtn() {
  const txt_holder = document.querySelector(".placeholder-text");
  const joinbtn = document.querySelector(".joinbtn");

  // Clear placeholder on focus
  txt_holder.addEventListener("focus", () => {
    txt_holder.placeholder = "";
  });

  // Restore placeholder on blur if input is empty
  txt_holder.addEventListener("blur", () => {
    if (txt_holder.value === "") {
      txt_holder.placeholder = "Enter email";
    }
  });

  // Simple email validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Button click
  joinbtn.addEventListener("click", () => {
    const email = txt_holder.value.trim();

    if (email === "") {
      txt_holder.placeholder = "Enter your email";
    } else if (!isValidEmail(email)) {
      txt_holder.value = "";
      txt_holder.placeholder = "Enter valid email";
    } else {
      alert("Submitted");
      txt_holder.value = "";
      txt_holder.placeholder = "Enter your email";
    }
  });
}

placeholderbtn();

function scrollable_card() {
  const card = document.getElementById('scrollable-card');
  let isMousedown = false;
  let startX;
  let scrollLeft;

  card.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isMousedown = true;
    startX = e.pageX - card.offsetLeft;
    scrollLeft = card.scrollLeft;
  });

  card.addEventListener('mouseleave', () => {
    isMousedown = false;
  });

  card.addEventListener('mouseup', () => {
    isMousedown = false;
  });

  card.addEventListener('mousemove', (e) => {
    if (!isMousedown) return;
    e.preventDefault();
    const x = e.pageX - card.offsetLeft;
    const walk = (x - startX) * 1;
    card.scrollLeft = scrollLeft - walk;
  });
}

scrollable_card();

