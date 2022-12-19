import "../styles/AnalysedText.css"
const AnalysedText = ({text, specialWords})=>{

    //const specialWords =["react","teksti"]
    const checkWord =(w)=>{
        for(let sw of specialWords){
            let r = new RegExp(`\\b${sw}\\b`,"i");
            if(w.match(r)) {
                return true;

            }
        }
        return false;
    };

    return(
        <p className="text">{
            text.split(/\b/).map((w,i)=>{
                if(checkWord(w)){
                    return(
                        <span className="special" key={i}>{w}(SPESSU)</span>
                    )
                }else{
                    return w;
                }
            })}
            </p>
    );

};

export default AnalysedText;