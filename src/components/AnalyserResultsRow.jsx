import AnalysedText from "./AnalysedText";
import "../styles/ARR.css"

const AnalyserResultsRow = ({data,specialWords, deleteByText})=>{
    return(
        <div className="row">
                        <p 
            role="button"
            tabIndex={0}
            className="delete-button"
            onKeyDown={()=> deleteByText(data.text)} 
            onClick={()=> deleteByText(data.text)}>
                [x]
                </p>
            <AnalysedText specialWords={specialWords}
             className="text"
              text={data.text}>

              </AnalysedText>
            <p>Pituus: {data.length}</p>
            <p>Pilkkuja: {data.commaCount===0 ? 'Ei yhtään' : data.commaCount}</p>
            <p>Tunnistettuja sanoja: {data.specialWords===0 ? 'Ei yhtään' : data.specialWords}</p>
        </div>
    )
}
export default AnalyserResultsRow;