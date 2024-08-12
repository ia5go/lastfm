"use client";

import { Form } from "@/components/Form";
import styles from "./page.module.scss";

export default function Album({ params }) {
  console.log(params);

  return (
    <div className={styles.bgColor}>
      {/* TODO: VER COMO ADD VARIAÇÃO DE ESTILO PARA PG INTERNA; */}
      <Form />
    </div>
  );
}
