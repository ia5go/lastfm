"use client";

import Link from "next/link";
import styles from "./Button.module.scss";
import { useRouter } from "next/navigation";

const sleeper = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default function Button({ children, link }) {
  const router = useRouter();

  const transitionHandler = async (ev) => {
    ev.preventDefault();
    const form = document.querySelector("#form");

    console.log(form);

    form.style.top = "10%";
    await sleeper(500);
    router.push(link);

    await sleeper(500);
  };

  return (
    <Link onClick={transitionHandler} href={link} className={styles.btn}>
      {children}
    </Link>
  );
}
