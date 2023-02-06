import { createUseStyles } from "react-jss";

export default function SnackBar({ text }) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <p style={{fontFamily:"Poppins", fontSize:"12px"}}>{text}</p>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    maxWidth: "25%",
    padding: "5px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginRight:"10px"
  },
});
