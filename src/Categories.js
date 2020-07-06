import React, { Component } from 'react';
import categories from './datas/categories.json';
import {Link} from "react-router-dom";
import "./Categories.css";

class Categories extends Component {
    state = {  }
    render() { 
        
        let listCategories = categories.map(categorie => {
            return <div className = "categorie"><Link to="/">{categorie.name}</Link></div>
        }

        )

        return ( 
            <div className="categories">
                {listCategories}
            </div>
         );
    }
}
 
export default Categories;