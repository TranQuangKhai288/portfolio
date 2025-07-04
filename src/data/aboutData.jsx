const aboutData = {
    title: "About Me",
    subtitle: "Discover my journey, passions, and the story behind my work",
    image: "/assets/profile.jpg",

    biodata: [
        { label: "Name", value: "Tran Quang Khai", icon: "bx bx-id-card" },
        { label: "Date of Birth", value: "August,28-2003", icon: "bx bx-calendar" },
        { label: "Place", value: "Thu Duc, Ho Chi Minh City", icon: "bx bx-map" },
        { label: "Email", value: "dev.khaitran@gmail.com", icon: "bx bx-envelope" },
        { label: "Phone", value: "+84 389346149", icon: "bx bx-phone" },
        { label: "Education", value: "University of Information Technology", icon: "bx bx-book" },
        // { label: "GPA", value: "3.55 / 4.00", icon: "bx bx-award" },
    ],

    resume: {
        label: "Download My Resume",
        href: null,
        icon: "bx bx-download",
    },

    aboutNarrative: {
        whoAmI: {
            text: `I'm a software developer who builds responsive, interactive applications with clean code. With a background in Informatics Engineering, I blend problem-solving skills with technical implementation.`,
            icon: "bx-info-circle"
        },
        approach: {
            text: `I focus on clean code, performance optimization, and user experience - constantly learning modern technologies to build reliable software solutions.`,
            icon: "bx-bulb"
        }
    }


};

export default aboutData;
