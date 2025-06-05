const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".signup-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const closePopup = document.querySelector(".icon-close");
const overlay = document.querySelector(".overlay-bg");
const roomClick = document.querySelector(".venue-items.room");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

closePopup.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  overlay.classList.add("active");
});

closePopup.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  overlay.classList.remove("active");
});

function toggleLogin() {
  document.getElementByClass("bookingModal").classList.toggle("hidden");
}

function toggleModal() {
  document.getElementById("bookingModal").classList.toggle("hidden");
}

function openBookingModal(type) {
  const modal = document.getElementById("bookingModal");
  const formTitle = modal.querySelector(".booking-form h2");
  const select = document.getElementById("roomSelect");

  modal.classList.remove("hidden");

  if (type === "room") {
    formTitle.textContent = "Room Booking";
    select.innerHTML = `
      <option value="tala">Tala</option>
      <option value="sulyap">Sulyap</option>
      <option value="gunita">Gunita</option>
    `;
  } else if (type === "hall") {
    formTitle.textContent = "Hall Booking";
    select.innerHTML = `
      <option value="grandhall">Grand Hall</option>
      <option value="gardenhall">Garden Hall</option>
    `;
  } else if (type === "amenity") {
    formTitle.textContent = "Amenity Booking";
    select.innerHTML = `
      <option value="pool">Pool</option>
      <option value="spa">Spa</option>
      <option value="gym">Gym</option>
    `;
  }

  updateRoomDetails();
}

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

// Equipments
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
  {
    name: "Mic Stand",
    description: "Adjustable stand",
    price: "₱300",
    image: "background.png",
  },
  {
    name: "Mic Stand",
    description: "Adjustable stand",
    price: "₱300",
    image: "background.png",
  },
];

const list = document.getElementById("equipmentList");

equipmentData.forEach((eq) => {
  const item = document.createElement("div");
  item.className = "equipment-item";
  item.innerHTML = `
    <img src="${eq.image}" alt="${eq.name}">
    <h4>${eq.name}</h4>
    <p>${eq.description}</p>
    <strong style="color:#53280a;">${eq.price}</strong>
  `;
  list.appendChild(item);
});

const scrollContainer = document.querySelector(".equipment-list");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
