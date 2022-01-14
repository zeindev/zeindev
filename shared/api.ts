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
      resumeCollection(${resumeFilter} limit: 1) {
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
          skillsCollection {
            items {
              type,
              description
            }
          },
          experienceCollection {
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
          educationCollection {
            items {
              type,
              title,
              institution,
              location,
              startYear,
              endYear
            }
          },
        }
      }
    }`,
  );
  return resume.data ? resume.data.resumeCollection.items[0] : false;
}