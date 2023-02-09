import { createUseStyles } from "react-jss";
import HeaderBar from "../../components/HeaderBar";
import ProfileCircle from "../../components/ProfileCircle";
import SideBar from "../../components/SideBar";

export default function Profile() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.row}>
        <SideBar profileActive={true} />
        <div className={styles.main}>
          <HeaderBar title="Profile" />
          <div
            className={styles.mainRow}
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className={styles.bordered}>
              <div>
                <h1 style={{ fontFamily: "Poppins", fontSize: "16px" }}>
                  Profile
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div>
                  <ProfileCircle />
                  <h1
                    style={{
                      marginTop: "10px",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      color: "#12B886",
                      textAlign:"center"
                    }}
                  >
                    Update Photo
                  </h1>
                </div>
                <div style={{ width: "100%", marginLeft: "10px" }}>
                  <p style={{
                    fontFamily:"Poppins",
                    fontSize:"12px"
                  }}>Faith Kamencu</p>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom:"0.5px solid rgba(0, 0, 0, 0.3)",
                      paddingBottom:"5px"
                    }}
                  >
                    <p style={{fontFamily:"Poppins", fontSize:"12px", color:"rgba(0,0,0, 0.5)"}}>Joined in 2023</p>
                    <h1 style={{fontFamily:"Poppins", fontSize:"12px", color:"#12B886"}}>Change name</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bordered}>
              <div>
                <h1 style={{ fontFamily: "Poppins", fontSize: "16px" }}>
                  Account Details
                </h1>
              </div>
              <div></div>
            </div>
            <div className={styles.bordered}>3</div>
            <div className={styles.bordered}>4</div>
            <div className={styles.bordered}>5</div>
          </div>
        </div>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  row: {
    display: "flex",
  },
  main: {
    width: "78%",
  },
  mainRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    borderRadius: "8px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    width: "48%",
    margin: "10px",
  },
  bordered: {
    border: "0.5px solid rgba(0,0,0, 0.3)",
    padding: "10px",
    width: "40%",
    margin: "10px",
  },
});
