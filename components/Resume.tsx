import Header from "../components/Header";
import Summary from "../components/Summary";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

function Resume({ resume }) {
  return (
    <>
      <Header resume={resume} />
      <Summary summary={resume.summary} />
      <Skills items={resume.skillsCollection.items} />
      <Experience items={resume.experienceCollection.items} />
      <Education items={resume.educationCollection.items} />
    </>
  );
}

export default Resume;
