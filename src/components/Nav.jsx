import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href={"/"}>
        <Image src={"assets/images/logo.svg"} width={30} height={30} />
      </Link>
      <p>Promptopia</p>
    </nav>
  );
};

export default Nav;
