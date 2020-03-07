import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
//import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
//import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1000,
    margin: 15
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={props.title} subheader={props.subtitle} />
     
      <CardContent> 
      
        <Typography variant="body2" color="textSecondary" component="p">
          Business-to-consumer user experience learning curve marketing research & 
          development accelerator bootstrapping launch party crowdsource agile development niche 
          market lean startup responsive web design. Partnership monetization incubator.
        </Typography>
        
          <Typography variant="body2" color="primary" component="p" >- Kaustubh Eppalapalli  </Typography> 
   
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> 
        <Typography variant="body2" color="textPrimary" component="p" >Jul 08, '20</Typography>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Info:</Typography>
          <Typography paragraph>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. 
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </Typography>
          <Typography paragraph>
            Bring to the table win-win survival strategies to ensure proactive domination. 
            At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a 
            streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
          </Typography>
          <Typography>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
            Override the digital divide with additional clickthroughs from DevOps. 
            Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
