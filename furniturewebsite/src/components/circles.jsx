//Give the component access to its CSS
import "./styles.css"

//functional component - must be Capitalised
export default function Circles(props){
    
    // Variables and functions go here
    
    
    //HTML goes in the return.
    return(
        <div className="circles">
            <p>{[props.name]}</p>
        </div>
    )
}

