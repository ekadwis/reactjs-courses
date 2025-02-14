import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tutors from '../components/Tutors';
import Partners from '../components/Partners';
import { homeSection } from '../data/HomeSection';
import { coursesSection } from '../data/CoursesSection';
import { tutorsSection, tutorsList } from '../data/TutorsSection';
import { partnersSection, partnersList } from '../data/PartnersSection';
import parse from 'html-react-parser';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        {/* Online Course  */}
        <section id="courses">
          <div className="kolom">{parse(coursesSection.content)}</div>
          <img src={coursesSection.image} />
        </section>

        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList}/>
          </div>
        </section>

        {/* Partners  */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                </div>
                <Partners partnersList={partnersList} />
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
