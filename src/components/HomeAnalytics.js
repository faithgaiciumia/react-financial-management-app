import { createUseStyles } from "react-jss";
import BarChart from "./BarChart";
export default function HomeAnalytics({amount, text}) {
  const styles = useStyles();
  return (
    <div className={styles.container} >
      <div className={styles.header} >
        <p className={styles.heading} >Kes {amount}</p>
        <p className={styles.subHeading} >This Week's {text}</p>        
      </div>      
    </div>
  );
}
const useStyles = createUseStyles({
    container:{
        width:"48%",
        margin:"10px"
    },
    header:{
        marginBottom:"10px",
    },
    heading:{
        fontWeight:"800",
        fontFamily:"Poppins"
    },
    subHeading:{
        fontFamily:"Poppins",
        fontSize:"12px"
    }
})
