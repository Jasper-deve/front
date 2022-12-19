import { useState } from "react";
import"../styles/input.css";

const Input= ({specialWords, addResult})=> {
    const[text,setText] = useState("")
    //const specialWords =["react","teksti"]
    const AnalysedText = ()=>{
         if (text==="")return;
    const length =text.length;
    const commaCount =text.split(",").length-1;

    const sws =text.split(/\b/).filter(w=>{
        return specialWords.includes(w.toLocaleLowerCase())
    })

    let r={text,length,commaCount,specialWords: sws.length}
    console.log(r)
    addResult(r);
    setText("");
    }
    const getRemoteAnalysis = async()=>{
        const url ="https://tekstianalysaattori-api.netlify.app/.netlify/functions/get-analysis"

        const data={text}
        const response = await fetch(url,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json",
            }
        })
        const d= await response.json();

        const d2={
            text: d.text,
            length: d.length,
            commaCount: d.commaCount,
            specialWords: d.knownWords,
        };
        addResult(d2)
        setText("")
    }
    const handleClick= (e)=>{
        console.log("nappia painettu",text)
        getRemoteAnalysis();
        //AnalysedText();
    }
    return(
        <div>
            <label htmlFor="teksti">Käsiteltävä teksti</label>
            <br />
            <textarea 
            name="teksti" 
            id="teksti" 
            cols="30" 
            rows="10"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            maxLength={200}>
             </textarea>
            <br />
            <input onClick={handleClick} type="button" value="Analysoi" />

        </div>
    );
}
export default Input;