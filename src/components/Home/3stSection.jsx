import { useState } from "react";
import { useInView } from "react-intersection-observer";
const cards = [
    { img: 'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/64aea65a2b186e3d4b4e5510_TTS-emotions.png', title: 'Text to Speech with Emotions', desc: 'In TTS, emotions add depth to the narration and create an output that is engaging and realistic.' },
    { img: 'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/64aea65cdcb0ea06544e0ee6_Dive%20into%20TTS.png', title: 'A Deep Dive into Neural Text to Speech', desc: 'Neural TTS generates realistic-sounding, high-quality audio with proper prosody, pitch, rhythm, and intonation.' },
    { img: 'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/64aea65cbd74fd9e12a7c8f6_Medical%20TTS.png', title: 'Medical Text to Speech: Changing Healthcare for the Better', desc: 'TTS enhances digital health technology by enabling lifelike speech in health apps, websites, nurse call systems, and portable health devices.' },
    { img: 'https://uploads-ssl.webflow.com/6215d56ae85caa0a3026a433/64c122c5a5f8bb28929faa94_Voiceover%20to%20video.png', title: 'How to make a voice over video?', desc: 'Voice over video not only adds a bit of soul to your video but also depth to your content. In fact, great voiceovers form the basis of what will capture the attention of your audience.' },

];
const ThirdSection = () => {
    const { ref: third, inView: thirdiVisible } = useInView();
    // const [cards,setCards]= useState();
    return (

        <div ref={third} className={thirdiVisible ? `third-section div-in` : `third-section div-out`}>
            <h2>Blog</h2>
            
            <div className="containing">
                {cards.map((card, ind) =>
                    <div key={`card${ind}`}>
                        <img className="rounded-2" width='100%' src={card.img} />
                        <div className="p-3">
                            <h3 className="text-white">{card.title}</h3>
                            <p className="text-white">{card.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ThirdSection;