import './App.css'

import {ImageWithText} from "../../components/ImageWithText/ImageWithText.jsx";
import {Diffrences} from "../../components/Diffrences/Diffrences.jsx";
import {TextSeparator} from "../../components/TextSeparator/TextSeparator.jsx";
import {Hero} from "../../components/Hero/Hero.jsx";
import {ImageSeparator} from "../../components/ImageSeperator/ImageSeparator.jsx";
import {Comments} from "../../components/Comments/Comments.jsx";

function App() {
    let diffrences=[
        {
            src:"../images/diffrences/wyroznienie-kontrowersje.svg",
            headerText:"Przekraczamy granice konwencji",
            descText:"Nie organizujemy tylko zwykłych imprez, lecz inspirujące podróże przez świat niebanalnych doświadczeń",
        },
        {
            src:"../images/diffrences/wyroznienie-nowe-technologie.svg",
            headerText:"Stawiamy na innowacje technologiczne",
            descText:"Nasze wydarzenia korzystają z najnowszych osiągnięć, takich jak rozszerzona rzeczywistość (AR) i wirtualna rzeczywistość (VR)",
        },
        {
            src:"../images/diffrences/wyroznienie-eco-friendy.svg",
            headerText:"Działamy Eco-Friendly",
            descText:"Nasza pasja do tworzenia wydarzeń idzie w parze z zobowiązaniem do wspierania społeczności lokalnych i dbałością o naszą planetę",
        }
    ]

    let opisText="Zespół naszej firmy specjalizuje się w profesjonalnej organizacji imprez korporacyjnych, tworząc niezapomniane chwile dla firm i ich pracowników. Dzięki kreatywności, precyzji i doświadczeniu zapewniamy kompleksową obsługę od planowania po realizację. Nasze usługi obejmują innowacyjne pomysły na eventy, doskonałe zarządzanie projektem, a także perfekcyjną koordynację wszystkich elementów. Bez względu na rozmiar wydarzenia, nasza firma gwarantuje profesjonalizm, świeże podejście i pełną dedykację, aby spełnić oczekiwania nawet najbardziej wymagających klientów. Z nami każda impreza korporacyjna staje się wyjątkowym wydarzeniem, podkreślającym wartości i sukcesy Twojej firmy."
    let reviews= [
        {
            "profpicture":"../images/comments/profilowe.png",
            "name": "Robert Z",
            "review": "Nie mógłbym być bardziej zadowolony z usług firmy eventowej 'E-pal'. Ich profesjonalizm, pomysłowość i perfekcyjne wykonanie sprawiły, że nasza korporacyjna impreza była niezapomniana. Doskonale zrozumieli nasze oczekiwania i przekroczyli je, dostarczając wyjątkowe doświadczenie. Polecam ich z całego serca!",
            "date": "13.01.2024",
            "stars": 4.5
        },
        {
            "profpicture":"../images/comments/profilowe1.png",
            "name": "Anna K",
            "review": "Firma 'E-pal' zaserwowała nam niesamowitą ucztę w postaci korporacyjnej imprezy. Ich kreatywność i perfekcyjne wykonanie sprawiły, że każdy moment był wyjątkowy. Z czystym sumieniem polecam!",
            "date": "14.01.2024",
            "stars": 5
        },
        {
            "profpicture":"../images/comments/profilowe2.png",
            "name": "Marek S",
            "review": "Usługi firmy 'E-pal' są niezrównane! Ich zdolność do zrozumienia naszych oczekiwań i dostarczenia wyjątkowego doświadczenia sprawiły, że nasza korporacyjna impreza była prawdziwym sukcesem. Polecam z całego serca!",
            "date": "15.01.2024",
            "stars": 4.5
        },
        {
            "profpicture":"../images/comments/profilowe3.png",
            "name": "Piotr D",
            "review": "Korporacyjna impreza zorganizowana przez 'E-pal' była absolutnie fantastyczna. Perfekcyjne wykonanie, kreatywność i zaangażowanie całego zespołu sprawiły, że to było wydarzenie, o którym będziemy rozmawiać przez długi czas. Bardzo polecam!",
            "date": "17.01.2024",
            "stars": 4
        }
    ]
    return (
    <>
        <div className={'container'}>
            <Hero heroText={"Tworzymy Wspomnienia, Kreujemy Wyjątkowe Chwile – Twoje Wydarzenie, Nasza Pasja!"} callToactionPath={"/SignUp"} callToactionText={"Zarejestruj się już dziś"} image={"../images/hero/hero-image.png"}  />
            <TextSeparator text={'Pomożemy Ci w organizacji twojego wymarzonego Eventu'} />
            <Diffrences list={diffrences}/>
            <ImageWithText text={opisText} src={'../images/opis/opis-image.png'}/>
            <ImageSeparator image={'../images/opis/opis-przerywnik.png'}/>
            <Comments reviews={reviews} />
        </div>
    </>
  )
}

export default App
