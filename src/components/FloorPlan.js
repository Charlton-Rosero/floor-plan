import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

function FloorPlan(){
    return(
        <div>
            <Kitchen />
            <LivingRoom />  
            <Bedroom  bedNum={'1'}/>
            <Bedroom bedNum={'2'}/>
            <Bedroom bedNum={'3'}/>
            <Bath size={'Full'}/>
            <Bath size={'Half'}/>

        </div>
    )
}

export default FloorPlan