import React from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Home from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;