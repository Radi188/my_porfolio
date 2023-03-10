import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    vueweather,
    vuecommerce,
    todolist,
    movieapp,
    ecommerce,
    mobilecommerce,
    morakot,
    ltc,
    unibrand,
    ajgroup,
    oa,
    ub,
    wbsv,
    creator,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Reactjs, Vuejs, Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Assistant software developer",
        company_name: "Light Technology Cambo",
        icon: ltc,
        iconBg: "#383E56",
        date: "August 2019 - January 2020",
        points: [
            "Developing and maintaining Software useing Vb.net , C# with SQL server.",
            "Working directly with customer to get all requirement to develop management system",
            "Developing Queue system while working as a Assistant Software developer",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Internship Web Developer",
        company_name: "Morakot technology",
        icon: morakot,
        iconBg: "#E6DEDD",
        date: "Feb 2020 - April 2020",
        points: [
            "Developing and maintaining web applications using Python, Docker and other related technologies.",
            "Leaning many thing while internship such Python, PostgreSQL, Morakot Framework, Flash Framework, Jinja and other related technologie",
            "Implementing Deployment management system as final project while internship.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer and Design",
        company_name: "Unibrand",
        icon: unibrand,
        iconBg: "#383E56",
        date: "November 2020 - Jan 2022",
        points: [
            "Developing and maintaining web applications using Html, Css, Javscript, Webflow and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "France Aj Group",
        icon: ajgroup,
        iconBg: "#E6DEDD",
        date: "April 2022 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js, restfulapi, Vuejs, Next js, React Native and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Vue-Commerce",
        description:
            "Web application platform that allows users to Order, Add product to cart, Checkout Product and payent with Credit Card useing Stripejs",
        tags: [
            {
                name: "Vue",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            },
            {
                name: "Bootstrap5",
                color: "pink-text-gradient",
            },
        ],
        image: vuecommerce,
        source_code_link: "https://github.com/Radi188/vue-commerce/",
    },
    {
        name: "Weather App",
        description:
            "Web application that enables users to search for specifics location and weather, Enable to user to check up for weather on a real-time",
        tags: [
            {
                name: "Vue",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: vueweather,
        source_code_link: "https://github.com/Radi188/weather_app/",
    },
    {
        name: "Todo-list",
        description:
            "A Web-base that allow user to add, edit, update, delete a todo list and complete the task finished.",
        tags: [
            {
                name: "Vue",
                color: "green-text-gradient",
            },
            {
                name: "LocalStorage",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: todolist,
        source_code_link: "https://github.com/Radi188/vue_todo_list",
    },
    {
        name: "Movie app",
        description:
            "Web-base that allow user to search up for movie that user love to watch.",
        tags: [
            {
                name: "vue",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: movieapp,
        source_code_link: "https://github.com/Radi188/Movie_app",
    },
    {
        name: "E-commerce Nextjs",
        description:
            "Another Ecommerce project that show product to user with different category and allow user to contact direct to Supplier via Whatapp",
        tags: [
            {
                name: "Nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/Radi188/nextjs-ecommerce",
    },
    {
        name: "E-commerce React Native",
        description:
            "E-commerce project that develop with React Native with the purpose to showcase the product to user easier to take a view of product that company has.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "React Component",
                color: "pink-text-gradient",
            },
        ],
        image: mobilecommerce,
        source_code_link: "https://github.com/Radi188/mobile-ecommerce",
    },
    {
        name: "Website project for WorldBridge Sportvillage",
        description:
            "Website Porject that developer with Htm, Css, Javascript and have webflow as framework",
        tags: [
            {
                name: "Html",
                color: "orange-text-gradient",
            },
            {
                name: "Css",
                color: "pink-text-gradient",
            },
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
        ],
        image: wbsv,
        source_code_link: "https://github.com/Radi188/WBSV",
    },
    {
        name: "Website project for Orient Advisor",
        description:
            "Website Porject that developer with Htm, Css, Javascript and have webflow as framework",
        tags: [
            {
                name: "Html",
                color: "orange-text-gradient",
            },
            {
                name: "Css",
                color: "pink-text-gradient",
            },
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
        ],
        image: oa,
        source_code_link: "https://github.com/Radi188/Website-Oa",
    },
    {
        name: "Website project for Unibrand",
        description:
            "Website Porject that developer with Htm, Css, Javascript and have webflow as framework",
        tags: [
            {
                name: "Html",
                color: "orange-text-gradient",
            },
            {
                name: "Css",
                color: "pink-text-gradient",
            },
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
        ],
        image: ub,
        source_code_link: "https://github.com/Radi188/Ub_Portfolio",
    },
];

export { services, technologies, experiences, testimonials, projects };