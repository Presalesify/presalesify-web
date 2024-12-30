import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Index from "@/pages/Index";
import Integrations from "@/pages/Integrations";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;