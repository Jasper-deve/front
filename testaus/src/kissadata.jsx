import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url)=> fetch(url).then((res)=> res.json());

const Kissadata =()=>{
    // const[data, setData] =useState([])
    const url ="https://meowfacts.herokuapp.com/";
    const {data,error}=useSWR(url,fetcher)
    // useEffect(()=>{
        
    //     const hae= async()=>{
    //         const url ="https://meowfacts.herokuapp.com/";
    //         let response = await fetch(url);
    //         let json = await response.json();

    //         setData(json)
            
    //     };
    //     hae();        
    // },[]);
    if (error) {
        return <div><p>Virhe</p></div>
    }
    if(!data){
        return <div><p>ladataan</p></div>
    }
    return <div>
                <p>{data.data}</p>
            </div>
};
export default Kissadata;