import styles from "./form.module.css"
import Grid from "./Grid"
import { Link } from "react-router-dom"
const Form=()=>{
    return(
        <>
        <div className={styles.mainForm}>
           <form>
            <select>
                <option>Toyota</option>
                <option>Grid</option>
                <option>BMW</option>
                <option>Ford</option>
            </select>
           </form>
        </div><br></br><br></br><br></br><br></br><br></br>
        <Link to="/grid" className={styles.grid}><button>Grid</button></Link>
            {/* <Grid className={styles.grid}/> */}
        </>
    )
}
export default Form