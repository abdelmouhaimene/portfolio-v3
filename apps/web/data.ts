import {
    processDataType,
    testimonialDataType,
    contactDataType
} from './dataTypes'


export const processData: processDataType = [
    {
        title: 'Discover',
        image : '/process/process-icon-1.webp',
        descreption :'We start by understanding your business, goals, challenges, and requirements to define the right solution.'
    },
    {
        title: 'Plan',
        image : '/process/process-icon-2.webp',
        descreption :'We transform your needs into a clear roadmap, defining the architecture, features, technologies, and project milestones.'
    },
    {
        title: 'Design & Develop',
        image : '/process/process-icon-3.webp',
        descreption :'Our team creates intuitive and modern user experiences, and builds your solution using modern technologies, clean code, and scalable architecture.'
    },
    {
        title: 'Test & Refine',
        image : '/process/process-icon-4.webp',
        descreption :'We thoroughly test the product, identify issues, optimize performance, and refine the experience.'
    },
    {
        title: 'Deploy & Support',
        image : '/process/process-icon-5.webp',
        descreption :'We launch your solution and provide ongoing support, maintenance, and improvements as your business evolves.'
    },

]

export const testimonialData : testimonialDataType = [
    {
        companyName : 'Trustpoilot',
        companyLogo : '/testimonial/logo-img-01.png',
        review: "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
        author: { name : 'Steven Patterson' , position : 'Co-founder' }
    },
    {
        companyName : 'Google',
        companyLogo : '/testimonial/logo-img-02.png',
        review: "Pixel Studios worked with us and helped us create a great video. It portrayed our product in an easily understandable and visually attractive way.",
        author: { name : 'William Smith' , position : 'President & Founder' }
    },
    {
        companyName : 'Clutch',
        companyLogo : '/testimonial/logo-img-03.png',
        review: "They are a team of highly skilled and professional app developers. I hired them for my latest project, and they did it perfectly! We plan to have them develop more apps for us in the future.",
        author: { name : 'Taylor Leonard ' , position : 'Chief Marketing Officer' }
    },
    {
        companyName : 'Google',
        companyLogo : '/testimonial/logo-img-02.png',
        review: "We love working with Pixel Studios as they have been a great support to us. Their skills are on par, and we are happy with their work.",
        author: { name : 'Ronald Bowman' , position : 'Marketing Manager' }
    },
    {
        companyName : 'Trustpoilot',
        companyLogo : '/testimonial/logo-img-01.png',
        review: "Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
        author: { name : 'Steven Patterson' , position : 'Co-founder' }
    },
    {
        companyName : 'Google',
        companyLogo : '/testimonial/logo-img-02.png',
        review: "Pixel Studios worked with us and helped us create a great video. It portrayed our product in an easily understandable and visually attractive way.",
        author: { name : 'William Smith' , position : 'President & Founder' }
    },
    {
        companyName : 'Clutch',
        companyLogo : '/testimonial/logo-img-03.png',
        review: "They are a team of highly skilled and professional app developers. I hired them for my latest project, and they did it perfectly! We plan to have them develop more apps for us in the future.",
        author: { name : 'Taylor Leonard ' , position : 'Chief Marketing Officer' }
    },
    {
        companyName : 'Google',
        companyLogo : '/testimonial/logo-img-02.png',
        review: "We love working with Pixel Studios as they have been a great support to us. Their skills are on par, and we are happy with their work.",
        author: { name : 'Ronald Bowman' , position : 'Marketing Manager' }
    },
]

export const contactData : contactDataType = [
    {
        platform : 'Facebook',
        icon : '/contact/fb2.png',
        link : '/'
    },
    {
        platform : 'Instagram',
        icon : '/contact/insta.webp',
        link : '/'
    },
    {
        platform : 'LinkedIn',
        icon : '/contact/link.webp',
        link : '/'
    },
    {
        platform : 'Youtube',
        icon : '/contact/youtube.webp',
        link : '/'
    }
]
