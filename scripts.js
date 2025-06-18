// Плавный скролл навигации
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});

// Слайдер галереи
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Автопрокрутка слайдов каждые 6 секунд
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);

// Слайдер отзывов
const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle('active', i === index);
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

// Запускаем автопрокрутку отзывов каждые 8 секунд
setInterval(nextReview, 8000);

// Инициализация слайдеров при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  showReview(currentReview);
});
