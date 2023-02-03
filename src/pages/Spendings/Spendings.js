import { createUseStyles } from "react-jss";
import RecentRow from "../../components/RecentRow";
import RecentTable from "../../components/RecentTable";
import SideBar from "../../components/SideBar";
import { spendings } from "../../data/SpendingData";

export default function Spendings() {
  const styles = useStyles();
  const spendingsList = spendings.map((spending) => (
    <RecentRow
      key={spending.id}
      sName={spending.sName}
      sAmount={spending.sAmount}
      sImage={spending.sImage}
      sSign={spending.sSign}
    />
  ));
  return (
    <>
      <div className={styles.row}>
        <SideBar spendingsActive={true} />
        <div className={styles.main}>
          <div>
            <h2>Spendings</h2>
          </div>
          <div>
            {spendingsList}
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
    width: "100%",
  },
  mainRow: {
    display: "flex",
  },
  card: {
    borderRadius: "8px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    width: "48%",
    margin: "10px",
  },
});
