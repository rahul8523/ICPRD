
import './App.css';
import Home from './pages/Home/Home';
// import FromDeskOfPresident from './pages/FromDeskOfPresident/FromDeskOfPresident';
// import EconomicPolicy from './pages/IcprdVeriticals/EconomicPolicy/EconomicPolicy';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import PresidentDesk from './pages/PresidentDesk/PresidentDesk';
import EconomicPolicy from './pages/IcprdVerticals/EconomicPolicy/EconomicPolicy';
import InternationalRelations from './pages/IcprdVerticals/InternationalRelations/InternationalRelations';
import ClimateChange from './pages/IcprdVerticals/ClimateChange/ClimateChange';
import FoodSecurityPage from './pages/IcprdVerticals/FoodSecurityPage/FoodSecurityPage';
import RuralUrbanisation from './pages/IcprdVerticals/RuralUrbanisation/RuralUrbanisation';
import EducationAndTraining from './pages/IcprdVerticals/EducationAndTraining/EducationAndTraining';
import TradeAndCommerce from './pages/IcprdVerticals/TradeAndCommerce/TradeAndCommerce';
import Agriculture from './pages/IcprdVerticals/Agriculture/Agriculture';
import Support from './pages/Support/Support';
import ResearchArticles from './pages/ResearchArticles/ResearchArticles';
import Contact from './pages/ContactUs/Contact';
import MediaReports from './pages/Media/MediaReports';
import BlogPost from './pages/Blog/BlogPost';
import PeopleBehindUs from './pages/PeopleBehindUs/PeopleBehindUs';
import Event from './pages/Event/Event';
import ResearchArticlesDetail from './pages/ResearchArticles/ResearchArticlesDetail/ResearchArticlesDetail';
import PrivacyPolicies from './pages/PrivacyPolicies/PrivacyPolicies';
import AmritMahotsav from './pages/EventDetails/AmritMahotsav';
import AmritManthan from './pages/EventDetails/AmritManthan';
import Evolvement from './pages/EventDetails/Evolvement';
import PanchPran from './pages/EventDetails/PanchPran';
import Post1 from './pages/BlogInner/Post1';
import Post4 from './pages/BlogInner/Post4';
import Post3 from './pages/BlogInner/Post3';
import Post2 from './pages/BlogInner/Post2';
import Post5 from './pages/BlogInner/Post5';
import Post6 from './pages/BlogInner/Post6';
import Post7 from './pages/BlogInner/Post7';
import News1 from './pages/NewsInner/News1';
import News4 from './pages/NewsInner/News4';
import News3 from './pages/NewsInner/News3';
import News2 from './pages/NewsInner/News2';
import News5 from './pages/NewsInner/News5';
import News6 from './pages/NewsInner/News6';
import News7 from './pages/NewsInner/News7';
import NewsPost from './pages/News/NewsPost';
// import RuralUrbanisation from './pages/IcprdVeriticals/RuralUrbanisation/RuralUrbanisation';
// import TradeAndCommerce from './pages/IcprdVeriticals/TradeAndCommerce/TradeAndCommerce';
// import Agriculture from './pages/IcprdVeriticals/Agriculture/Agriculture';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/president" element={<PresidentDesk />} />
          <Route path="/economicPolicy" element={<EconomicPolicy />} />
          <Route path="/intRel" element={<InternationalRelations />} />
          <Route path="/climateChange" element={<ClimateChange />} />
          <Route path="/foodSecurity" element={<FoodSecurityPage />} />
          <Route path="/educationTraining" element={<EducationAndTraining />} />
          <Route path="/ruralUrbanisation" element={<RuralUrbanisation />} />
          <Route path="/tradeCommerce" element={<TradeAndCommerce />} />
          <Route path="/agriculture" element={<Agriculture />} />

          <Route path="/media-reports" element={<MediaReports />} />
          <Route path="/people-behind-us" element={<PeopleBehindUs />} />
          <Route path="/research-articles" element={<ResearchArticles />} />
          <Route path="/research-articles-detail" element={<ResearchArticlesDetail />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/event" element={<Event />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicies/>} />

          <Route path="/india-@-75-azadi-ka-amrit-mahotsav" element={<AmritMahotsav/>} />
          <Route path="/amrit-manthan-india-sustainable-transition" element={<AmritManthan/>} />
          <Route path="/evolvement-and-transformation-towards-climate-resilient-india" element={<Evolvement/>} />
          <Route path="/panch-pran-in-amrit-kaal" element={<PanchPran/>} />

          <Route path="blog/indias-climate-change-policy" element={<Post1/>} />
          <Route path="blog/changing-corporate-scape-changing-climate" element={<Post2/>} />
          <Route path="blog/education-paradigm-climate-change" element={<Post3/>} />
          <Route path="blog/esg-sustainability-reporting" element={<Post4/>} />
          <Route path="blog/legalities-around-climate-change" element={<Post5/>} />
          <Route path="blog/health-in-a-warming-world" element={<Post6/>} />
          <Route path="blog/decoding-climate-change" element={<Post7/>} />
          <Route path="/news" element={<NewsPost/>} />
          <Route path="news/smart-system-flight-tested-by-drdo" element={<News1/>} />
          <Route path="news/11th-India-new-zealand-jtc-meeting-held" element={<News2/>} />
          <Route path="news/2nd-session-of-India-nigeria-joint-trade-committee-held" element={<News3/>} />
          <Route path="news/India-witnesses-8percentage-growth-in-mineral-production" element={<News4/>} />
          <Route path="news/india-to-host-ACTM-46-CEP-26-in-may" element={<News5/>} />
          <Route path="news/health-in-a-warming-world" element={<News6/>} />
          <Route path="news/decoding-climate-change" element={<News7/>} />
          {/* 
          
           */}

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;
