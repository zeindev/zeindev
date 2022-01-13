import Resume from "../../components/Resume";
import { getResume } from "../../shared/api";

function HomePage({ resume }) {
  return <Resume resume={resume} />;
}

export async function getServerSideProps({ query }) {
  const resume = await getResume(query.accessToken);
  return {
    props: {
      resume,
    }, // will be passed to the page component as props
  };
}

export default HomePage;
