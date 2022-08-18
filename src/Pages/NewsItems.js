import react from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <Card maxWidth="md" style={{ padding: "1rem", margin: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" height="500" image={urlToImage} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" href={url} target="blank" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
