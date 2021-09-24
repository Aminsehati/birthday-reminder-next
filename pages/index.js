import styles from '../styles/Home.module.css';
import Cart from "../compoents/cart";
import List from '../compoents/List';
import {useState} from "react";
import data from '../public/data'
const Home = ()=>{
    const [people , setPeople] = useState(data);
    return (
        <div className={styles.Home}>
            <Cart>
                <h4>
                    {people.length} birthdays today
                </h4>
                {
                    people.map(item=>{
                        return <List listData={item} key={item.id}/>
                    })
                }
                <button className="btn-clear"
                        onClick={()=>setPeople([])}
                >
                    Clear All
                </button>
            </Cart>
        </div>
    )
}
export default Home
