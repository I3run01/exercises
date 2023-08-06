import { GameDivStyle } from "./styled"
import { images } from "./Cards"
import { Actions } from "./Actions"
import { time } from "./Actions/ActionsOBJ"
import { moviment } from "./Actions/ActionsOBJ"
import { Nav } from "./Nav"
import * as F from "./Functions"
import { useState } from "react"

export const GameDiv = () => {
    const [ording, setOrding] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    const newOrding = () => {
        let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        ranNums = [],
        i = nums.length,
        j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            ranNums.push(nums[j]);
            nums.splice(j,1);
        }

        setOrding(ranNums)
    }
    
    const Game = (index: number) => {
        if (time.getTime() > -1) {

            let obj = F.getImageObjct(index)
            moviment.MoreOne()
            let FirstCard = F.AlreadyAOpenCard()
            F.showCard(obj.Img, obj.Id)
            obj.OpenCard = true
            if (FirstCard.Img != 'null'){

                if(obj.Img != FirstCard.Img) {
                    setTimeout(() => {F.hideCard(FirstCard.Id)}, 200);
                    setTimeout(() => {F.hideCard(obj.Id)}, 200);
                    
                }
                else {
                    F.OutOfGame(FirstCard.Id)
                    F.OutOfGame(obj.Id)
                }
            }
        }
    }

    return ( 
        <GameDivStyle>
            <div id="AsideCamp">
                <Nav/>
                <Actions
                    Reset={F.Reset}
                    NewOrding={newOrding}/>
            </div>
            
            <div id="GameLayout">
                {images.map((item, index) => (
                    <div className="GameDiv" 
                        id={`GameDiv${ording[index]}`} 
                        onClick={() => {Game(ording[index])}}>
                        <img key={index} src='images/svgs/b7.svg' alt="" id={'IMG'+ording[index]}/>
                    </div>
                ))}
            </div>
            
        </GameDivStyle>
    ) 
}