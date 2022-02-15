export interface Project
{
  ID: string,
  Name: string,
  Image: string[],
  Description: {full: string, summary: string},
  Client: string,
  Technologies: [{name: string, image: string}],
  Github: {available: boolean, link: string},
  Live: {available: boolean, link: string},
  Video: string,
  Complete: boolean
}
