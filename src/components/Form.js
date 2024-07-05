"use client";

import styles from "./Form.module.scss";
import Button from "./Button";
import { useState } from "react";

export function Form() {
  const key = "23328c9ce3416834fbc11fe8e263a75c";
  const [search, setSearch] = useState("");

  return (
    <div className={styles.form}>
      <Button
        title="Album"
        // link={`http://ws.audioscrobbler.com/2.0/?method=album.search&$album=${search}&limit=5&api_key=${key}&format=json`}
        link={`/album/${search}`}
      />

      <input
        value={search}
        type="text"
        className={styles.form__input}
        placeholder="Search your singer or an album"
        onChange={(ev) => setSearch(ev.target.value.trim())}
      />

      <Button
        title="Artist"
        link={`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&limit=5&api_key=${key}&format=json`}
      />
    </div>
  );
}
// use state / use effect para capturar o value do input
// use effect vai fazer o link e o fetch vai ser realizado na página interna
