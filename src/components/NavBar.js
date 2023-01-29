import { createUseStyles } from "react-jss";
import logo from "../../src/img/finlogo.png";
export default function NavBar() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <div>
        <p className={styles.sideLogo}>Home</p>
      </div>
    </div>
  );
}
const useStyles = createUseStyles({
  container: {
    backgroundColor: "#fff",
    padding:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center"
  },
  logo:{
    height:"50px"
  },
  sideLogo:{
    fontFamily:"Poppins",
    fontSize:"14px",
    fontWeight:"800"
  }
});
