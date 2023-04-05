import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <TopBar />
      <Footer />
    </>
  );
};

export default Layout;
