async function fetchGraphQL(query : string = '') {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

export async function getResume(key: string) {
  if (!key) {
    return
  }
  const resumeFilter = key ? `where: { accessKey: "${decodeURIComponent(key)}" }, ` : `where: { accessToken: "" }, `;
  const resume = await fetchGraphQL(
    `query {
      resumeV2Collection(${resumeFilter} limit: 1) {
        items {
          targetAudience,
          name,
          position,
          phone,
          city,
          province,
          website,
          email,
          summary,
          skillsCollection(limit: 10) {
            items {
              type,
              description
            }
          },
          experienceCollection(limit: 10) {
            items {
              position,
              employer,
              location,
              startDate,
              endDate,
              isCurrentPosition,
              tasks
            }
          },
          educationCollection(limit: 5) {
            items {
              type,
              title,
              institution,
              location,
              startYear,
              endYear
            }
          },
          projectsCollection(limit: 5) {
            items {
              title,
              tasks,
              link,
              slideshow {
                title,
                slidesCollection { 
                  items {
                    description,
                    image {
                      url
                    },
                    codeSnippet
                  }
                }
              }
            }
          },
          hobbies,
        }
      }
    }`,
  );
  return resume.data ? resume.data.resumeV2Collection.items[0] : false;
}

export async function getLetter(key: string) {
  if (!key) {
    return
  }
  const letterFilter = key ? `where: { accessKey: "${decodeURIComponent(key)}" }, ` : `where: { accessToken: "" }, `;
  const letter = await fetchGraphQL(
    `query {
      resumeV2Collection(${letterFilter} limit: 1) {
        items {
          targetAudience,
          name,
          position,
          phone,
          city,
          province,
          website,
          email,
          employerAddress,
          coverLetterDate,
          recruiterName,
          recruiterPosition,
          coverLetterTitle,
          coverLetter
        }
      }
    }`,
  );
  return letter.data ? letter.data.resumeV2Collection.items[0] : false;
}

