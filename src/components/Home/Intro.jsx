


// import Carousel from 'react-elastic-carousel';
import Carousel from 'better-react-carousel'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Intro = () => {
    const { ref: intro, inView: introisVisible } = useInView({ delay: 100 });
    return (

        <div ref={intro} className={introisVisible ? 'intro div-in' : 'intro div-out'}>
            <h1>Go from text to speech with a versatile AI voice generator</h1>
            <h2>AI enabled, real peoples voices</h2>
            <p>Make studio-quality voice overs in minutes. Use Murf’s lifelike AI voices for podcasts, videos, and all your professional presentations</p>
            <button role="button">Open Studio</button>
            <div className="certifs">
                <Carousel  autoplay={1200} cols={1} rows={1} gap={200} loop={true}>
                    <Carousel.Item>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dolorem exercitationem dolor delectus eos veniam numquam, laudantium expedita, voluptatem, accusamus laborum adipisci facilis optio. Quae eligendi dicta laboriosam asperiores voluptate!</p>
                            <div>
                                <h4> By Arnold Jiri</h4>
                                <p>E-Learning Developer</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <div>
                                <h4> By Carol Ternold</h4>
                                <p>Synergy Visual Communication</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <div>
                                <h4> By Charlie Hambldon</h4>
                                <p>Training Consultant (E-learning Developer)</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>

    )
}
export default Intro;