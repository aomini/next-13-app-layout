import styles from "./page.module.css";
import Link from "next/link";
import { getUsers } from "./users/page";

export default async function Home() {
  await getUsers();
  return (
    <main className={styles.main}>
      <Link href="/users">Users</Link>
    </main>
  );
}
