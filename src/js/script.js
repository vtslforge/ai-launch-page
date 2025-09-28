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


function swipe_carousel() {
  const carousel = document.getElementById("carousel");
  const dots = document.querySelectorAll(".dot");
  const cards = document.querySelectorAll(".cards");

  function updateDots() {
    const scrollIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-amber-500", i === scrollIndex);
      dot.classList.toggle("bg-amber-50", i !== scrollIndex);
    });
  }

  carousel.addEventListener("scroll", () => {
    updateDots();
  });

  // Initialize first dot
  updateDots();
}

swipe_carousel();

function innertexts() {
  const main_header = document.querySelectorAll(
    "#card11innertext, #card12innertext, #card13innertext"
  );


  const sub_textone = document.querySelectorAll(
    "#card21innertext, #card22innertext, #card23innertext"
  );

  const sub_textthree = document.querySelectorAll(
    "#card41innertext, #card42innertext, #card43innertext"
  );

  const main_headertwo = document.querySelectorAll(
    "#card31innertext, #card32innertext, #card33innertext"
  );

  const speechai = document.querySelectorAll(
    "#speechai, #speecha2, #speechai3"
  );

  const speechsubs = document.querySelectorAll(
    "#speechsub, #speechsub2, #speechsub3"
  );

  const compvison = document.querySelectorAll(
    "#comvision, #comvision2, #comvision3"
  );

  const Reasoning = document.querySelectorAll(
    "#Reasoning, #Reasoning2, #Reasoning3"
  );

  const computerVision = document.querySelectorAll(
    "#computersub, #computersub2, #computersub3"
  );

  const Reasoningsub = document.querySelectorAll(
    "#Reasoningsub, #Reasoningsub2, #Reasoningsub3"
  );

  const multimodel = document.querySelectorAll(
    "#multimodel, #multimodel2, #multimodel3"
  );

  const multimodelsub = document.querySelectorAll(
    "#multimodelsub, #multimodelsub2, #multimodelsub3"
  );



  main_header.forEach(el => {
    el.innerText = "Natural Language Understanding"
  });

  sub_textone.forEach(el => {
    el.innerHTML = `Understands human language our AI goes beyond keywords it grasps intent, context, and emotions to deliver accurate, meaningful responses every time<div class="flex justify-center min-w-20">
            <img src="../assets/Mastercard.svg" />
        </div> `
  });

  main_headertwo.forEach(el => {
    el.innerText = `Natural Language Generation`
  });

  sub_textthree.forEach(el => {
    el.innerHTML = `Creates human like content from summaries and reports to stories and emails, our AI generates clear, fluent, and creative text tailored to your needs<div class="flex justify-center min-w-20">
            <img src="../assets/Mastercard.svg" />
        </div>`
  });

  speechai.forEach(el => {
    el.innerText = `Speech AI`
  });

  speechsubs.forEach(el => {
    el.innerHTML = `Listen and Speak naturally with advanced speech recognition and lifelike text-to-speech, our AI can hear you, understand you, and talk back seamlessly<div class="flex justify-center min-w-20">
            <img src="../assets/Mastercard.svg" />
        </div> `
  });

  compvison.forEach(el => {
    el.innerText = `Computer Vision`
  });

  Reasoning.forEach(el => {
    el.innerText = `Reasoning & Knowledge`
  });

  computerVision.forEach(el => {
    el.innerHTML = `Sees and Understands Images upload photos or documents our AI detects objects, reads text, and even generates new images with stunning accuracy<div class="flex justify-center min-w-20">
            <img src="../assets/Mastercard.svg" />
        </div>`
  });

  Reasoningsub.forEach(el => {
    el.innerHTML = `Thinks and solves problems beyond conversation, our AI can analyze, plan, and connect data turning complex questions into smart, actionable answers<div class="flex justify-center min-w-20">
            <img src="../assets/Mastercard.svg" />
        </div>`
  });

  multimodel.forEach(el => {
    el.innerText = `Multimodal Intelligence`
  });

  multimodelsub.forEach(el => {
    el.innerHTML = `Understands across Text, Image & Voice true next-gen AI that blends language, visuals, and audio. Ask a question, show an image, or speak it responds intelligently across all formats<div class="flex justify-center min-w-20">
            <img src="../assets/Mastercard.svg" />
        </div>`
  });

}
innertexts()


