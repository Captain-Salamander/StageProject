import Product from "../components/Product"
import "../styles/GenderTemplate.scss"
import "../styles/Product.scss";
import { useState } from "react"

export default function GenderTemplate({gender}){
    const [sort,setSort]=useState('');
    const [category,setCategory]=useState('')

    const resetFilters = ()=>{
        setCategory('');
        setSort('');
    }

    console.log(sort,category);
    return<div className="gender-template">      
        <div className="first-row">
            <div className="title"><h1>{gender.title}</h1></div>   
            <div className=" components">
                {(sort!=='' || category!=='') && <button className="reset-button" onClick={()=>resetFilters()}>Reset All</button>}
                <select name="" id="" onChange={(e)=>{setSort(e.target.value)}} value={sort}>
                    <option value="" selected disabled>Sort by</option>
                    <option value="Price: Low To High">Price: Low To High </option>
                    <option value="Price: High To Low">Price: High To Low </option>
                    <option value="Newest First">Newest First </option>
                </select>
                <p>|</p>
                <select name="" id="" onChange={(e)=>{setCategory(e.target.value)}} value={category}>
                    <option value="" selected disabled>Category</option>
                    {gender?.categories?.map((category, i) => {
                        return <option value={category} key={i}>{category}</option>
                    })}
                </select>
            </div> 
        </div>
    
        <div className="gender-gallery">
            {gender?.products?.map(
                (product) => {
                    return <Product id={product.id} image={product.image} name={product.title} price={product.price} key={product.id}/>
                }
            )}
                
        </div>

    </div>
}