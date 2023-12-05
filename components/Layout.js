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

      <NavBar />

      <div>{children}</div>
    </>
  );
};

export default Layout;
