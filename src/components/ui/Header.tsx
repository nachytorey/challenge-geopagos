import { FC } from "react";

interface IHeaderProps {
  isDark: boolean;
  shopName?: string;
}

const Header: FC<IHeaderProps> = ({ isDark, shopName }) => {
  return (
    <header className={isDark ? "bg-blue" : "transparent"}>
      <img
        alt="logo"
        src={isDark ? "/logo-white.png" : "/logo-black.png"}
        height={25}
        width={120}
      />
      <p className={isDark ? "text-white" : "text-gray"}>{shopName}</p>
    </header>
  );
};

export default Header;
