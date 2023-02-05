import { createUseStyles } from "react-jss";
export default function RecentRow({ sName, sAmount, sImage, sSign }) {
  const styles = useStyles();
  return (
    <div className={styles.tableRow}>
      <div style={{ width: "10%" }}>
        <img src={sImage} alt="icon" className={styles.tableIcon} />
      </div>
      <div style={{ width: "25%" }}>
        <p className={styles.tableHeading}>{sName}</p>
      </div>
      <div style={{ width: "25%" }}>
        <p className={styles.tableAmount}>
          {" "}
          {sSign} KES {sAmount}
        </p>
      </div>
      <div style={{width:"25%"}}>
        <p className={styles.tableDay}>Yesterday</p>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    margin: "10px",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "800",
    fontFamily: "Poppins",
  },
  link: {
    color: "#12B886",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "12px",
  },
  tableRow: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  tableIcon: {
    marginRight: "20px",
    width: "40px",
    height: "40px",
  },
  tableHeading: {
    fontWeight: "800",
    fontFamily: "Poppins",
    fontSize: "14px",
    marginRight: "40px",
  },
  tableAmount: {
    marginRight: "60px",
    fontFamily: "Poppins",
    fontSize: "14px",
  },
  tableDay: {
    marginRight: "60px",
    fontFamily: "Poppins",
    fontSize: "14px",
  },
});
