export interface Project{
  _id: string,
  name: string,
  img_url: string,
  short_description: string,
  tags: Tag[]
}

export interface Tag{
  _id: string,
  name: string
}
