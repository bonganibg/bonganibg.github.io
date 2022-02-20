import { ArticleSection } from "./project-article.model";

export interface Project
{
  ID: string,
  Name: string,
  Image: string[],
  Description: {full: ArticleSection[], summary: string, overview: string},
  Client: string,
  Platforms: string[],
  Technologies: string[],
  Services: string[],
  Responsibilities: string[],
  Github: {available: boolean, link: string},
  Live: {available: boolean, link: string},
  Video: string,
  Complete: boolean
}
