export interface Project
{
  ID: string,
  Name: string,
  Image: string,
  Description: String,
  Client: string,
  Platforms: string[],
  Technologies: string[],
  Github: {available: boolean, link: string},
  Live: {available: boolean, link: string},
  Blog: string,
  Complete: boolean
}
