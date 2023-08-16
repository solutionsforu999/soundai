import { useInView } from "react-intersection-observer";

const FirstSection = () => {
    const { ref:firstsection, inView:sectiononeisVisible } = useInView({delay: 150});
    return (
        <div ref={firstsection} className={sectiononeisVisible?'first-section d-flex':'first-section d-hidden'}>
            <h2>Simple, powerful…pure magic</h2>
            <p>Take a peek at our feature-packed studio, Start creating Voiceovers in minutes.</p>
            <img width={'70%'} src={'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/62a34c5d2212d5b2195f9ce4_home_studio_preview_tiny-p-1080.png'} alt='img' />
            <button role="button">Open Studio</button>

        </div>
    );
}
export default FirstSection;