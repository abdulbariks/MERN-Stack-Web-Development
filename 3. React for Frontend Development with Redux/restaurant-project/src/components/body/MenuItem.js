import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = props => {

    // console.log(props);
 return(
<div>
<Card style={{margin:"15px"}}>
        <CardBody>
            <CardImg width="200px" height="200px"
            alt={props.dish.name}
            src={props.dish.image}
            style={{opacity:"0.75"}}/>
            <CardImgOverlay>
                <CardTitle style={{cursor: "pointer"}}  onClick={props.DishSelect}>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </CardBody>

    </Card>
</div>
 )
}

export default MenuItem;