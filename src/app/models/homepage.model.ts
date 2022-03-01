import { FeaturedProjects } from "./featured.model";
import { Heading } from "./header.model";
import { Project } from "./project.model";
import { Skills } from "./skills.model";

export interface Homepage
{
  Featured: Project[],
  Heading: Heading,
  Skills: Skills
}
