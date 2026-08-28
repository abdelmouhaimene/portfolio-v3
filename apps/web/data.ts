import {
    servicesDataType,
    PortfolioDataType,
    pricingDataType,
    processDataType,
    testimonialDataType,
    contactDataType
} from '@/dataTypes'

export const servicesData: servicesDataType = [
    {
        name : "Animation 2D",
        descreption1 : "Pixel Studios provides high-quality and affordable 2D animation services. Our experienced animators and designers work closely with clients to translate concepts into visually striking animated videos and motion graphics.",
        descreption2 : "Whether you need an explainer video or social media ads, our animations feature smooth character movement, vivid scenes, and consistent graphics.",
        descreption3 : "We also create informative whiteboards and motion graphic animations to explain complex concepts visually. All projects are accurately estimated and delivered on time.",
        image : "/services/2d-animation.gif",
    },
    {
        name : "Animation 3D",
        descreption1 : "Take your projects to the next dimension with Pixel Studios' high-end 3D animation services. Our 3D artists bring objects, characters, and virtual worlds to life using the latest 3D modeling, rigging, and simulation tools.",
        descreption2 : "We can create immersive 3D animated promotions, product demos, architectural visualizations, and more. Our animators treat each project with care, accurately capturing the envisioned style, tone, and behaviors.",
        descreption3 : "We provide 3D animation, character animation, terrain modeling, textures, lighting, camera work, and rendering services.",
        image : "/services/3d-animation.gif",
    },
    {
        name : "Motion graphic",
        descreption1 : "Pixel Studios helps you create visually striking motion graphic content for your videos through animation, graphics, text, and visual effects.",
        descreption2 : "Our designers craft compelling animations and understand client goals, styles, and target platforms to smoothly integrate motion.",
        descreption3 : "Using Adobe tools, our artists conceptualize unique animations featuring smooth transitions, engaging text, and blended 2D/3D elements. We pay attention to pacing, hierarchy, and comprehension across devices.",
        image : "/services/motion_graphic.gif",
    },
    {
        name : "White board",
        descreption1 : "Explain complex topics simply and engagingly with whiteboard animations. Our artists distill messages into key stages and drawings like a live whiteboard session.",
        descreption2 : "Fluid animations bring drawings to life with realistic marker strokes. Tailored voiceovers and feedback-polished mock-ups clearly explain topics. We integrate elements like characters for engagement and optimize the final video for all platforms.",
        descreption3 : "",
        image : "/services/white_board.gif",
    },
    {
        name : "Logo animation",
        descreption1 : "Bring your logo to everyone's attention with creative logo animations. Our expert designers and animators understand your brand through discussion to determine animated approaches that accentuate your logo through movement and visual elements.",
        descreption2 : "ll animations are optimized for websites, social media, and videos with smooth motion and readability in varied sizes. Transparent collaboration allows for conveying feedback until approval.",
        descreption3 : "",
        image : "/services/logo_animation.gif",
    },
    {
        name : "Video editing",
        descreption1 : "Pixel Studios transforms raw footage into polished videos through expert editing. We discuss objectives and target audiences to determine structure, pace, and direction.",
        descreption2 : "During editing, expect meticulous audio, color, effects, and additional sourcing if needed. Extensive reviews help refine videos that convey messages respecting deadlines and quality.",
        descreption3 : "Specialized captioning, subtitling, and localization allow global outreach with ongoing maintenance.",
        image : "/services/video_editing.gif",
    },
]

export const portfolioData: PortfolioDataType = [
    {
        name : '2D Animation',
        projects : [
            {
                name: 'project 1',
                descreption : 'project descreption',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                 descreption : 'project descreption',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                 descreption : 'project descreption',
                image: '/services/motion_graphic.gif'
            },
            {
                name: 'project 1',
                descreption : 'project descreption',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                 descreption : 'project descreption',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                 descreption : 'project descreption',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : '3D Animation',
        projects : [
            {
                name: 'project 1',
                descreption : 'project descreption',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                 descreption : 'project descreption',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                 descreption : 'project descreption',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : 'Explainer videos',
       projects : [
            {
                name: 'project 1',
                descreption : 'project descreption',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                 descreption : 'project descreption',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                 descreption : 'project descreption',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : 'Whiteboard animation',
       projects : [
            {
                name: 'project 1',
                descreption : 'project descreption',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                 descreption : 'project descreption',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                 descreption : 'project descreption',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : 'Logo animation',
       projects : [
            {
                name: 'project 1',
                descreption : 'project descreption',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                 descreption : 'project descreption',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                 descreption : 'project descreption',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
]

export const pricingData: pricingDataType = [
    {
        name : 'Pack Basic',
        image : '/packs/cart1.webp',
        price : 100,
        oldPrice: 200,
        descreption: 'Basic pack descreption',
        offers : ['60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video','Dedicated Support']
    },
    {
        name : 'Pack Professional',
        image : '/packs/cart2.webp',
        price : 200,
        oldPrice: 300,
        descreption: 'Professional pack descreption',
        offers : ['60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video','Dedicated Support']
    },
    {
        name : 'Pack Primium',
        image : '/packs/cart3.webp',
        price : 300,
        oldPrice: 400,
        descreption: 'Primium pack descreption',
        offers : ['60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video','Dedicated Support','60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video']
    },
]

export const processData: processDataType = [
    {
        title: 'Workshops',
        image : '/process/process-icon-1.webp',
        descreption :'To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding deliverables.'
    },
    {
        title: 'Planning',
        image : '/process/process-icon-2.webp',
        descreption :'A lot goes into the planning stage, such as industry research, competitor research, selecting marketing channels, and strategy development. We recommend the best course of action for digitalization.'
    },
    {
        title: 'A/B Testing',
        image : '/process/process-icon-3.webp',
        descreption :'From experimenting with content to testing advertisements and marketing techniques, we do all it takes to analyze the audience’s behavior and make alterations accordingly for maximum outreach.'
    },
    {
        title: 'Execution',
        image : '/process/process-icon-4.webp',
        descreption :'Moving forth with execution, we analyze processes, create campaigns, optimize strategies, and produce content to secure a better ranking. We aim for quality, results, and business growth.'
    },
    {
        title: 'Implementation',
        image : '/process/process-icon-5.webp',
        descreption :'Now, for the exciting part, we get our hands dirty with launching your project and incorporating changes as your business changes. Are you ready to get started?'
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
