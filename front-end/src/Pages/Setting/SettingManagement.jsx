
// SettingManagement.jsx
import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import Header from '../../Components/Header';
import Setting from './Setting';

function SettingManagement() {
  return (
    <div>
      <Header />
      <Setting /> {/* ✅ This displays the dark/light toggle */}
    </div>
  );
}

export default SettingManagement;


