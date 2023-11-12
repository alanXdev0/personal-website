"use client";
import Link from "next/link";
import { useState, useEffect, ReactElement } from "react";

const ScrollLink = ({
  to,
  firstComponent = false,
  children,
}: {
  to: string;
  firstComponent: boolean;
  children: ReactElement[];
}) => {
  const [isActive, setIsActive] = useState(false);
  const [firstLoad, setFirstLoad] = useState(firstComponent);

  const handleScroll = () => {
    const targetElement = document.getElementById(to.slice(1));

    if (targetElement) {
      const { top, bottom } = targetElement.getBoundingClientRect();
      setIsActive(top <= 120 && bottom > 0);
      setFirstLoad(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Link
      href={to}
      className={`group flex items-center py-3 ${
        isActive || firstLoad ? "active" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
