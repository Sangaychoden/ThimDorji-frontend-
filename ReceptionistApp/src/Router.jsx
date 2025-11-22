
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import Booking from "./Pages/Booking";
// import BookingDetails from "./Pages/BookingDetails"; // Booking details page
// import AdminLayout from "./Components/AdminLayout";

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Pages */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />

//         {/* Admin Pages with layout */}
//         <Route
//           path="/dashboard"
//           element={
//             <AdminLayout>
//               <Dashboard />
//             </AdminLayout>
//           }
//         />

//         <Route
//           path="/booking"
//           element={
//             <AdminLayout>
//               <Booking />
//             </AdminLayout>
//           }
//         />

//         {/* ✅ Supports both /booking-details and /booking-details/:id */}
//         <Route
//           path="/booking-details/:id?"
//           element={
//             <AdminLayout>
//               <BookingDetails />
//             </AdminLayout>
//           }
//         />

//         {/* Add more admin routes here */}
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Booking from "./Pages/Booking";
import BookingDetails from "./Pages/BookingDetails"; 
import BookingFormPage from "./Pages/BookingFormPage";  // ✅ NEW PAGE ADDED
import AdminLayout from "./Components/AdminLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Pages with layout */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/booking"
          element={
            <AdminLayout>
              <Booking />
            </AdminLayout>
          }
        />

        {/* Booking Details */}
        <Route
          path="/booking-details/:id?"
          element={
            <AdminLayout>
              <BookingDetails />
            </AdminLayout>
          }
        />

        {/* ✅ NEW → Booking Form Page (same form, new page) */}
        <Route
          path="/booking-form/:id?"
          element={
            <AdminLayout>
              <BookingFormPage />
            </AdminLayout>
          }
        />

        {/* Add more admin routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
