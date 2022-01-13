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
      <Skills skills={resume.skillsCollection.items} />
      <Experience />
      <Education items={resume.educationCollection.items} />
    </>
  );
}

export default Resume;
