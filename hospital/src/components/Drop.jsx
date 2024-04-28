import { useState, useTransition } from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/Dropdown/styles/index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



const Drop=() => {
  const [lang, setLang] = useState('en');
  i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
  lng: lang,
   resources:
   { en:{
        translation:{
          Welcome:'Harvest Insights: Empowering Farmers with Knowledge for Sustainable Agriculture',
            greeting:"Welcome, Farmers! Dive into a World of Agricultural Knowledge and Innovation with Harvest Insights. We provide you with the power to manage your crop health with our conversational assistant chatbo and robust reports ",
            Button1:"Meet your AI Health Assistant",
            Lang:"Language",
            Loca:"Crops",
            Sat:"Satisfaction",
            AH:"Your One Stop Solution for your Crops", 
            line1:"We Offer a suite of innovative tools to help you navigate your farming journey, from finding care to managing your crops",
            line2:"A disease detection system for farmers is a crucial tool that helps identify and manage plant diseases early, thereby reducing crop losses and improving agricultural productivity",
            line3:"Users can search for any farm related query based on specialty, location, availability, and patient reviews. The AI assistant can provide personalized recommendations by understanding the user's preferences.",

            re:"Read More",
            1:1,
            DOC:"Find a Doctor for your crops",
            doctor:"Don't know what happened to your crops ? Visit Us ",
            Medical:"How to get rid of pests",
            Report:"Know the in and out of your report anyday anytime",
            chat:"Chat Bot",
            ch:"Chat with our assistant to get started with your farm journey",
            serve:"Our Services",
            ser:"We provide a suite of innovative tools to help you navigate your farming journey, from finding care to managing your crops",
            descs:">World-class care for everyone.We offer unmatched services From the Crops to the Tools.",
            get:"Get virtual anytime.",
            well:'1. Ask Anything.',
            2:'2. Get virtual anytime.',
            3:'3. Your Pocket Farmer.',
            doc_tarref:"Our Great Farmers",
            heading1:"Find the Equipments in your area",
            sea:"Search",
            pla:"Search for Farmers",
            heading2:"Welcome to Chatbot!",
            prompt:"Welcome! If have you any Queries please specify your Crop, Weather and severity of the problem along with other relevant information",
          pop:"Popular Searches",
          pop1:"Services",
          soil1:"Clay",
          soil2:"Sandy",
          soil3:"Loamy",
          soil4:"Black",
          soil5:"Red",
          typesoil:"Type of Soil",
          predict:"Predict the crop for your soil",
          predicta:"Submit to get the prediction",
        }

    },
    hi:{
        translation:{
         Welcome:"हार्वेस्ट इंसाइट्स: दुर्व्यवहारी कृषि के लिए ज्ञान से किसानों को सशक्त करना।",
    greeting:"स्वागत है, किसानों! हार्वेस्ट इंसाइट्स के साथ कृषि ज्ञान और नवाचार की दुनिया में डुबकी लगाएं। हम आपको अपने वार्तालापी सहायक चैटबॉट और मजबूत रिपोर्ट के साथ अपने फसल स्वास्थ्य का प्रबंधन करने की शक्ति प्रदान करते हैं।",
    Button1:"अपने AI स्वास्थ्य सहायक से मिलें",
    Lang:"भाषा",
    Loca:"फसलें",
    Sat:"संतोष",
    AH:"आपकी फसलों के लिए एक स्थानीय समाधान",
    line1:"हम आपके कृषि यात्रा में नेविगेट करने के लिए नवाचारात्मक उपकरणों का एक सुइट प्रदान करते हैं, देखभाल खोजने से लेकर अपनी फसलों का प्रबंधन करने तक।",
    line2:"किसानों के लिए रोग पहचान प्रणाली एक महत्वपूर्ण उपकरण है जो पौधों के रोगों की पहचान और प्रबंधन में मदद करता है, जिससे फसल की हानि को कम किया जा सकता है और कृषि उत्पादकता में सुधार हो सकता है।",
    line3:"उपयोगकर्ता विशेषता, स्थान, उपलब्धता और रोगी समीक्षा के आधार पर किसी भी फार्म संबंधित प्रश्न के लिए खोज कर सकते हैं। उपयोगकर्ता की पसंदों को समझकर एआई सहायक व्यक्तिगत सिफारिशें प्रदान कर सकता है।",
    1:2,
    DOC:"अपनी फसलों के लिए डॉक्टर खोजें",
    doctor:"अपनी फसलों के साथ क्या हुआ नहीं पता? हमें देखें",
    
    Report:"अपनी रिपोर्ट की जानकारी किसी भी समय किसी भी दिन जानें",
    chat:"चैट बॉट",
    ch:"अपने खेती यात्रा की शुरुआत करने के लिए हमारे सहायक के साथ चैट करें",
    serve:"हमारी सेवाएं",
    ser:"हम आपको अपने कृषि यात्रा में नेविगेट करने के लिए नवाचारात्मक उपकरणों का एक सुइट प्रदान करते हैं, देखभाल खोजने से लेकर अपनी फसलों का प्रबंधन करने तक।",
    descs:"सभी के लिए विश्वस्तरीय देखभाल। हम उपकरणों से फसलों तक अपार सेवाएं प्रदान करते हैं।",
    get:"किसी भी समय वर्चुअल प्राप्त करें।",
    well:'1. कुछ भी पूछें।',
    2:'2. किसी भी समय वर्चुअल प्राप्त करें।',
    3:'3. आपका पॉकेट किसान।',
    doc_tarref:"हमारे महान किसान",
    heading1:"अपने क्षेत्र में उपकरण खोजें",
    sea:"खोजें",
    pla:"किसानों की खोज करें",
    heading2:"चैटबॉट में आपका स्वागत है!",
    prompt:"स्वागत है! यदि आपके पास कोई प्रश्न है तो कृपया अपनी फसल, मौसम और समस्या की गंभीरता को सूचित करें साथ ही अन्य संबंधित जानकारी के साथ",
    pop:"लोकप्रिय खोजें",
    pop1:"सेवाएं",
    soil1:"क्ले",
    soil2:"रेतीला",
    soil3:"लोमी",
    soil4:"काला",
    soil5:"लाल",
    typesoil:"मिट्टी के प्रकार",
    predict:"अपनी मिट्टी के लिए फसल की भविष्यवाणी करें",
    predicta:"पूर्वानुमान प्राप्त करने के लिए सबमिट करें"
        },
    },
    kn:{
        translation:{
          Welcome:"ಹಾರ್ವೆಸ್ಟ್ ಇನೈಟ್ಸ್: ಸಸ್ತಿನ ಕೃಷಿಗೆ ಜ್ಞಾನದಿಂದ ಬೆಳೆದಾರರನ್ನು ಶಕ್ತಿಪೂರ್ವಕವಾಗಿ ಮಾಡುವುದು",
    greeting:"ಸ್ವಾಗತವಿದ್ದು, ಬೆಳೆದಾರರೇ! ಹಾರ್ವೆಸ್ಟ್ ಇನೈಟ್ಸ್‌ನೊಂದಿಗೆ ಕೃಷಿಯ ಜ್ಞಾನ ಮತ್ತು ನವಾಚಾರದ ಜಗತ್ತಿಗೆ ಮುಳುಗಿಹಾಕಿ. ನಾವು ನಿಮಗೆ ನಿಮ್ಮ ಬೆಳೆಯ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಲು ಚಾಟ್ಬೋಟ್ ಮತ್ತು ಬಲವಾದ ವರದಿಗಳೊಂದಿಗೆ ಶಕ್ತಿ ನೀಡುವುದಕ್ಕೆ ನಿಮಗೆ ಶಕ್ತಿಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ",
    Button1:"ನಿಮ್ಮ ಏಆಯ್ ಆರೋಗ್ಯ ಸಹಾಯಕನನ್ನು ಭೇಟಿಯಾಗಿರಿ",
    Lang:"ಭಾಷೆ",
    Loca:"ಫಸಲುಗಳು",
    Sat:"ತೃಪ್ತಿ",
    AH:"ನಿಮ್ಮ ಫಸಲುಗಳಿಗಾಗಿ ನಿಮ್ಮ ಒಂದು ಸ್ಥಲದ ಪರಿಹಾರ",
    line1:"ನಾವು ನಿಮ್ಮ ಬೆಳೆದಾರಿಕೆ ಪ್ರಯಾಣದಲ್ಲಿ ನೇವಿಗೇಟ್ ಮಾಡಲು ನವಾಚಾರಾತ್ಮಕ ಉಪಕರಣಗಳ ಸುಯ್ಯಟ್ ಒದಗಿಸುತ್ತೇವೆ, ದೇಖಭಾಲವನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಫಸಲುಗಳನ್ನು ನಿರ್ವಹಿಸಲು",
    line2:"ಬೆಳೆದಾರರ ಮಾನವಿಕ ರೋಗ ಗುರುತಿಸುವ ವ್ಯವಸ್ಥೆ ಬೆಳೆದಾರರಿಗೆ ಮುಖ್ಯ ಉಪಕರಣವಾಗಿದೆ, ಇದು ಬೆಳೆಗಳ ರೋಗಗಳನ್ನು ಹೊರಗೆ ಗುರುತಿಸಿ ಮೊದಲು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಹಾಗು ಫಸಲ ನಷ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದರಿಂದ ಕೃಷಿ ಉತ್ಪಾದಕತೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ",
    line3:"",
    re:"ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ",
    1:3,
    DOC:"ನಿಮ್ಮ ಫಸಲುಗಳಿಗಾಗಿ ಡಾಕ್ಟರ್‌ಗಳನ್ನು ಹುಡುಕಿ",
    doctor:"ನಿಮ್ಮ ಫಸಲುಗಳಿಗೆ ಏನಾಯ್ತು ಎಂದು ಗೊತ್ತಾಗಿಲ್ಲವೇ? ನಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ",
    Medical:"ಕೀಟಗಳನ್ನು ಹೊರಗೆ ಹಾಕುವ ವಿಧಾನಗಳು",
    Report:"ನಿಮ್ಮ ವರದಿಯ ಅಂತರವನ್ನು ಏನೆಂದು ತಿಳಿಯಿರಿ ಯಾವಾಗಲೂ ಯಾವಾಗಲೂ",
    chat:"ಚಾಟ್‌ಬಾಟ್",
    ch:"ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ನಮ್ಮ ಸಹಾಯಕನೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ",
    serve:"ನಮ್ಮ ಸೇವೆಗಳು",
    ser:"ನಾವು ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಯಾಣವನ್ನು ನೇವಿಗೇಟ್ ಮಾಡಲು ನವಾಚಾರಾತ್ಮಕ ಉಪಕರಣಗಳ ಸುಯ್ಯಟ್ ಒದಗಿಸುತ್ತೇವೆ, ದೇಖಭಾಲವನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಫಸಲುಗಳನ್ನು ನಿರ್ವಹಿಸಲು",
    descs:"ಎಲ್ಲರಿಗೂ ವಿಶ್ವದ ಶ್ರೇಷ್ಠ ಸೇವೆ. ನಾವು ಉಪಕರಣಗಳಿಂದ ಫಸಲುಗಳವರೆಗೆ ಅಪಾರ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
    get:"ಯಾವಾಗಲೂ ವರ್ಚುವಲ್ ಪಡೆಯಿರಿ",
    well:'1. ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.',
    2:'2. ಯಾವಾಗಲೂ ವರ್ಚುವಲ್ ಪಡೆಯಿರಿ.',
    3:'3. ನಿಮ್ಮ ಜೀಪ್ ಕೃಷಿಕಾರನು.',
    doc_tarref:"ನಮ್ಮ ಮಹಾನ ಬೆಳೆದಾರರು",
    heading1:"ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಉಪಕರಣಗಳನ್ನು ಹುಡುಕಿ",
    sea:"ಹುಡುಕಿ",
    pla:"ಬೆಳೆದಾರರನ್ನು ಹುಡುಕಿ",
    heading2:"ಚಾಟ್‌ಬಾಟ್‌ಗೆ ಸ್ವಾಗತ!",
    prompt:"ಸ್ವಾಗತ! ನಿಮ್ಮಲ್ಲಿ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ದಯವಿಟ್ಟು ನಿಮ್ಮ ಫಸಲ, ಹವಾಮಾನ ಮತ್ತು ಸಮಸ್ಯೆಯ ಗಂಭೀರತೆಯನ್ನು ಸೂಚಿಸಿ ಇತರ ಸಂಬಂಧಿತ ಮಾಹಿತಿಯೊಂದಿಗೆ",
    pop:"ಜನಪ್ರಿಯ ಹುಡುಕಲು",
    pop1:"ಸೇವೆಗಳು",
    soil1:"ಕ್ಲೇ",
    soil2:"ಮಣ್ಣಿನ",
    soil3:"ಲೋಮಿ",
    soil4:"ಕಪ್ಪು",
    soil5:"ಕೆಂಪು",
    typesoil:"ಮಣ್ಣಿನ ರೂಪ",
    predict:"ನಿಮ್ಮ ಮಣ್ಣಿಗಾಗಿ ಫಸಲನ್ನು ಭವಿಷ್ಯವಾಣಿಸಿ",
    predicta:"ಭವಿಷ್ಯವಾಣಿಯನ್ನು ಪಡೆಯಲು ಸಲ್ಲಿಸಿ",
        },
       
    }}
}) 
const onSelect = (eventKey) => {
  if (eventKey === 'En') {
    setLang('en');
  } else if (eventKey === 'Hi') { 
    setLang('hi');
  } else if (eventKey === 'KN') {
    setLang('kn');
  }
}
  
  return (
    <Dropdown title={lang} onSelect={onSelect}>
    <Dropdown.Item eventKey="En">EN</Dropdown.Item>
    <Dropdown.Item eventKey ="Hi">HI</Dropdown.Item>
    <Dropdown.Item eventKey="KN">KN</Dropdown.Item>
    </Dropdown>
  );
}
export default Drop;