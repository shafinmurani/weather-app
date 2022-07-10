import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "transparent",
        color: "white",
        margin: "2rem",
        marginTop: "2rem",
      }}
    >
      <Typography variant="h6">
        Developed by :{" "}
        <a style={{ color: "unset" }} href="https://shafinmurani.github.io">
          {" "}
          Shafin Murani
        </a>
      </Typography>
    </div>
  );
}
