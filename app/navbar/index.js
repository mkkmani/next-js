"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import menuIcon from "../../public/menu.svg";
import labIcon from "../../public/lab.svg";
import prescriptionIcon from "../../public/prescription.svg";
import registrationIcon from "../../public/registration.svg";
import reportsIcon from "../../public/reports.svg";
import appointmentIcon from "../../public/appointment.svg";
import loginIcon from "../../public/login.svg";
import closeIcon from "../../public/close.svg"
import "./index.css";

const navItems = [
  {
    id: 1,
    title: "Patients",
    path: "/patients",
    icon: registrationIcon,
  },
  {
    id: 2,
    title: "Appointments",
    path: "/appointments",
    icon: appointmentIcon,
  },
  { id: 3, title: "Tests", path: "/tests", icon: labIcon },
  {
    id: 4,
    title: "Reports",
    path: "/reports",
    icon: reportsIcon,
  },
  {
    id: 5,
    title: "Prescriptions",
    path: "/prescriptions",
    icon: prescriptionIcon,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <nav>
      <Link href="/" className="logo">
        PMS
      </Link>

      <button
        onClick={() => {
          toggleMenu(!isMenuOpen);
        }}
      >
        <Image src={menuIcon} alt="menu" className="menu-icon" />
      </button>

      <div className="login-ul">
        <Link href="/admin-profile">
          <div className="link">
            <button>
              <Image src={loginIcon} alt="login" className="login-icon" />
            </button>
            <p>Login</p>
          </div>
        </Link>

        <ul className={isMenuOpen ? "nav-ul" : "nav-ul menu-inactive"}>
          <div className="sm-menu-logo">
            <Link href="/" className="sm-menu-logo">
              PMS
            </Link>
            <button onClick={()=>{toggleMenu(!isMenuOpen)}}>
              <Image src={closeIcon} alt="close" className="login-icon" />
            </button>
          </div>

          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <div className="link">
                <Image
                  src={navItem.icon}
                  alt={navItem.title}
                  className="login-icon"
                />

                <Link href={navItem.path}>{navItem.title}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
