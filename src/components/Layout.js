import React from 'react';
import AppHeader from './AppHeader';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="container is-fluid">
      <AppHeader />

      {children}

      <Footer />
    </div>
  );
}
