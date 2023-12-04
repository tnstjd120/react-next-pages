import { usePathname } from "next/navigation";

const { default: Link } = require("next/link");

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link href={`/`} className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href={`/about`} className={pathname === "/about" ? "active" : ""}>
        About
      </Link>
    </nav>
  );
};

export default NavBar;
