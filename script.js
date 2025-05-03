document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const id = tab.getAttribute("data-content");

      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(id).classList.add("active");
    });
  });

  // FAQ functionality
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Toggle the clicked item
      item.classList.toggle("active");

      // Toggle the visibility of the answer
      const answer = item.querySelector(".faq-answer");
      answer.style.display = item.classList.contains("active") ? "block" : "none";

      // Optional: Close other items
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          const otherAnswer = i.querySelector(".faq-answer");
          if (otherAnswer) otherAnswer.style.display = "none";
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    // Ensure answer is hidden initially
    answer.style.display = "none";

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all answers
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.display = "none";
      });

      // Toggle current answer
      if (!isActive) {
        item.classList.add("active");
        answer.style.display = "block";
      }
    });
  });
});
// FAQs: Toggle on .faq-item click
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    const isOpen = answer.style.display === 'block';

    // Hide all other answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.display = 'none';
    });

    // Toggle current one
    answer.style.display = isOpen ? 'none' : 'block';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const currentlyVisible = answer.style.display === "block";

      // Hide all
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.display = "none";
      });

      // Toggle current
      answer.style.display = currentlyVisible ? "none" : "block";
    });
  });
});
