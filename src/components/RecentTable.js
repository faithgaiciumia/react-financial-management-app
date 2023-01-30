import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import RecentRow from "./RecentRow";
export default function RecentTable({ text, array }) {
  const styles = useStyles();
  const spendingsList = array.map((spending) => (
    <RecentRow
      key={spending.id}
      sName={spending.sName}
      sAmount={spending.sAmount}
      sImage={spending.sImage}
    />
  ));
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <p className={styles.heading}>Recent {text}</p>
        <Link className={styles.link}>
          <p className={styles.link}>View All</p>
        </Link>
      </div>
      {spendingsList}
    </div>
  );
}
const useStyles = createUseStyles({
  container: {
    margin: "10px",
    width: "48%",
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
    marginRight: "40px",
    width: "50px",
    height: "50px",
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
