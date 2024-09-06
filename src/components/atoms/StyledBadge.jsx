import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#EDEDED",
    color: "#363738",
  },
}));
