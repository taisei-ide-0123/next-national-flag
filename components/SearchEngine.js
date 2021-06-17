import styles from '../styles/SearchEngine.module.css'

export default function SearchEngine() {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="name"
        id="input"
        placeholder="Search for a country..."
      />
    </div>
  )
}
