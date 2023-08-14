import "../styles/Header.css";

import { IoIosPerson } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <header className="Header-Container">
      <h1 className="Header-Title">NicaVideo</h1>
      <button className="Header-LogoutButton">
        <IoIosPerson />
      </button>
    </header>
  );
}
