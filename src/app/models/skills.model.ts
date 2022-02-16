export interface Skills
{
  Design: {
    Heading: string,
    Image: string,
    Description: string,
    Design: {headline: string, experience: string[], tools: string[]},
    Implementation: {headline: string, languages: string[], frameworks: string[]}
  },

  Programming: {
    Heading: string,
    Image: string,
    Description: string,
    Languages: { headline: string,  languages: string[]},
    Frameworks: { headline: string, frameworks: string[] }
  },

  Database: {
    Heading: string,
    Image: string,
    Description: string,
    Languages: {headline: string, languages: string[]},
    Software: { headline: string, systems: string[] },
    Cloud: { headline: string, platforms: string[] }
  }

}
