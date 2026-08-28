//////////////////////////////////service section
export interface serviceType {
    name : string;
    descreption1 : string;
    descreption2 : string;
    descreption3 : string;
    image : string;
}
export type servicesDataType = serviceType[];

//////////////////////////////////portoflio section
export interface ProjectType {
    name: string;
    descreption : string
    image: string;
}

export interface PortfolioCategoryType {
    name: string;
    projects: ProjectType[];
}

export type PortfolioDataType = PortfolioCategoryType[];

//////////////////////////////////pricing section

export interface pricingPackType {
    name : string;
    image : string;
    price : number;
    oldPrice: number;
    descreption: string;
    offers : string[];
}

export type pricingDataType = pricingPackType[] ;

//////////////////////////////////process section

export interface processStepType {
    title : string;
    image : string;
    descreption: string;
}

export type processDataType = processStepType[];

//////////////////////////////////testimonialCard section

export interface testimonialType {
    companyName : string;
    companyLogo : string;
    review: string;
    author: { name : string , position : string }
}

export type testimonialDataType = testimonialType[];

//////////////////////////////////Contacts section

export interface contactType {
    platform : string;
    icon : string;
    link: string;
}

export type contactDataType = contactType[];