import { createUseStyles } from "react-jss";

export default function ProfileCircle() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.profile} style={{width:"100px", height:"100px"}}>
        <p className={styles.profileTxt}>F</p>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
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
});
