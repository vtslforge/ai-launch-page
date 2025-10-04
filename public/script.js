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
      dot.classList.toggle("bg-[#696969]", i === scrollIndex);
      dot.classList.toggle("bg-gray-800", i !== scrollIndex);
    });
    return scrollIndex;
  }

  let currentIndex = updateDots(); // start from current position

  carousel.addEventListener("scroll", () => {
    currentIndex = updateDots(); // update index when user swipes
  });

  updateDots();

  // Auto-scroll every 2 seconds
  setInterval(() => {
    currentIndex++;
    if (currentIndex >= cards.length) currentIndex = 0; // loop back

    const cardWidth = carousel.clientWidth;
    carousel.scrollTo({
      left: cardWidth * currentIndex,
      behavior: "smooth"
    });

    updateDots();
  }, 8000);
}

swipe_carousel();

function innertexts() {
  const mappings = [
    {
      selectors: "#card11innertext, #card12innertext, #card13innertext",
      type: "text",
      content: "Natural Language Understanding"
    },
    {
      selectors: "#card21innertext, #card22innertext, #card23innertext",
      type: "html",
      content: `Understands human language our AI goes beyond keywords it grasps intent, context, and emotions to deliver accurate, meaningful responses every time
        <div class="flex justify-center min-w-20">
          <img src="../assets/Mastercard.svg" />
        </div>`
    },
    {
      selectors: "#card31innertext, #card32innertext, #card33innertext",
      type: "text",
      content: "Natural Language Generation"
    },
    {
      selectors: "#card41innertext, #card42innertext, #card43innertext",
      type: "html",
      content: `Creates human like content from summaries and reports to stories and emails, our AI generates clear, fluent, and creative text tailored to your needs
        <div class="flex justify-center min-w-20">
          <img src="../assets/Mastercard.svg" />
        </div>`
    },
    {
      selectors: "#speechai, #speecha2, #speechai3",
      type: "text",
      content: "Speech AI"
    },
    {
      selectors: "#speechsub, #speechsub2, #speechsub3",
      type: "html",
      content: `Listen and Speak naturally with advanced speech recognition and lifelike text-to-speech, our AI can hear you, understand you, and talk back seamlessly
        <div class="flex justify-center min-w-20">
          <img src="../assets/Mastercard.svg" />
        </div>`
    },
    {
      selectors: "#comvision, #comvision2, #comvision3",
      type: "text",
      content: "Computer Vision"
    },
    {
      selectors: "#Reasoning, #Reasoning2, #Reasoning3",
      type: "text",
      content: "Reasoning & Knowledge"
    },
    {
      selectors: "#computersub, #computersub2, #computersub3",
      type: "html",
      content: `Sees and Understands Images upload photos or documents our AI detects objects, reads text, and even generates new images with stunning accuracy
        <div class="flex justify-center min-w-20">
          <img src="../assets/Mastercard.svg" />
        </div>`
    },
    {
      selectors: "#Reasoningsub, #Reasoningsub2, #Reasoningsub3",
      type: "html",
      content: `Thinks and solves problems beyond conversation, our AI can analyze, plan, and connect data turning complex questions into smart, actionable answers
        <div class="flex justify-center min-w-20">
          <img src="../assets/Mastercard.svg" />
        </div>`
    },
    {
      selectors: "#multimodel, #multimodel2, #multimodel3",
      type: "text",
      content: "Multimodal Intelligence"
    },
    {
      selectors: "#multimodelsub, #multimodelsub2, #multimodelsub3",
      type: "html",
      content: `Understands across Text, Image & Voice true next-gen AI that blends language, visuals, and audio. Ask a question, show an image, or speak it responds intelligently across all formats
        <div class="flex justify-center min-w-20">
          <img src="../assets/Mastercard.svg" />
        </div>`
    }
  ];

  // Applying updates
  mappings.forEach(({ selectors, type, content }) => {
    document.querySelectorAll(selectors).forEach(el => {
      if (type === "text") {
        el.innerText = content;
      } else {
        el.innerHTML = content;
      }
    });
  });
}

innertexts();

(function () {
  const target_ele = document.querySelectorAll(".show_target");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  target_ele.forEach((element) => observer.observe(element));
})();


(function () {
  const descHeading  = document.getElementById("descHeading");
  const descContent1 = document.getElementById("descContent1");
  const descContent2 = document.getElementById("descContent2");
  const descContent3 = document.getElementById("descContent3");
  const descContent4 = document.getElementById("descContent4");
  const descContent5 = document.getElementById("descContent5");
  const pricingType  = document.getElementById("pricingType");
  const pricingValue = document.getElementById("pricingValue");
  const pricingDescription = document.getElementById("pricingDescription");


    const onclickStarter = document.getElementById("starter");
    onclickStarter.addEventListener("click", () => {
    descHeading.textContent  = "Starter details"
    descContent1.textContent = "Free forever"
    descContent2.textContent = "Access to basic AI tools"
    descContent3.textContent = "Limited daily requests"
    descContent4.textContent = "Community access"
    descContent5.textContent = "Basic cloud storage for prompts"
    pricingType.textContent  = "Starter plan"
    pricingValue.textContent = "0$"
    pricingDescription.textContent = "A perfect entry point to explore the power of AI"
  })
    const onclickStandard = document.getElementById("standard");
    onclickStandard.addEventListener("click", () => {
    descHeading.textContent  = "Standard benifits"
    descContent1.textContent = "Everything in Starter"
    descContent2.textContent = "AI models with higher accuracy"
    descContent3.textContent = "High-resolution image generation"
    descContent4.textContent = "Prompt history & saved projects"
    descContent5.textContent = "Analytics dashboard"
    pricingType.textContent  = "Standard Plan"
    pricingValue.textContent = "10$"
    pricingDescription.textContent = "Upgrade your workflow with faster AI responses"
  })
    const onclickPremium = document.getElementById("premium");
    onclickPremium.addEventListener("click", () => {
    descHeading.textContent  = "Premium benifits"
    descContent1.textContent = "Everything in Standard"
    descContent2.textContent = "Priority processing"
    descContent3.textContent = "Unlimited generations & uploads"
    descContent4.textContent = "Access to all AI modules"
    descContent5.textContent = "Custom AI personalities & workflows"
    pricingType.textContent  = "Premium Plan"
    pricingValue.textContent = "20$"
    pricingDescription.textContent = "For professionals who rely on AI daily"
  })
    const onclickEnterprise = document.getElementById("enterprise");
    onclickEnterprise.addEventListener("click", () => {
    descHeading.textContent  = "Enterprise benifits"
    descContent1.textContent = "Everything in Enterprise"
    descContent2.textContent = "Custom AI model integration"
    descContent3.textContent = "Team collaboration dashboard"
    descContent4.textContent = "API access with developer controls"
    descContent5.textContent = "Advanced security & compliance"
    pricingType.textContent  = "Enterprise Plan"
    pricingValue.textContent = "45$"
    pricingDescription.textContent = "Tailored for businesses, teams, and developers"
  })
})();