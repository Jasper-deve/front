import AnalyserResultsRow from "./AnalyserResultsRow";
import"../styles/AnalyserResults.css"

const AnalyserResults= ({results,specialWords,deleteByText})=>{
    if(results.length ===0){
        return <div>Ei analysoituja tekstejä.</div>;
    }
    return(
        <div>
            <h2>Tulokset ({results.length})</h2>
            <div className="results">
                {results.map((r,i)=>{
                    return <AnalyserResultsRow 
                    deleteByText={deleteByText} 
                    specialWords={specialWords} 
                    key={i} data={r}/>;
                })}
                {/* <pre>{JSON.stringify(results,null,2)}</pre> */}
                </div>
        </div>
    );
}
export default AnalyserResults;