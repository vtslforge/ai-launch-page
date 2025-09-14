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



function scrollable_card() {
  // Select both cards using their IDs
  const cards = document.querySelectorAll('#scrollable-card, #scrollable-card2');

  cards.forEach((card) => {
    let isMousedown = false;
    let startX;
    let scrollLeft;
    card.style.scrollBehavior = "smooth";
    // Start dragging
    card.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; // Only left-click
      isMousedown = true;
      startX = e.pageX - card.offsetLeft;
      scrollLeft = card.scrollLeft;
    });

    // Stop dragging on mouseup or leave
    card.addEventListener('mouseup', () => { isMousedown = false; });
    card.addEventListener('mouseleave', () => { isMousedown = false; });

    // Dragging motion
    card.addEventListener('mousemove', (e) => {
      if (!isMousedown) return;
      e.preventDefault();
      const x = e.pageX - card.offsetLeft;
      const walk = (x - startX) * 1; // Scroll speed multiplier
      card.scrollLeft = scrollLeft - walk;
    });
  });

}


function dropin() {
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("drop-in");
          entry.target.classList.remove("translate-y-[-50px]", "opacity-0");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    const elements = document.querySelectorAll(".drop-element");
    elements.forEach(el => {
      observer.observe(el);
    });
  });
}

// cards text change
function textchange(){
  const cbtn1 = document.getElementById("c_btn_1");
  const cvbtn1 = document.getElementById("v_card1");
  const hc1 = document.getElementById("h_c_1");
  cbtn1.addEventListener("click",()=>{
    hc1.classList.remove("hidden");

  })
}





dropin();
scrollable_card();
placeholderbtn();
textchange();