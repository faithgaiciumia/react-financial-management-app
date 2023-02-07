import { createUseStyles } from "react-jss";
import FilterList from "../../components/FilterList";
import HeaderBar from "../../components/HeaderBar";
import RecentRow from "../../components/RecentRow";
import SideBar from "../../components/SideBar";
import { earnings } from "../../data/EarningData";
import { EarningCategories } from "../../data/EarningCategories";

export default function Earnings() {
  const styles = useStyles();
  const earningsList = earnings.map((earning) => (
    <RecentRow
      key={earning.id}
      sName={earning.sName}
      sAmount={earning.sAmount}
      sImage={earning.sImage}
      sSign={earning.sSign}
    />
  ));
  return (
    <>
      <div className={styles.row}>
        <SideBar earningsActive={true} />
        <div className={styles.main}>
          <div>
            <HeaderBar title="Earnings" />
          </div>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <FilterList array={EarningCategories} />
          </div>
          <div>{earningsList}</div>
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
    boxSizing: "border-box",
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