import styles from './style.module.css'
const List = (props)=>{
    const {image , name , age } = props.listData
    return (
        <div className={styles.list}>
            <div className={styles.icon}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.content}>
                <h5>
                    {name}
                </h5>
                <h6>
                    {age} Years
                </h6>
            </div>
        </div>
    )
}
export default List;
