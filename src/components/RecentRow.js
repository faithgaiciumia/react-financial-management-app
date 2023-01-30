import { createUseStyles } from "react-jss";
export default function RecentRow({sName, sAmount, sImage, sSign}) {
  const styles = useStyles();
  return (
    <div className={styles.tableRow}>
      <img
        src={sImage}
        alt="icon"
        className={styles.tableIcon}
      />
      <p className={styles.tableHeading}>{sName}</p>
      <p className={styles.tableAmount}> {sSign} KES {sAmount}</p>
      <p className={styles.tableDay}>Yesterday</p>
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
    justifyContent: "space-between",
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
    marginRight: "40px",
    fontFamily: "Poppins",
    fontSize: "14px",
  },
  tableDay: {
    marginRight: "40px",
    fontFamily: "Poppins",
    fontSize: "14px",
  },
});
