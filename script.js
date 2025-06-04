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

function updateRoomDetails() {
  const room = document.getElementById("roomSelect").value;
  const roomImage = document.getElementById("roomImage");
  const roomPrice = document.getElementById("roomPrice");
  const roomDescription = document.getElementById("roomDescription");

  const rooms = {
    tala: {
      img: "room-tala.jpg",
      price: "₱10,000",
      desc: "Tala is a cozy and elegant room perfect for intimate gatherings.",
    },
    sulyap: {
      img: "room-sulyap.jpg",
      price: "₱8,000",
      desc: "Sulyap offers a nostalgic and warm ambiance for family events.",
    },
    gunita: {
      img: "room-gunita.jpg",
      price: "₱12,000",
      desc: "Gunita is a spacious venue ideal for larger parties and receptions.",
    },
  };

  const selected = rooms[room];
  roomImage.src = selected.img;
  roomPrice.textContent = selected.price;
  roomDescription.textContent = selected.desc;
}
