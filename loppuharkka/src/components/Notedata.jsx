import { useEffect } from "react";
import { useState } from "react"

const Notedata = ()=>{
    const [data, setData]= useState([]);

    useEffect(()=>{
        const search = async()=>{
            const url ="https://luentomuistiinpano-api.deta.dev/courses/";
            let response = await fetch(url)
            let json = await response.json();
            setData(json)
        };
        search();
},[]);
    return (
        <div>
            <p>{data.data}</p>
        </div>
    );
};  
export default Notedata;