import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { createUseStyles } from "react-jss";
import RecentTable from "../../components/RecentTable";
import HomeAnalytics from "../../components/HomeAnalytics";
import BarChart from "../../components/BarChart";

export default function Home() {
  const styles = useStyles();
  const spendings = [
    {
      id:0,
      sName: "Rent",
      sAmount: 10000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/emoji/512/house-emoji.png",
    },
  ];
  const earnings = [
    {
      id:0,
      sName: "Shumia Enterprises",
      sAmount: 100000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/emoji/512/money-bag-emoji.png",
    },
    {
      id:1,
      sName: "Shumia Enterprises",
      sAmount: 100000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/emoji/512/money-bag-emoji.png",
    },
  ];

  return (
    <>
      <div className={styles.row}>
        <SideBar />
        <div className={styles.main}>
          <div className={styles.mainRow}>
            <HomeAnalytics amount="2,000" text="Spending" />
            <HomeAnalytics amount="10,000" text="Earning" />
          </div>
          <div className={styles.mainRow}>
            <BarChart bgColor="#d9534f" />
            <BarChart bgColor="#5cb85c" />
          </div>
          <div className={styles.mainRow}>
            <RecentTable text="Spendings" array={spendings} />
            <RecentTable text="Earnings" array={earnings} />
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
});
