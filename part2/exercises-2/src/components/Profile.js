import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItems = oceans.map(ocean => {
   return (
      
      <div key = {ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
         <img src ={ocean.image} alt ={ocean.name} className ="img" />
         <h1>{ocean.name}</h1>
         <h2>Fun facts</h2>
         <ul>
            <li key={`${ocean.id}fact-1`}>{ocean.fact1}</li>
            <li key={`${ocean.id}fact-2`}>{ocean.fact2}</li>
            <li key={`${ocean.id}fact-2`}>{ocean.fact3}</li>
         </ul>
         <Button />
      </div>
   );
}

   );

function Profile()
{
   return(
         <ul>
            {listItems}
         </ul>
   );
}

export default Profile;