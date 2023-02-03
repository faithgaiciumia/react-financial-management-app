import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { createUseStyles } from "react-jss";
import RecentTable from "../../components/RecentTable";
import HomeAnalytics from "../../components/HomeAnalytics";
import BarChart from "../../components/BarChart";
import { spendings } from "../../data/SpendingData";
import { earnings } from "../../data/EarningData";

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.row}>
        <SideBar homeActive={true} />
        <div className={styles.main}>
          <div className={styles.mainRow}>
            <div
              className={styles.card}
              style={{ background: "rgba(217, 83, 79, 0.4)" }}
            >
              <HomeAnalytics amount="2,000" text="Spending" />
            </div>
            <div
              className={styles.card}
              style={{ background: "rgba(92, 184, 92, 0.4)" }}
            >
              <HomeAnalytics amount="10,000" text="Earning" />
            </div>
          </div>
          <div className={styles.mainRow}>
            <BarChart bgColor="#d9534f" />
            <BarChart bgColor="#5cb85c" />
          </div>
          <div className={styles.mainRow}>
            <RecentTable
              text="Spendings"
              array={spendings}
              borderColor="#d9534f"
            />
            <RecentTable
              text="Earnings"
              array={earnings}
              borderColor="#5cb85c"
            />
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
