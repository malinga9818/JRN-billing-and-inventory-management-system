import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import NavigationBar from "./Components/NavigationBar";
import BillingManagement from "./Pages/Billing/BillingManagement";
import InventoryManagement from "./Pages/Inventory/InventoryManagement";
import ReportManagement from "./Pages/Reports/ReportManagement";
import UsersManagement from "./Pages/Users/UsersManagement";
import Setting from "./Pages/Setting/SettingManagement";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        {/* Side navbar */}
        <div className="bg-light-gray w-36 md:w-44 h-full">
          <NavigationBar />
        </div>

        {/* our main content */}
        <div className="flex-1">
          <div className="p4 ">
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/billing" element={<BillingManagement />} />
              <Route path="/inventory" element={<InventoryManagement />} />
              <Route path="/report" element={<ReportManagement />} />
              <Route path="/user" element={<UsersManagement />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
