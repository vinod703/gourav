import { BrowserRouter, Routes ,Route} from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Products from "./components/Pages/Products";
import Review from "./components/Pages/Review";
import TermsAndCondition from "./components/Footercomponents/TermsAndCondition"
import "./index.css"
import Blog from "./components/Footercomponents/Blog";
import Contactus from "./components/Footercomponents/Contactus.jsx";
import PrivacyAndPolicy from "./components/Footercomponents/PrivacyAndPolicy.jsx";
import Disclaimer from "./components/Footercomponents/Disclaimer";
import ShippingPolicy from "./components/Footercomponents/ShippingPolicy.jsx";
import CancellationRefundPoilicy from "./components/Footercomponents/CancellationRefundPoilicy.jsx";
import FAQSection from "./components/Homepagecomponents/FAQSection.jsx";

export default function App() {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
    <Routes>
      <Route path="/" element={<UserLayout/>}> 
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/review" element={<Review/>} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
        <Route path="/cancellation-refund-policy" element={<CancellationRefundPoilicy />} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="/shipping-policy" element={<ShippingPolicy/>} />
        <Route path="/faq" element={<FAQSection />} /> 
      </Route>

      <Route></Route>

      <Route></Route>
      <Route></Route>
      <Route></Route>

    </Routes>
    
    </BrowserRouter>
  )
}