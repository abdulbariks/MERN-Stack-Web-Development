import React, {Component} from "react";
import DISHES from '../../data/dishes.js';
import MenuItem from "./MenuItem.js";
import DishDetail from "./DishDetail.js";
import {Modal, ModalBody, ModalFooter, Button, CardColumns } from "reactstrap";


class Menu extends Component{
     state = {
        dishes: DISHES,
        selectedDish:null,
        modalOpen:false
     }

     onDishSelect = dish =>{
      this.setState({
        selectedDish:dish,
        modalOpen : !this.state.modalOpen
      });
     }

     toggleModal = () =>{
      this.setState({
            modalOpen: !this.state.modalOpen
      })
     }

  render(){
      const menu = this.state.dishes.map( item =>{
        return(
            <MenuItem dish={item} key={item.id}
            DishSelect ={()=>this.onDishSelect(item)}
            />

        );
      })

      let dishDetail = null;
      if (this.state.selectedDish != null) {
        dishDetail = <DishDetail dish = {this.state.selectedDish}/>
      }


    return(
        <div className="container">
            <div>
                  <CardColumns>
                    {menu}
                  </CardColumns>

                  <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                    <ModalBody>
                      {dishDetail}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={this.toggleModal}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
            </div>
        </div>
    );
  }
  
}


export default Menu;