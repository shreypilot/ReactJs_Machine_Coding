import { useEffect, useState } from "react";
const ProgressBar = ({ value = 0,onComplete = () =>{} }) => {//if not providing value it will take 0 
    const [percent, setPercent] = useState(value);
    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0))); 
        if(value >= 100){
            onComplete()
        }
    }, [value]);
    return (
        <div className="progress">
            <span style={{color:percent >49 ? "white " :"black"}}>{percent.toFixed()// if value was 23.5 it will generate 23 - it will basically remove the number after decimal
            }%</span>
            <div 
            //  style={{width: `${percent}%`}}
             style={{
                transform:`scaleX(${percent}%)`,
                transformOrigin: "left"
             }}

            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent.toFixed()}></div>
        </div>
    );
}
export default ProgressBar;