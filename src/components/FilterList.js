import { createUseStyles } from "react-jss";
import SnackBar from "./SnackBar";

export default function FilterList({ array }) {
  const styles = useStyles();
  const spendingCatList = array.map((category) => (
    <SnackBar key={category.id} text={category.category} />
  ));
  return (
    <div className={styles.container}>
      <div className={styles.row}>{spendingCatList}</div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
});
