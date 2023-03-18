import Navbar from './../NavBar/index';
import './index.css';
import { useEffect } from 'react';
import CardType2 from '../../atom/cardType2';
// import items from './../../assets/store/OurProfileData.js';
// import Ourprofile_ourvalues from './../../assets/store/staticModel.json';
import logo from './../../assets/image/ourprofile_main.jpg';
import CardType3 from '../../atom/cardType3';
import Footer from './../../molecule/footer/index';
import Carousel from "react-multi-carousel";
import { useNavigate,useLocation } from 'react-router-dom';
import staticModel from './../../assets/store/staticModel.json'


const OurProfile=(props)=>{

  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1181 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1181, min: 750 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 749, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

    return (
    <>
        <div className="OurProfile__outer">
          <div className="OurProfile__inner">
          <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
            <div className='OurProfile__inner__inner'> 
                <div className="OurProfile__about">
                  <div className="OurProfile__about__left"  data-aos="fade-right">
                    <div className="OurProfile__about__heading">
                    {staticModel[props.lang].ourProfile.smallHead0}
                    </div>
                    <div className="OurProfile__about__he">
                    {staticModel[props.lang].ourProfile.head0}
                    </div>
                    <div className="OurProfile__about__text">
                    {staticModel[props.lang].ourProfile.text0}
                    </div>
                  </div>
                  <div className="OurProfile__about__right__inner"  data-aos="fade-left">
                    <img src={logo} className="OurProfile__about__right__inner__img"/>
                  </div>
                </div>


                </div>
                <div className="OurProfile__center__display">
                  <div className="OurProfile__center__head">
                  {staticModel[props.lang].ourProfile.head1}
                  </div>
                  <div className='OurProfile__inner__inner'>
                    <div className="OurProfile__center__list"  data-aos="fade-up">
                      {staticModel[props.lang].ourprofile_ourvalues.ourValues.map((ele) => {
                        const {id,name,info,img}=ele;
                        return(
                          <CardType2 id={id} name={name} info={info} img={img}/>
                        )
                      })}
                    </div>
                    <div className="OurProfile__center__list2"  data-aos="fade-up">
                      <Carousel 
                        responsive={responsive} 
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        pauseOnHover
                        infinite
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                        {staticModel[props.lang].ourprofile_ourvalues.ourValues.map((ele) => {
                          const {id,name,info,img}=ele;
                          return(
                            <CardType2 id={id} name={name} info={info} img={img}/>
                          )
                        })}
                        </Carousel>
                    </div>
                  </div>
                </div>
                <div className='OurProfile__inner__inner'>
    
                <div className="OurProfile__team">
                    <div className="OurProfile__team__heading">
                    {staticModel[props.lang].ourProfile.head2}
                    </div>
                    <div className="OurProfile__team__card"  data-aos="fade-up">
                    {staticModel[props.lang].ourprofile_ourvalues.ourTeam.map((ele) => {
                        const {id,name,job,img}=ele;
                        return(
                          <CardType3 id={id} name={name} job={job} img={img}/>
                        )
                      })}
                    </div>
                    <div className="OurProfile__team__card1">
                    <Carousel 
                        responsive={responsive} 
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        pauseOnHover
                        infinite
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                        {staticModel[props.lang].ourprofile_ourvalues.ourTeam.map((ele) => {
                          const {id,name,job,img}=ele;
                          return(
                            <CardType3 id={id} name={name} job={job} img={img}/>
                          )
                        })}
                        </Carousel>
                    </div>
                </div>
                <div className="OurProfile__team__leaderboad">
                  <div className="OurProfile__team__leaderboad__button" onClick={()=>{navigate('/leadership')}}>
                  {staticModel[props.lang].ourProfile.button1}
                  </div>
                </div>
              </div>
              <Footer  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
          </div>
        </div>
    </>
  );
}

export default OurProfile;