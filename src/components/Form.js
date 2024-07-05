import styles from "./Form.module.scss";
import Button from "./button";

export function Form(){

  return (
    <div className={styles.form}>
      <Button title='Album' link="#"/>

      <input type="text" className={styles.form__input} placeholder="Search your singer or an album" />
      
      <Button title='Artist' link="#"/>
    </div>
  )
};

