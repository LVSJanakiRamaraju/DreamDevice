import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import ClientDashboard from "./components/dashboards/client/ClientDashboard";
import ExpertDashboard from "./components/dashboards/ExpertDashboard";
import { useSelector } from "react-redux";


function App() {

  const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute allowedRole="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/client-dashboard"
          element={
            <PrivateRoute allowedRole="client">
              <ClientDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/expert-dashboard"
          element={
            <PrivateRoute allowedRole="expert">
              <ExpertDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
