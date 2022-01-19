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

function ShowcaseSlide({ slideshow }) {
  const renderedSlides = slideshow.slidesCollection.items.map((slide, i) => {
    return (
      <Slide index={i}>
        <div className={styles.slide}>
          <div className={styles.description}>{slide.description}</div>
          <SyntaxHighlighter language="javascript" style={materialLight}>
            {slide.codeSnippet}
          </SyntaxHighlighter>
        </div>
      </Slide>
    );
  });

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={slideshow.slidesCollection.items.length}
      visibleSlides={1}
      className={styles.showcase}
    >
      <Slider>{renderedSlides}</Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}

export default ShowcaseSlide;
