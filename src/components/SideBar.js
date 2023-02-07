import { createUseStyles } from "react-jss";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PaidIcon from "@mui/icons-material/Paid";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
export default function SideBar({
  homeActive,
  profileActive,
  spendingsActive,
  earningsActive,
  predictionsActive,
  settingsActive,
}) {
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
        <div className={homeActive ? styles.listRowActive : styles.listRow}>
          <HomeIcon />
          <Link
            to="/home"
            className={homeActive ? styles.listTxtActive : styles.listTxt}
          >
            <p style={{ fontFamily: "Poppins" }}>Home</p>
          </Link>
        </div>
        <div
          className={spendingsActive ? styles.listRowActive : styles.listRow}
        >
          <ShoppingBagIcon />
          <Link
            to="/spendings"
            className={spendingsActive ? styles.listTxtActive : styles.listTxt}
          >
            <p style={{ fontFamily: "Poppins" }}>Spendings</p>
          </Link>
        </div>
        <div className={earningsActive ? styles.listRowActive : styles.listRow}>
          <PaidIcon />
          <Link
            to="/earnings"
            className={earningsActive ? styles.listTxtActive : styles.listTxt}
          >
            <p style={{ fontFamily: "Poppins" }}>Earnings</p>
          </Link>
        </div>
        <div
          className={predictionsActive ? styles.listRowActive : styles.listRow}
        >
          <QueryStatsIcon />
          <Link
            to="/predictions"
            className={
              predictionsActive ? styles.listTxtActive : styles.listTxt
            }
          >
            <p style={{ fontFamily: "Poppins" }}>Stats</p>
          </Link>
        </div>
        <div className={profileActive ? styles.listRowActive : styles.listRow}>
          <PersonIcon />
          <Link
            to="/profile"
            className={profileActive ? styles.listTxtActive : styles.listTxt}
          >
            <p style={{ fontFamily: "Poppins" }}>Profile</p>
          </Link>
        </div>
        <div className={settingsActive ? styles.listRowActive : styles.listRow}>
          <SettingsIcon />
          <Link
            to="/settings"
            className={settingsActive ? styles.listTxtActive : styles.listTxt}
          >
            <p style={{ fontFamily: "Poppins" }}>Account & Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    backgroundColor: "rgba(198, 243, 202, 0.4)",

    width: "20%",
  },
  header: {
    backgroundColor: "#C6F3CA",
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  profile: {
    backgroundColor: "#12B886",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  profileTxt: {
    fontFamily: "Poppins",
    color: "#fff",
    fontWeight: "800",
    fontSize: "22px",
  },
  bold: {
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: "14px",
    marginTop: "10px",
  },
  list: {
    margin: "10px",
  },
  listRow: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    marginTop: "10px",
    padding: "5px",
  },
  listRowActive: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    marginTop: "10px",
    backgroundColor: "#12B886",
    padding: "5px",
    borderRadius: "6px",
    color: "#fff",
  },
  listTxt: {
    fontFamily: "Poppins",
    fontSize: "12px",
    marginLeft: "10px",
    color: "#000",
    textDecoration: "none",
  },
  listTxtActive: {
    fontFamily: "Poppins",
    fontSize: "12px",
    marginLeft: "10px",
    color: "#fff",
    textDecoration: "none",
  },
});
