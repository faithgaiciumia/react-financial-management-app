import { createUseStyles } from "react-jss";
import HeaderBar from "../../components/HeaderBar";
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
              <h1>Profile</h1>
            </div>
            <div className={styles.bordered}>
              <h1>Account Details</h1>
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
    flexWrap:"wrap",
    justifyContent:"center"
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
    width:"40%",
    margin:"10px"

  },
});
