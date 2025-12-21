import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const footerData = {
  mainMenu: [
    { label: "About", href: "/about" },
    { label: "Menus", href: "/menu" },
    { label: "Offer", href: "/offer" },
    { label: "Events", href: "/events" },
  ],
  information: [
    { label: "Contact", href: "/contact" },
    { label: "Order & Returns", href: "/order" },
    { label: "Videos", href: "/videos" },
    { label: "Reservation", href: "/reservation" },
  ],
  address: {
    location: "Av. Hacienda 1234 Lima 4321, Perú",
    hours: "9AM - 11PM",
  },
  socials: [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
  ],
  paymentCards: [
    "/assets/icons/footer-card-1.png",
    "/assets/icons/footer-card-2.png",
    "/assets/icons/footer-card-3.png",
    "/assets/icons/footer-card-4.png"
  ],
};

export default footerData;