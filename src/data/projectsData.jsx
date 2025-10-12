import CupidBanner from "../assets/images/cupid-banner.png";
import LapTechBanner from "../assets/images/laptech.png";
import CupidLogin from "../assets/images/cupid-login.png";
import CupidHome from "../assets/images/cupid-home.png";
import CupidChat from "../assets/images/cupid-chat.png";
import CupidConnecting from "../assets/images/cupid-connecting.png";
import Cupidexplore from "../assets/images/cupid-explore.png";
import Cupidmatch from "../assets/images/cupid-match.png";
import Cupidmessage from "../assets/images/cupid-message.png";
import Cupidprofile from "../assets/images/cupid-profile.png";

const projectsData = [
  {
    name: "Cupid Echo - Random Dating App",
    description:
      "A dating app that connects people based on shared interests and location, featuring real-time chat and profile matching.",
    icon: "bx bx-user",
    demo: "#",
    github: "https://github.com/TranQuangKhai288/CupidEcho",
    image: CupidBanner,
    // demoImages: use local assets or remote screenshots per project
    demoImages: [
      CupidBanner,
      CupidLogin,
      CupidHome,
      CupidChat,
      CupidConnecting,
      Cupidexplore,
      Cupidmatch,
      Cupidmessage,
      Cupidprofile,
    ],
    tags: [
      "React Native",
      "Expo 53",
      "TailwindCSS-Nativewind",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Real-time",
      "Matchmaking",
      "Geolocation",
      "Push Notifications",
    ],
  },
  {
    name: "UIT Social App",
    description:
      "A social media platform for UIT students, featuring real-time chat, notifications, and user profiles with modern UI/UX design.",
    icon: "bx bx-group",
    demo: "#",
    github: "https://github.com/TranQuangKhai288/uit-social-app",
    image:
      "https://lh3.googleusercontent.com/pw/AP1GczOqJ7CgK6h1IZz4i3Tir9xh7zsz1dFkT5zzV-1SkqHayZJVpSUtkrx4Pth5cajnpgXgkCeJSZqXZ4xhPEpRDv3z-b01z7oRwUAY6AOleB6ntICLQF5zteoCfnwrn6V_a3ZJPorgGjxsvsy7IpDVHrY=w903-h312-s-no-gm?authuser=0",
    demoImages: [
      "https://lh3.googleusercontent.com/pw/AP1GczOqJ7CgK6h1IZz4i3Tir9xh7zsz1dFkT5zzV-1SkqHayZJVpSUtkrx4Pth5cajnpgXgkCeJSZqXZ4xhPEpRDv3z-b01z7oRwUAY6AOleB6ntICLQF5zteoCfnwrn6V_a3ZJPorgGjxsvsy7IpDVHrY=w903-h312-s-no-gm?authuser=0",
    ],
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Real-time"],
  },
  {
    name: "Laptech - Laptop E-commerce Website",
    description:
      "An e-commerce website specializing in laptops, featuring product listings, user reviews, and a secure checkout process.",
    icon: "bx bx-cart",
    demo: "#",
    github: "https://github.com/TranQuangKhai288/laptech",
    image: LapTechBanner,
    demoImages: [LapTechBanner],
    tags: ["Next.js", "TailwindCSS", "Ant Design"],
  },
];

export default projectsData;
