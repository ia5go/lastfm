import Link from "next/link";
import styles from './Button.module.scss';

export default function Button({title, link}){

  return (
    <Link href={link} className={styles.btn}>
      {title}
    </Link>
  )
};

