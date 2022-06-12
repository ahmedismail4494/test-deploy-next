import Link from "next/link";
import NavbarStyle from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={NavbarStyle.navbar}>
      <span className={NavbarStyle.lnk}> <Link href="/"  >  Home  </Link> </span>
      <span className={NavbarStyle.lnk}> <Link href="/about" > About </Link> </span>
      <span className={NavbarStyle.lnk}> <Link href="/contact" > Contact </Link> </span>
      <span className={NavbarStyle.lnk} style={{background:'yellow'}}> <Link href="/posts" > Posts </Link> </span>
      <span className={NavbarStyle.lnk} style={{background:'yellow'}}> <Link href="/skills" > Skills </Link> </span>

    </div>
  )
}

export default Navbar
