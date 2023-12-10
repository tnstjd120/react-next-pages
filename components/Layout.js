import Head from "next/head";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <title>
          {" "}
          {pathname === "/" ? "home" : pathname.replace("/", "")} | Movies
        </title>
      </Head>

      <div className="wrap">
        <NavBar />
        <div>{children}</div>
      </div>
      <style jsx>{`
        .wrap {
          width: 100%;
          max-width: 768px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Layout;
