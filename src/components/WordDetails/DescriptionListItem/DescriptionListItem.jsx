import styles from './DescriptionListItem.module.scss';

function DescriptionListItem({heading, info}) {
  return (
    <div className={styles.descr}>
      <dt className={styles.descrName}>{heading}:</dt>
      <dd className={styles.descrInfo}>
        {
          Array.isArray(info) 
            ? info.map((d, i) => <p key={i}>{i + 1}) {d}</p>)
            : info
        }
      </dd>
    </div>
  )
}

export default DescriptionListItem;