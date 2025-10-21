import styles from "./styles.module.scss";

import { Box } from "@mui/material";
import { projectName } from "@/theme/theme-config";

const Footer = () => {
  return <Box className={`${styles["footer"]}`}>{projectName} @ DEVELO IT</Box>;
};

export default Footer;
