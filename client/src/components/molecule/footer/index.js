import './index.css';
import { useNavigate } from 'react-router-dom';
import FooterData from './../../assets/store/footerData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import staticModel from './../../assets/store/staticModel.json';

const Footer=(props)=>{
    const navigate = useNavigate();
    function footerLinkClicked(link)
    {
        navigate(link);
        return;
    }



return (
    <>
    <div className='footer__outer'>
        <div className='footer__inner'>
            <div className='footer__inner__top'>
                <div className='footer__inner__top__left'>
                {staticModel[props.lang].footer.top.left.map((item) => {
                    const {id,data,link}=item;
                    return(
                        <div key={id} className='footer__inner__top__left__each' onClick={()=>{footerLinkClicked(link)}}>
                            {data}
                        </div>
                    )
                })}
                </div>
                <div className='footer__inner__top__right'>
                {FooterData.top.right.map((item) => {
                    const {id,img,link}=item;
                    return(
                        <a target="_blank" href={link} key={id} className='footer__inner__top__left__each2'>
                            <FontAwesomeIcon icon={img} size="lg" color="white" className='icon__test__col' style={{cursor:"pointer"}} />
                        </a>
                    )
                })}
                </div>
            </div>
            <div className='footer__inner__mid'>
            <FontAwesomeIcon icon={faCopyright} size="lg" color="white" style={{cursor:"pointer"}} />{'\u00A0'}{staticModel[props.lang].footer.middle}
            </div>
            <div className="footer__inner__bottom">
                {staticModel[props.lang].footer.bottom.map((item) => {
                    const {id,data,link}=item;
                    return(
                        <div key={id} className='footer__inner__top__left__each3' onClick={()=>{navigate(link)}}>                           
                        {data}
                        </div>
                    )
                })}
            </div>
        </div>  
    </div>
    </>
);
}

export default Footer;