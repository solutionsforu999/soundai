import { useInView } from "react-intersection-observer";

const SecondSection = () => {
    const { ref:secondsection, inView:introisVisible } = useInView({delay: 150});
    return (
        <div ref={secondsection} className={introisVisible?"second-section d-flex":"second-section d-hidden"}>
            <h2>Get creative with Murf Studio</h2>
            <div className="containing">
                <div>
                    <img width={'100%'} alt="1png" src={'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/629f253c1598bc349d5f2fe5_ai-voice-library.png'} />
                    <h1>Diverse AI voices at your fingertips</h1>
                    <p>Choose from over 120+ text to speech voices in 20+ languages</p>
                </div>
                <div>
                    <img width={'100%'} alt="2png" src={'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/628f3ae380c7befcc5835b16_add-media-03-p-500.png'} />
                    <h1>Add video, music, or image</h1>
                    <p>A voice maker that allows you to upload your creatives and sync it with the voice of your choice.</p>


                </div>
            </div>
            <img width={'70%'} alt="bubble" src={'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/634f9a0e6f66afbd288717a5_Capture%20the%20right%20tone-p-500.webp'} alt='efs' />
            <h2>All-in-one AI voice generator </h2>
            <p>Play with pitch, punctuations and emphasis to make the AI voices carry your message however you like.</p>
            <div className="containing">
                <div>
                    <img width={'100%'} alt='sfes' src={'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/634f99f6ac1ff27af3f6e8f4_Home%20Recordings-p-500.webp'} />
                    <h1>Go from amateur to studio quality voiceovers</h1>
                    <p>A realistic voice changer that will help you turn your home recordings into professional voiceovers.</p>
                    <button role="button">Open Studio</button>

                </div>
                <div>
                    <img width={'100%'} alt='sfes' src={'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/634f9a111fa3ea4a35f479c8_Collaboration-p-500.webp'} />
                    <h1>Now collaborate with your team</h1>
                    <p>Check out the Enterprise plan to directly collaborate with your team on projects.</p>
                    <button role="button">Open Studio</button>

                </div>
            </div>
        </div>
    )
}
export default SecondSection;