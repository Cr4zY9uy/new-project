import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image src="assets/images/iphone1.png" alt="banner1" width={"100%"} height={"320px"} />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="assets/images/iphone2.png" alt="banner2" width={"100%"} height={"320px"} />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="assets/images/iphone3.png" alt="banner3" width={"100%"} height={"320px"} />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;