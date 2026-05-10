"use client";
import styles from "./Navigation.module.css";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import React, { useEffect, useRef, useState } from "react";
import { navbarContent } from "@/content/navbarContent";

export default function NavigationBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateNavbarState = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav ref={navRef}>
        <div className={styles.bm}>
          <BurgerMenu isOpen={menuIsOpen} onToggleAction={updateNavbarState} />
        </div>

        <ul
          className={`${styles.primaryNavigation} ${
            menuIsOpen ? styles.open : ""
          }`}
        >
          <li>
            <a className={styles.link} href={"#aboutMe"}>
              <span>{navbarContent.aboutMe}</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#tools"}>
              <span>{navbarContent.myTools}</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#projects"}>
              <span>{navbarContent.projects}</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#certificates"}>
              <span>{navbarContent.certificates}</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#professionalExperience"}>
              <span>{navbarContent.professionalExperience}</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#testimonials"}>
              <span>{navbarContent.testimonials}</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#skills"}>
              <span>{navbarContent.softSkills}</span>
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#Contact"}>
              <span>{navbarContent.letsConnectThere}</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
