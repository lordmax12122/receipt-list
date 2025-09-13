import { getCakeList } from "../../data/cakeData"
import { CakeItem } from "../CakeItem/CakeItem"


export const CakeList = () => {
    console.log(getCakeList)
    return <ul>
        {getCakeList.map((CakeInfo) => {
            return <CakeItem info={CakeInfo} test="test" />
        })}
    </ul>
}