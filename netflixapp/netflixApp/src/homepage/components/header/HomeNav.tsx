import '../componentsCSS/HomeNav.css'
import HomePageBlur from '../header/HomePageBlur';
import HomepageQuestionSection from '../header/HomepageQuestionSection'
import HomepageInfoSections from '../header/HomepageInfoSections';
import HomepageHeader from '../header/HomepageHeader';
function Navbar() {


  return (
    <div>
     <HomepageHeader />
      <HomePageBlur />


      <HomepageInfoSections />
        <HomePageBlur />

        <HomepageQuestionSection />




    </div>
  )
}

export default Navbar
