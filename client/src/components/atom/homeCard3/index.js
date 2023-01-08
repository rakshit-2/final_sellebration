import './index.css';

const HomeCard3=(props)=>{
return (
    <>
    <div key={props.id} className='homecard3__left__inner'>
        <div className='homecard3__left__inner__img'>
            <img src={props.img} style={{width:"100%",height:"100%"}} alt="twitter_img"/>
        </div>
        <div className='homecard3__left__inner__time'>
            {props.time}
        </div>
        <div className='homecard3__left__inner__info'>
            {props.info}
        </div>
    </div>
    </>
);
}

export default HomeCard3;