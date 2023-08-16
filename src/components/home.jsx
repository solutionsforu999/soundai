
import FirstSection from "./Home/1stSection";
import SecondSection from "./Home/2ndsection";
import ThirdSection from "./Home/3stSection";
import Intro from "./Home/Intro";
import Footer from "./Home/footer";

const Home=()=>{
   
    return (
        <div className="home container-fluid">
            <Intro/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <Footer/>
        </div>
    )
}
export default Home;