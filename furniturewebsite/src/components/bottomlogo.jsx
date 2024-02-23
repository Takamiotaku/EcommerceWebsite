//Give the component access to its CSS
import "./styles.css"

//functional component - must be Capitalised
function Bottom (){
    
    // Variables and functions go here
    
    
    //HTML goes in the return.
    return(
        <footer>
        <div>
            <h6>About us</h6>
            <p>who are we</p>
            <p>reviews</p>
            <p>hiring</p>
        </div>
        <div>
            <h6>help</h6>
            <p>payments</p>
            <p>delivery</p>
            <p>contact us</p>
        </div>
        </footer>
    )
}

export default Bottom