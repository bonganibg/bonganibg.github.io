export interface LandingPageModel
{
    hero: LandingHeroModel,
    expertise: LandingExpertiseModel[],
    services: LandingServiceModel[],
    industry_header: LandingIndustriesHeading,
    industries: LandingIndustry[]
}

export interface LandingHeroModel
{
    small_header: string,
    big_header: string,
    paragraph: string
}

export interface LandingExpertiseModel
{
    name: string,
    paragraph: string,
    page_link: string
}

export interface LandingServiceModel
{
    image: string,
    name: string,
    paragraph: string
}

export interface LandingIndustriesHeading
{
    slogan: string,
    paragraph: string,
}

export interface LandingIndustry
{
    image: string,
    name: string,
    work: string[]
}
