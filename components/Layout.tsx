import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

interface LayoutProps {
  moveTable: Record<string, any>;
  children: ReactNode;
}

const Layout = ({ moveTable, children }: LayoutProps) => {
  return (
    <>
      <Header moveTable={moveTable} />
      {children}
      <TopBar />
      <Footer />
    </>
  );
};

export default Layout;
