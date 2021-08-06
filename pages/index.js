import Link from 'next/Link'
import styles from '../styles/Home.module.css'

//css modules are scoped automatically to avoid naming conflicts
//next adds random characters to the className making each className unique even across different components

export default function Home() {
  return (
    <div >
     
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis fugiat vero quo nesciunt velit, ex labore, reiciendis qui numquam aliquid distinctio autem necessitatibus perspiciatis est vel doloremque rem pariatur minus maiores sed exercitationem voluptatum. Ducimus provident possimus aliquid sunt mollitia architecto consequatur, libero placeat, nesciunt labore repellat magni facere modi deserunt voluptatum nisi sit quae! Dignissimos cupiditate aliquid, nobis quas hic eaque sequi sed. Non, ea commodi ab unde iusto quae modi perferendis cum magnam mollitia ipsum consequuntur recusandae alias ducimus saepe vero. In ratione ex, ducimus libero laboriosam id distinctio optio molestiae doloremque doloribus aliquid consectetur a ad repellat ut fugit molestias enim veritatis. Odit incidunt accusamus commodi asperiores aperiam eos, necessitatibus perspiciatis pariatur assumenda fuga velit numquam reiciendis?</p>
      <Link href="/cast">
        <a className={styles.btn}>Meet the Cast</a>
      </Link>
    </div>
    
  )
}
