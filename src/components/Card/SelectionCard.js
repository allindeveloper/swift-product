
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import Badge from "../Badge/Badge"
import empty from "../../images/empty.svg"
import SpaceTop from '../Space/SpaceTop';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 535,
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SelectionCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={0} className={classes.root} style={{backgroundColor:props.color}}>
     
     <SpaceTop length={20}/>
      
      <CardContent>
          <h3 className="text-inner">{props.step}</h3>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.content}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
