import Resume from "../../components/Resume";
import ResumeV2 from "../../components/ResumeV2";
import { getResume, getResumeV2 } from "../../shared/api";


function ResumeV2Page({ resume }) {
  return <ResumeV2 resume={resume} />;
}

export async function getServerSideProps({ query }) {
  const resume = await getResumeV2(query.key) || null;
  return {
    props: {
      resume,
    }, // will be passed to the page component as props
  };
}

export default ResumeV2Page;
