import { createUseStyles } from "react-jss";

export default function ReportCard() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <p>Total Spending</p>
      <p>Kes 100, 000</p>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {    
    width: "30%",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    border:"0.5px solid rgba(0, 0, 0, 0.3)"
  },
});
