//Give the component access to its CSS
import "./styles.css"
//functional component - must be Capitalised
import Furnitures from "./Furniture"
export default function ShowCase(){
    
    
    
    return(
        <div className="show-case">
            <h1>Popular Producs</h1>
            <div>
            <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box1"  />
            <p></p>
            <input type="button" value="Add to busket" />
            <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box2"  />
            </div>
            <div>
            <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box3"  />
            <img src="https://www.ikea.com/gb/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg?f=s" alt="image of chair" className="img-box4"  />
            </div>
        </div>
    )
}

