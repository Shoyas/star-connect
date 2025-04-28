import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p className="mt-3 text-lg">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </main>
      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
