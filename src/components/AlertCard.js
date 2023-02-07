import { createUseStyles } from "react-jss";

export default function AlertCard({message}) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <p style={{fontFamily:"Poppins", fontSize:"12px"}}> {message} </p>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.3)",
    padding:"10px"
  },
});
