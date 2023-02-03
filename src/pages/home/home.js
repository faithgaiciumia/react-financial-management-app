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
      id: 0,
      sName: "Rent",
      sAmount: 10000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/emoji/512/house-emoji.png",
      sSign: "-",
    },
    {
      id: 1,
      sName: "Grocery",
      sAmount: 2500,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/color/512/ingredients.png",
      sSign: "-",
    },
    {
      id: 2,
      sName: "Clothes",
      sAmount: 5000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/color/512/clothes.png",
      sSign: "-",
    },
    {
      id: 3,
      sName: "Enjoyment",
      sAmount: 2000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/color/512/festival.png",
      sSign: "-",
    },
    {
      id: 4,
      sName: "Church",
      sAmount: 10000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/color/512/city-church.png",
      sSign: "-",
    },
  ];
  const earnings = [
    {
      id: 0,
      sName: "Shumia Enterprises",
      sAmount: 100000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/emoji/512/money-bag-emoji.png",
      sSign: "+",
    },
    {
      id: 1,
      sName: "Somesha Foundation",
      sAmount: 100000,
      sDay: "Yesterday",
      sImage: "https://img.icons8.com/emoji/512/money-bag-emoji.png",
      sSign: "+",
    },
  ];

  return (
    <>
      <div className={styles.row}>
        <SideBar homeActive={true} />
        <div className={styles.main}>
          <div className={styles.mainRow}>
            <div className={styles.card} style={{background:"rgba(217, 83, 79, 0.4)"}}>
              <HomeAnalytics amount="2,000" text="Spending" />
            </div>
            <div className={styles.card} style={{background:"rgba(92, 184, 92, 0.4)"}}>
              <HomeAnalytics amount="10,000" text="Earning" />
            </div>
          </div>
          <div className={styles.mainRow}>
            <BarChart bgColor="#d9534f" />
            <BarChart bgColor="#5cb85c" />
          </div>
          <div className={styles.mainRow}>
            <RecentTable text="Spendings" array={spendings} borderColor="#d9534f" />
            <RecentTable text="Earnings" array={earnings} borderColor="#5cb85c" />
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
