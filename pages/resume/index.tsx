import Resume from "../../components/Resume";
import ResumeV2 from "../../components/ResumeV2";
import { getResume, getResumeV2 } from "../../shared/api";


function ResumePage({ resume }) {
  return <Resume resume={resume} />;
}

export async function getServerSideProps({ query }) {
  const resume = await getResume(query.key) || null;
  return {
    props: {
      resume,
    }, // will be passed to the page component as props
  };
}

export default ResumePage;
