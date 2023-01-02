export interface AboutPageModel
{
  about_me:AboutSectionModel[],
  technologies: TechnologiesSectionModel[],
  questions: QuestionSectionModel[]
}

export interface AboutSectionModel
{
  _id: string,
  heading: string,
  paragraph: string
}

export interface QuestionSectionModel{
  _id: string,
  question: string,
  answer: string
}

export interface TechnologiesSectionModel{
  _id: string,
  heading: string,
  technologies: TechModel[]
}

export interface TechModel{
  tech_id: string,
  name: string
}

export interface TechnologiesModel{
  _id: string,
  name: string,
  description: string,
  score: number,
  icon: string
}

export interface LinkModel{
  title: string,
  index: string
}
