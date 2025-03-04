import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import AssessmentHub from './components/assessment/AssessmentHub';
import QuestionScreen from './components/assessment/QuestionScreen';
import AssessmentReport from './components/assessment/AssessmentReport';
import ProfileSection from './components/Profile/ProfileSection';
import BlogLandingPage from './components/blog/BlogLandingPage';
import LandingPage from './components/landing/LandingPage';
import ContactUs from './components/landing/ContactUs';
import AboutUs from './components/landing/AboutUs';
import SignIn from './components/landing/SignIn';
import SignUp from './components/landing/SignUp';
import EditProfile from './components/Profile/EditProfile';
import { AuthProvider } from './components/contexts/AuthContext';
import BlogPost from './components/blog/BlogPost';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessments" element={<AssessmentHub />} />
          <Route
            path="/assessments/:assessmentId/questions"
            element={<QuestionScreen />}
          />
          <Route path="/assessment-report/:id" element={<AssessmentReport />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Profile" element={<ProfileSection />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/blog" element={<BlogLandingPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* Add other routes if needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
