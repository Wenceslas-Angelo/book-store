const header2 = document.querySelector("header .header-two");
const searchForm = document.querySelector("header .header-one form");
const searchBtn = document.querySelector("#search-btn");

const loginForm = document.querySelector(".login-form-container");
const loginBtn = document.querySelector("#login-btn");
const closeLoginBtn = document.querySelector("#close-login-btn");

const featuredWrapper = document.querySelector("#featured .swiper-wrapper");
const arrivalWrapper = document.querySelectorAll("#arrivals .swiper-wrapper");

const books = [
  {
    id: 1,
    image: "./image/book-1.png",
    oldPrice: 55.99,
    newPrice: 40.99,
  },
  {
    id: 2,
    image: "./image/book-2.png",
    oldPrice: 10.0,
    newPrice: 9.0,
  },
  {
    id: 3,
    image: "./image/book-3.png",
    oldPrice: 16.09,
    newPrice: 11.09,
  },
  {
    id: 4,
    image: "./image/book-4.png",
    oldPrice: 1005.0,
    newPrice: 220.0,
  },
  {
    id: 5,
    image: "./image/book-5.png",
    oldPrice: 215.99,
    newPrice: 90.99,
  },
  {
    id: 6,
    image: "./image/book-6.png",
    oldPrice: 80.99,
    newPrice: 20.99,
  },
  {
    id: 7,
    image: "./image/book-7.png",
    oldPrice: 75.9,
    newPrice: 40.99,
  },
  {
    id: 8,
    image: "./image/book-8.png",
    oldPrice: 15.99,
    newPrice: 10.99,
  },
  {
    id: 9,
    image: "./image/book-9.png",
    oldPrice: 105.99,
    newPrice: 50.99,
  },
  {
    id: 10,
    image: "./image/book-10.png",
    oldPrice: 30.99,
    newPrice: 20.99,
  },
];

books.forEach((book) => {
  featuredWrapper.innerHTML += `
  <div class="swiper-slide box">
    <div class="icons">
      <a href="#"><i class="fas fa-search"></i></a>
      <a href="#"><i class="fas fa-heart"></i></a>
      <a href="#"><i class="fas fa-eye"></i></a>
    </div>
    <div class="image">
      <img src="${book.image}" alt="book image" />
    </div>
    <div class="content">
      <h3>Featured books</h3>
      <div class="price">$${book.newPrice} <span>$${book.oldPrice}</span></div>
      <a href="#" class="btn">Add to cart</a>
    </div>
  </div>`;
});

books.forEach((book, index) => {
  index < 5
    ? (arrivalWrapper[0].innerHTML += `
    <a href="#" class="swiper-slide box">
      <div class="image">
        <img src="${book.image}" alt="book image" />
      </div>
      <div class="content">
        <h3>New arrivals</h3>
        <div class="price">$${book.newPrice}<span>$${book.oldPrice}</span></div>
        <div class="stars">
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star-half-alt"></i></span>
        </div>
      </div>
    </a>
  `)
    : (arrivalWrapper[1].innerHTML += `
  <a href="#" class="swiper-slide box">
    <div class="image">
      <img src="${book.image}" alt="book image" />
    </div>
    <div class="content">
      <h3>New arrivals</h3>
      <div class="price">$${book.newPrice}<span>$${book.oldPrice}</span></div>
      <div class="stars">
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star-half-alt"></i></span>
      </div>
    </div>
  </a>
`);
});

window.addEventListener("scroll", () => {
  searchForm.classList.remove("show");
  window.scrollY > 80
    ? header2.classList.add("active")
    : header2.classList.remove("active");
});

window.addEventListener("load", () => {
  window.scrollY > 80
    ? header2.classList.add("active")
    : header2.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("show");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("show");
});

closeLoginBtn.addEventListener("click", () => {
  loginForm.classList.remove("show");
});

const swiperHome = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperFeatured = new Swiper(".featured-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const swiperArrivals = new Swiper(".arrivals-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
