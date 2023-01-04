import './index.css';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavData from './../../assets/store/NavData';


const NavLocatorEach=(props)=>{

    const navigate = useNavigate();

    function onclickfunction(x,info)
    {
        var link=["/","/ourprofile","/leadership","/womenleadership","/visionvalue","/milestone",
                "/bussinessbrand","/bussinessbrand","/csr",
                "/csr","/bringchange","/OurStrategy",
                "/StoriesofHope","/csr","/Media","/mediarelease","/pressreoprt",
                "/Stories","/event","/Downloads","/logo","/Innovation","/investor",
                "/career","/contactus"];
        var checkEN=["About Us","Our Profile","Leadership","Women Leaders","Vision&Values",
                    "Milestones","Businesses & Brands","Sustainability","CSR",
                    "CSR At Sellebration","Bringing The Change","Our Strategy",
                    "Stories of Hope","CSR Policy","Media","Media Releases","Media Reports",
                    "Stories","Events","Downloads","Our Logo","Innovation","Investors",
                    "Careers","Contact Us"]
        var checkCH=[
        "关于我们",
        "我们的简介",
        "领导",
        "女性领袖",
        "愿景与价值观",
        "里程碑",
        "企业与品牌",
        "可持续性",
        "企业社会责任",
        "企业社会责任",
        "带来改变",
        "我们的策略",
        "希望的故事",
        "企业社会责任政策",
        "媒体",
        "媒体发布",
        "媒体报道",
        "故事",
        "事件",
        "下载",
        "我们的标志",
        "创新",
        "投资者",
        "招贤纳士",
        "联系我们"
        ]
        var checkDE=[
            "Über uns",
            "Unser Profil",
            "Führung",
            "Weibliche Führungskräfte",
            "Vision&Werte",
            "Meilensteine",
            "Unternehmen & Marken",
            "Nachhaltigkeit",
            "CSR",
            "CSR bei Sellebration",
            "Die Veränderung bringen",
            "Unsere Strategie",
            "Geschichten der Hoffnung",
            "CSR-Richtlinie",
            "Medien",
            "Medienmitteilungen",
            "Medienberichte",
            "Geschichten",
            "Veranstaltungen",
            "Downloads",
            "Unser Logo",
            "Innovation",
            "Investoren",
            "Karriere",
            "Kontaktiere uns"
          ]
          var checkES=[
            "Sobre nosotros",
            "Nuestro perfil",
            "Liderazgo",
            "Mujeres Líderes",
            "Visión y Valores",
            "Hitos",
            "Negocios y Marcas",
            "Sustentabilidad",
            "RSE",
            "RSC en Sellebration",
            "Trayendo el cambio",
            "Nuestra estrategia",
            "Historias de esperanza",
            "Política de RSC",
            "Medios de comunicación",
            "comunicados de prensa",
            "Informes de los medios",
            "Cuentos",
            "Eventos",
            "Descargas",
            "Nuestro logotipo",
            "Innovación",
            "inversores",
            "Carreras",
            "Contáctenos"
          ]
          var checkFR=[
            "À propos de nous",
            "Notre profil",
            "Leadership",
            "Femmes dirigeantes",
            "Vision&Valeurs",
            "Jalons",
            "Entreprises & Marques",
            "Durabilité",
            "RSE",
            "La RSE chez Sellebration",
            "Apporter le changement",
            "Notre stratégie",
            "Histoires d'espoir",
            "Politique RSE",
            "Médias",
            "Communiqués de presse",
            "Rapports des médias",
            "Histoires",
            "Événements",
            "Téléchargements",
            "Notre logo",
            "Innovation",
            "Investisseurs",
            "Carrières",
            "Nous contacter"
          ]
          var checkHI=[
            "हमारे बारे में",
            "हमारी प्रोफ़ाइल",
            "नेतृत्व",
            "महिला नेता",
            "दृष्टि और मूल्य",
            "मील के पत्थर",
            "व्यवसाय और ब्रांड",
            "वहनीयता",
            "सीएसआर",
            "सेलब्रेशन में सीएसआर",
            "परिवर्तन लाना",
            "हमारी रणनीति",
            "आशा की कहानियाँ",
            "सीएसआर नीति",
            "मीडिया",
            "मीडिया विज्ञप्तियां",
            "मीडिया रिपोर्ट्स",
            "कहानियों",
            "आयोजन",
            "डाउनलोड",
            "हमारा लोगो",
            "नवाचार",
            "निवेशकों",
            "करियर",
            "संपर्क करें"
          ]
          var checkJA=[
            "私たちに関しては",
            "私たちのプロフィール",
            "リーダーシップ",
            "女性リーダー",
            "ビジョン＆バリュー",
            "マイルストーン",
            "事業とブランド",
            "持続可能性",
            "CSR",
            "セレブでのCSR",
            "変化をもたらす",
            "私たちの戦略",
            "希望の物語",
            "CSR方針",
            "メディア",
            "メディアリリース",
            "メディア報道",
            "ストーリー",
            "イベント",
            "ダウンロード",
            "私たちのロゴ",
            "革新",
            "投資家",
            "キャリア",
            "お問い合わせ"
          ]
          var checkPT=[
            "Sobre nós",
            "Nosso Perfil",
            "Liderança",
            "mulheres líderes",
            "Visão&Valores",
            "Conquistas",
            "Negócios e Marcas",
            "Sustentabilidade",
            "CSR",
            "CSR na Sellebration",
            "Trazendo a mudança",
            "Nossa Estratégia",
            "histórias de esperança",
            "Política de RSE",
            "meios de comunicação",
            "Comunicados de mídia",
            "Relatórios de mídia",
            "Histórias",
            "Eventos",
            "Transferências",
            "Nosso logotipo",
            "Inovação",
            "investidores",
            "Carreiras",
            "Contate-nos"
          ]
          var checkRU=[
            "О нас",
            "Наш профиль",
            "Лидерство",
            "Женщины-лидеры",
            "Видение и ценности",
            "Вехи",
            "Компании и бренды",
            "устойчивость",
            "КСО",
            "CSR в Sellebration",
            "Внесение изменений",
            "Наша стратегия",
            "Истории надежды",
            "Политика КСО",
            "СМИ",
            "Пресс-релизы",
            "СМИ",
            "Рассказы",
            "События",
            "Загрузки",
            "Наш логотип",
            "Инновации",
            "Инвесторы",
            "Карьера",
            "Связаться с нами"
          ]
            
        for(var i=0;i<checkEN.length;i++)
        {
            if(info===checkEN[i] || info===checkCH[i] || info===checkDE[i] || info===checkES[i]
                || info===checkFR[i] || info===checkHI[i] || info===checkJA[i]  || info===checkPT[i]
                || info===checkRU[i])
            {
                props.closeNavClicked();
                props.closeNav();
                navigate(link[i]);
                return;
            }
        }
        
    }


    return (
        <>
        {props.data.map((ele) => {
            const {id,info}=ele;
            if(props.index===1)
            {
                return(
                <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                    {info}
                </div>
                )
                
            }
            else if(props.index===4)
            {
                if(id===3)
                {
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        <div className="navlocatoreach__white__line__outer">
                            <div className="navlocatoreach__white__line"></div>
                        </div>
                        <div className="navlocatoreach__each__heading" style={{display:"flex",alignItem:"center",justifyContent:"space-around",width:"88%" ,cursor:"default"}}>
                        {NavData[4].icon.map((elel) => {
                            const {id,img,link}=elel;
                            return (
                                <>
                                <a key={id} target="_blank" href={link}><FontAwesomeIcon icon={img} size="xs" color="white" style={{cursor:"pointer"}} /></a>
                                </>
                            );
                        })}
                        </div>
                        </>
                    );
                }
                else
                {
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        <div className="navlocatoreach__white__line__outer">
                            <div className="navlocatoreach__white__line"></div>
                        </div>
                        </>
                    );
                }
            }
            else
            {
                if(info==="CSR Policy" || info==="सीएसआर नीति" || info==="Politique RSE" || info==="CSR方針" || info==="Política de RSE" || info==="Политика КСО"
                    || info==="Política de RSC" || info==="CSR-Richtlinie" || info==="企业社会责任政策")
                {
                    return (
                        <>
                        <HashLink to='/csr#csr_policy' smooth className="navlocatoreach__each__each"  onClick={()=>{onclickfunction(id,info)}}>{info}</HashLink>
                        </>
                    );
                }
                else if(info==="Stories of Hope" || info==="希望的故事" || info==="Geschichten der Hoffnung" || info==="Historias de esperanza" || info==="Histoires d'espoir" 
                || info==="आशा की कहानियाँ"
                || info==="希望の物語" || info==="histórias de esperança" || info==="Истории надежды")
                {
                    return (
                        <>
                        <HashLink to='/csr#hope' smooth className="navlocatoreach__each__each"  onClick={()=>{onclickfunction(id,info)}}>{info}</HashLink>
                        </>
                    );
                }
                else if(info==="Our Strategy" || info==="我们的战略" || info==="Unsere Strategie" || info==="Nuestra estrategia" || info==="Notre stratégie" 
                || info==="हमारी रणनीति"
                || info==="私たちの戦略" || info==="Nossa Estratégia" || info==="Наша стратегия")
                
                {
                    return (
                        <>
                        <HashLink to='/csr#startegy' smooth className="navlocatoreach__each__each"  onClick={()=>{onclickfunction(id,info)}}>{info}</HashLink>
                        </>
                    );
                }
                else{
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__each" onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        </>
                    );
                }
            }
        })}
        </>
    );
}

export default NavLocatorEach;