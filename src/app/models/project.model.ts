export interface Project{
  _id: string,
  name: string,
  img_url: string,
  short_description: string,
  tags: Tag[]
  detail: ProjectDetail
}

export interface Tag{
  _id: string,
  name: string
}

export interface ProjectDetail{
  title: string,
  platform: string[],
  description: string,
  language: string[],
  tools: string[],
  link: string
}
