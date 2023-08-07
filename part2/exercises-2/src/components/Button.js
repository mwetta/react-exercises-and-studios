import './styles.css';

function Button() {

   function onLearnMore() {
      alert("Splish splash");
   }

   return ( 
      // needed to make it a JSX variable that is not automatically called
         <button onClick={onLearnMore}> 
            Learn More
         </button>
   );
}



export default Button;