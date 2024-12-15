import React from 'react';
import styled from 'styled-components';

const SlideshowContainer = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

interface ImageSlideshowState {
  currentIndex: number;
}

class ImageSlideshow extends React.Component<
  Record<string, never>,
  ImageSlideshowState
> {
  state: ImageSlideshowState = {
    currentIndex: 0,
  };

  interval: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.interval = setInterval(this.nextSlide, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  render() {
    return (
      <SlideshowContainer>
        {images.map((image, index) => (
          <Slide
            key={index}
            data-testid={`slide-${index}`}
            className={index === this.state.currentIndex ? 'active' : ''}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </SlideshowContainer>
    );
  }
}

export default ImageSlideshow;
