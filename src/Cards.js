import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TextareaAutosize } from "@mui/base";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import Badge from "@mui/material/Badge";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

function Actions({ items }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1} style={{ marginLeft: "auto" }}>
        {items.map((i) => (
          <Chip label={i} onClick={() => {}} />
        ))}
      </Stack>
    </Box>
  );
}

function ChatCard({ item, removeCard }) {
  const [content, setContent] = React.useState(item.content);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 275, margin: 2 }} maxWidth>
      <CardContent>
        <Typography variant="body2"> </Typography>
        <TextareaAutosize
          maxWidth
          style={{
            width: "100%"
          }}
          minRows={3}
          placeholder="Empty"
          defaultValue={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </CardContent>

      <CardActions
        styles={{ "align-items": "end" }}
        style={{ paddingRight: 20 }}
      >
        <IconButton
          aria-label="Copy"
          onClick={() => {
            alert(item.id);
          }}
        >
          <ContentCopyIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="Create">
          <EditNoteIcon />
        </IconButton>
        <IconButton aria-label="Delete">
          <DeleteIcon
            onClick={() => {
              removeCard(item.id);
            }}
          />
        </IconButton>

        {item.type === "transcript" ? (
          <>
            <Badge
              badgeContent={4}
              color="primary"
              style={{ marginLeft: "auto" }}
            >
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Badge>
          </>
        ) : (
          ""
        )}
      </CardActions>
      {item.type === "transcript" ? (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Actions
            items={[
              "1321",
              "2321",
              "3321",
              "1321",
              "2321",
              "3321",
              "1321",
              "2321",
              "3321",
              "1321",
              "2321",
              "3321"
            ]}
          />
        </Collapse>
      ) : (
        ""
      )}
    </Card>
  );
}

export function Cards({ cards, removeCard }) {
  return cards.map((c, i) => {
    return <ChatCard item={c} removeCard={removeCard} />;
  });
}
