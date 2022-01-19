import ResumeHeader from "./ResumeHeader";
import Summary from "./Summary";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import KeyRequired from "./KeyRequired";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Target from "./Target";

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
