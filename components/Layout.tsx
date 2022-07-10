import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen py-[14.6875rem] flex justify-center">
    <div className="w-full max-w-[100ch] px-4 lg:px-0 my-auto">{children}</div>
  </div>
);

export default Layout;
