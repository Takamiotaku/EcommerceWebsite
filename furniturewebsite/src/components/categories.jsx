//Give the component access to its CSS
import "./styles.css"
import Furnitures from "./Furniture"
//functional component - must be Capitalised
export default function Categories (props){
    let Item1 = new Furnitures("chair","rock",500,"wood","30x20x10","idk")
    // Variables and functions go here
    
    
    //HTML goes in the return.
    return(
        <div>
            <input type="button" value={Item1.category} />
            <input type="button" value="template" />
            <input type="button" value="template" />
            <input type="button" value="template" />
            <input type="button" value="template" />
            <input type="button" value="template" />
            <input type="button" value="template" />
        </div>
    )
}

