import Header from "../components/Header";
import Summary from "../components/Summary";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import KeyRequired from "./KeyRequired";
import { withRouter } from 'next/router';

function Resume({ resume, router }) {
  const { query } = router;
  query.keyRequested && setTimeout(() => {
    router.push('/');
  }, 4000);
  return resume ? (
    <>
      <Header resume={resume} />
      <Summary summary={resume.summary} />
      <Skills items={resume.skillsCollection.items} />
      <Experience items={resume.experienceCollection.items} />
      <Education items={resume.educationCollection.items} />
    </>
  ) : (
      <KeyRequired keyRequested={query.keyRequested}/>
  );
}

export default withRouter(Resume);
