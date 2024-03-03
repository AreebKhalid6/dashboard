import Image from "next/image";
import { TbSpeakerphone } from "react-icons/tb";
import { BiNews } from "react-icons/bi";
import { AiOutlineCloud } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiChat1 } from "react-icons/ci";
import { TbBell } from "react-icons/tb";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "Website Analytics",
    href: "/",
    icon: BiNews,
  },
  {
    name: "Marketing Analytics",
    href: "/marketinganalytics",
    icon: TbSpeakerphone,
  },  
  {
    name: "Knowledge Base",
    href: "/knowleadebase",
    icon: HiOutlineLightBulb ,
  },
  {
    name: "Kore Drive",
    href: "/koredrive",
    icon: AiOutlineCloud,
  },
];
const chatbar = [
  {
    name: "Chat Support",  
    href: "/chat", 
    icon: CiChat1 ,
  }
]
const notfication = [
  {
    name: "Notfication",  
    href: "/notfication", 
    icon: TbBell ,
  }
]


const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const handleSidebarClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      return;
    }

    toggleSidebarcollapse();
  };
  

  return (
    <div className="sidebar__wrapper" >
      <aside className="sidebar" data-collapse={isCollapsed} onClick={handleSidebarClick}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/assets/user.png"
            alt="logo"
          />
          <p className="sidebar__logo-name">Carl Johnson</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="chatbar__list">
          {chatbar.map(({name, href, icon:Icon}) =>{
            return(
              <li className="chatbar-item" key={name}>
              <Link
                className={`sidebar__link ${
                  router.pathname === href ? "sidebar__link--active" : ""
                }`}
                href={href}
              >
                <span className="sidebar__icon">
                  <Icon />
                </span>
                <span className="sidebar__name">{name}</span>
              </Link>
            </li>
            )
          })}
        </ul>
        <ul className="notfication__list">
        {notfication.map(({name, href, icon:Icon}) =>{
            return(
              <li className="notfication-item" key={name}>
              <Link
                className={`sidebar__link ${
                  router.pathname === href ? "sidebar__link--active" : ""
                }`}
                href={href}
              >
                <span className="sidebar__icon">
                  <Icon />
                </span>
                <span className="sidebar__name">{name}</span>
              </Link>
            </li>
            )
          })}
        </ul>
      </aside>
     
    </div>
  );
};

export default Sidebar;
