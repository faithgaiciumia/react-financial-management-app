import { createUseStyles } from "react-jss";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaidIcon from '@mui/icons-material/Paid';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
export default function SideBar() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
            <p className={styles.profileTxt}>F</p>
        </div>
        <p className={styles.bold}>Faith Gaiciumia</p>
      </div>
      <div className={styles.list}>
        <div className={styles.listRow}>
            <HomeIcon/>
            <p className={styles.listTxt}>Home</p>
        </div>
        <div className={styles.listRow}>
            <PersonIcon/>
            <p className={styles.listTxt}>Profile</p>
        </div>
        <div className={styles.listRow}>
            <ShoppingBagIcon/>
            <p className={styles.listTxt}>Spendings</p>
        </div>
        <div className={styles.listRow}>
            <PaidIcon/>
            <p className={styles.listTxt}>Earnings</p>
        </div>
        <div className={styles.listRow}>
            <QueryStatsIcon/>
            <p className={styles.listTxt}>Predictions</p>
        </div>
        <div className={styles.listRow}>
            <SettingsIcon/>
            <p className={styles.listTxt}>Account & Settings</p>
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    backgroundColor: "rgba(198, 243, 202, 0.4)",
    height: "100vh",
    width:"20%"
  },
  header: {
    backgroundColor: "#C6F3CA",
    height:"30vh",
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  profile:{
    backgroundColor:"#12B886",
    width:"100px",
    height:"100px",
    borderRadius:"50%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center"
  },
  profileTxt:{
    fontFamily:"Poppins",
    color:"#fff",
    fontWeight:"800",
    fontSize:"22px"
  },
  bold:{
    fontFamily:"Poppins",
    fontWeight:"800",
    fontSize:"14px",
    marginTop:"10px"
  },
  list:{
    margin:"10px"
  },
  listRow:{
    display:"flex",
    alignContent:"center",
    alignItems:"center",
    marginTop:"10px"
  },
  listTxt:{
    fontFamily:"Poppins",
    fontSize:"12px",
    marginLeft:"10px"
  }
});
