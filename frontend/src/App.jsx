import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductForm from "./components/productForm";

// File: src/App.jsx
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Dashboard />
      </div>
    </div>
    
  );
}


