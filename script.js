// DOM Elements
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".signup-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const closePopup = document.querySelector(".icon-close");
const overlay = document.querySelector(".overlay-bg");

// Event Listeners for Login/Register Popup
registerLink?.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink?.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup?.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  overlay.classList.add("active");
});

closePopup?.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  overlay.classList.remove("active");
});

let subMenu = document.getElementById(".sub-menu-wrap");
function toggleMenu() {
  const subMenu = document.querySelector(".sub-menu-wrap");
  subMenu.classList.toggle("open-menu");
}

// Toggle Modal Visibility
function toggleLogin() {
  document.querySelector(".bookingModal")?.classList.toggle("hidden");
}

function toggleModal() {
  document.getElementById("bookingModal")?.classList.toggle("hidden");
}

// Open Booking Modal Based on Type
function openBookingModal(type) {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  const formTitle = modal.querySelector(".booking-form h2");
  const select = document.getElementById("roomSelect");

  modal.classList.remove("hidden");

  const optionsMap = {
    room: [
      { value: "tala", label: "Tala" },
      { value: "sulyap", label: "Sulyap" },
      { value: "gunita", label: "Gunita" },
    ],
    hall: [
      { value: "grandhall", label: "Grand Hall" },
      { value: "gardenhall", label: "Garden Hall" },
    ],
    amenity: [
      { value: "pool", label: "Pool" },
      { value: "spa", label: "Spa" },
      { value: "gym", label: "Gym" },
    ],
  };

  formTitle.textContent = `${
    type.charAt(0).toUpperCase() + type.slice(1)
  } Booking`;
  select.innerHTML = optionsMap[type]
    .map((opt) => `<option value="${opt.value}">${opt.label}</option>`)
    .join("");

  updateRoomDetails();
}

// Update Room/Amenity/Hall Details Dynamically
function updateRoomDetails() {
  const select = document.getElementById("roomSelect");
  const image = document.getElementById("roomImage");
  const price = document.getElementById("roomPrice");
  const desc = document.getElementById("roomDescription");

  const value = select.value;

  const data = {
    tala: {
      img: "tala.jpg",
      price: "₱10,000",
      desc: "Tala is a cozy and elegant room perfect for intimate gatherings.",
    },
    sulyap: {
      img: "sulyap.jpg",
      price: "₱12,000",
      desc: "Sulyap offers scenic views and modern comforts.",
    },
    gunita: {
      img: "gunita.jpg",
      price: "₱15,000",
      desc: "Gunita is a premium suite designed for luxury stays.",
    },
    grandhall: {
      img: "grandhall.jpg",
      price: "₱50,000",
      desc: "Grand Hall is ideal for large events like weddings.",
    },
    gardenhall: {
      img: "gardenhall.jpg",
      price: "₱35,000",
      desc: "Garden Hall features a scenic outdoor venue.",
    },
    pool: {
      img: "pool.jpg",
      price: "₱5,000",
      desc: "Relax and unwind in our crystal-clear pool.",
    },
    spa: {
      img: "spa.jpg",
      price: "₱3,000",
      desc: "Rejuvenate with professional spa services.",
    },
    gym: {
      img: "gym.jpg",
      price: "₱2,000",
      desc: "Stay fit with our fully equipped gym.",
    },
  };

  if (data[value]) {
    image.src = data[value].img;
    price.textContent = data[value].price;
    desc.textContent = data[value].desc;
  }
}

// Equipment Data
const equipmentData = [
  {
    name: "Projector",
    description: "HD projector with HDMI",
    price: "₱1,500",
    image: "background.jpg",
  },
  {
    name: "Speaker",
    description: "Loud speaker set",
    price: "₱800",
    image: "background.png",
  },
  {
    name: "Whiteboard",
    description: "Magnetic board",
    price: "₱500",
    image: "background.jpg",
  },
  {
    name: "Mic Stand",
    description: "Adjustable stand",
    price: "₱300",
    image: "background.png",
  },
  {
    name: "Lights",
    description: "Stage lights set",
    price: "₱1,200",
    image: "background.jpg",
  },
];

// Render Equipment Items
const equipmentList = document.getElementById("equipmentList");

if (equipmentList) {
  equipmentData.forEach((eq) => {
    const item = document.createElement("div");
    item.className = "equipment-item";
    item.innerHTML = `
      <img src="${eq.image}" alt="${eq.name}">
      <h4>${eq.name}</h4>
      <p>${eq.description}</p>
      <strong style="color:#53280a;">${eq.price}</strong>
    `;
    equipmentList.appendChild(item);
  });
}

// Testimonials Data
const testimonials = [
  {
    name: "Maria Clara",
    venue: "Gunita Hall",
    feedback: "The ambiance was amazing. Perfect for our engagement!",
    rating: 5,
  },
  {
    name: "Juan Dela Cruz",
    venue: "Tala Room",
    feedback: "Everything was smooth and organized. Highly recommended.",
    rating: 4,
  },
  {
    name: "Liza Soberano",
    venue: "Sulyap Room",
    feedback: "Beautiful interiors and attentive staff!",
    rating: 5,
  },
];

// Render Testimonials
function displayTestimonials() {
  const container = document.getElementById("testimonialList");
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (t) => `
      <div class="testimonial-card">
        <p>${t.feedback}</p>
        <div class="testimonial-footer">
          ${t.name}
          <span>${t.venue}</span>
          <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(
        5 - t.rating
      )}</div>
        </div>
      </div>
    `
    )
    .join("");
}

displayTestimonials();
