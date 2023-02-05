import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createUseStyles } from "react-jss";

export default function HeaderBar({title}) {
  const styles = useStyles();
  return (
    <div className={styles.row}>
      <div>
        <h1 className={styles.heading}>{title}</h1>
      </div>
      <div style={{display:"flex", alignContent:"center", alignItems:"center"}}>
        <FilterListIcon style={{fontSize:"18px"}}/>
        <p className={styles.text}>Sort</p>
        
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    boxShadow: "rgba(149, 157, 165, 0.1) 0px 8px 24px",
    padding: "10px",
    borderRadius: "8px",
  },
  text:{
    fontFamily:"Poppins",
    fontSize:"12px"
  },
  heading:{
    fontSize:"20px",
    fontFamily:"Poppins"
  }
});
