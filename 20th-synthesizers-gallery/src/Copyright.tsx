import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/totuus1157/20th-synthesizers-gallery"
      >
        Totuus1157
      </Link>{" "}
      {"All Rights Reserved."}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
