import ResumeHeader from "./ResumeHeader";
import Summary from "../components/Summary";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import KeyRequired from "../components/KeyRequired";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Target from "../components/Target";
function Resume({ resume }) {
  return resume ? (
    <>
      <ResumeHeader resume={resume} />
      <Summary summary={resume.summary} />
      <Skills items={resume.skillsCollection.items} />
      <Education items={resume.educationCollection.items} />
      <Experience items={resume.experienceCollection.items} />
      <Projects items={resume.projectsCollection.items} />
      <Hobbies hobbies={resume.hobbies} />
      <Target target={resume.targetAudience} />
    </>
  ) : (
    <KeyRequired />
  );
}

export default Resume;
