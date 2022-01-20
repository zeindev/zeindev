import Letter from "../../components/Letter";
import ResumeHeader from '../../components/ResumeHeader';
import { getLetter } from "../../shared/api";

function CoverLetter({ letter }) {
  return <>
    <ResumeHeader resume={letter} />
    <Letter letter={letter} />
  </>;
}

export async function getServerSideProps({ query }) {
  const letter = (await getLetter(query.key)) || null;
  return {
    props: {
      letter,
    },
  };
}

export default CoverLetter;
