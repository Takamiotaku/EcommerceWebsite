import Account from "./Account";
import Basket from "./Basket";
import Delivery from "./Delivery"

// Update Circles component to accept a prop indicating which component to render
export default function Circles(props) {
    // Variable to hold the component to render
    let componentToRender;

    // Determine which component to render based on the prop value
    switch (props.name) {
        case "Account":
            componentToRender = <Account/>;
            break;
        case "Basket":
            componentToRender = <Basket/>;
            break;
        case "delivery":
            componentToRender = <Delivery/>;
            break;
        default:
            componentToRender = null;
    }

    // Render the determined component
    return (
        <div className="circles" onClick={() => props.onClick(componentToRender)}>
            <p>{props.name}</p>
        </div>
    );
}
