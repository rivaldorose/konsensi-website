import Layout from "./Layout.jsx";

import Home from "./Home";

import AlgemeneVoorwaarden from "./AlgemeneVoorwaarden";

import Blogs from "./Blogs";

import BlogBeheer from "./BlogBeheer";

import Contact from "./Contact";

import OverOns from "./OverOns";

import KonsensiTalks from "./KonsensiTalks";

import OnzePartners from "./OnzePartners";

import LessenBeheer from "./LessenBeheer";

import Budgetlessen from "./Budgetlessen";

import PrivacyPolicy from "./PrivacyPolicy";

import PersPartners from "./PersPartners";

import Pilot from "./Pilot";

import PilotDownloadsBeheer from "./PilotDownloadsBeheer";

import PartnersBeheer from "./PartnersBeheer";

import Updates from "./Updates";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    AlgemeneVoorwaarden: AlgemeneVoorwaarden,
    
    Blogs: Blogs,
    
    BlogBeheer: BlogBeheer,
    
    Contact: Contact,
    
    OverOns: OverOns,
    
    KonsensiTalks: KonsensiTalks,
    
    OnzePartners: OnzePartners,
    
    LessenBeheer: LessenBeheer,
    
    Budgetlessen: Budgetlessen,
    
    PrivacyPolicy: PrivacyPolicy,
    
    PersPartners: PersPartners,
    
    Pilot: Pilot,
    
    PilotDownloadsBeheer: PilotDownloadsBeheer,
    
    PartnersBeheer: PartnersBeheer,
    
    Updates: Updates,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/AlgemeneVoorwaarden" element={<AlgemeneVoorwaarden />} />
                
                <Route path="/Blogs" element={<Blogs />} />
                
                <Route path="/BlogBeheer" element={<BlogBeheer />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/OverOns" element={<OverOns />} />
                
                <Route path="/KonsensiTalks" element={<KonsensiTalks />} />
                
                <Route path="/OnzePartners" element={<OnzePartners />} />
                
                <Route path="/LessenBeheer" element={<LessenBeheer />} />
                
                <Route path="/Budgetlessen" element={<Budgetlessen />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/PersPartners" element={<PersPartners />} />
                
                <Route path="/Pilot" element={<Pilot />} />
                
                <Route path="/PilotDownloadsBeheer" element={<PilotDownloadsBeheer />} />
                
                <Route path="/PartnersBeheer" element={<PartnersBeheer />} />
                
                <Route path="/Updates" element={<Updates />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}