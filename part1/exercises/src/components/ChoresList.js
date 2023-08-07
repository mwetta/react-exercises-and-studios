import classes from './ChoresList.module.css';
import React from 'react';


class ChoreList extends React.Component {
   render() {
      const chores = ["laundry", "mop", "dust", "take out trash"];
      return (
      <div>
         <h3 className = {classes.choresHeading}>Chores Before Hobbies</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ul>
      </div>
      );
   }
}

export default ChoreList;