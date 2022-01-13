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

export async function getResume(accessToken : string) {
  const resumeFilter = accessToken ? `where: { accessToken: "${decodeURIComponent(accessToken)}" }, ` : '';
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
  return resume.data.resumeCollection.items[0];
}

export async function getResumeSkills() {
  const skills = await fetchGraphQL(
    `query {
      skillCollection(limit: 20) {
        items {
          type,
          description
        }
      }
    }`,
  );
  return skills.data.skillCollection.items;
}