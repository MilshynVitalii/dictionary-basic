import styles from './Page.module.scss';

function Page({title, children}) {
  return (
    <section>
      <header>
        <h2 className={styles.title}>{title}</h2>
      </header>
      {children}
    </section>
  )
}

export default Page;