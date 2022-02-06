import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../styles/ShowcaseSlide.module.scss";
import { Code } from "@styled-icons/entypo/Code";

function ShowcaseSlide({ slideshow }) {
  const renderedSlides = slideshow.slidesCollection.items.map((slide, i) => {
    return (
      <Slide key={i} index={i}>
        <div className={styles.slide}>
          <div className={styles.description}>{slide.description}</div>
          <SyntaxHighlighter
            className={styles.snippet}
            language="jsx"
            customStyle={{ fontSize: ".8rem" }}
            style={materialLight}
          >
            {slide.codeSnippet}
          </SyntaxHighlighter>
        </div>
      </Slide>
    );
  });

  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={26.2}
      totalSlides={slideshow.slidesCollection.items.length}
      visibleSlides={1}
      className={styles.showcase}
    >
      <div className={styles.controls}>
        {" "}
        <ButtonBack>back</ButtonBack>
        <button>close</button>
        <ButtonNext>next</ButtonNext>
      </div>
      <Slider>{renderedSlides}</Slider>
    </CarouselProvider>
  );
}

export default ShowcaseSlide;
