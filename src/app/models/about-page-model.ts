export interface AboutPageModel
{
  about_me:AboutSectionModel[],
  technologies: TechnologiesSectionModel[],
  questions: AboutSectionModel
}

export interface AboutSectionModel
{
  _id: string,
  heading: string,
  paragraph: string
}

export interface TechnologiesSectionModel{
  _id: string,
  heading: string,
  technologies: {
    _id: string,
    name: string
  }
}

export interface TechnologiesModel{
  _id: string,
  name: string,
  description: string,
  score: number,
  icon: string
}
