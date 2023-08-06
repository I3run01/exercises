import * as s from "./style"
import { time } from "./ActionsOBJ"
import { moviment } from './ActionsOBJ'
import { useState, useEffect } from 'react'
import {numClosedsCardsOBJ} from './ActionsOBJ'
import { images } from "../Cards"

type Props = {
    Reset: () => void
    NewOrding: () => void
}
export const Actions = ({Reset, NewOrding}: Props) => {
    const [start, setStart] = useState('start')
    const [movementHook, setmovementHook] = useState(0)
    const [timeHookSeconds, setTimeHookSeconds] = useState(0)
    const [timeHookMinutes, setTimeHookMinutes] = useState(0)
    
    useEffect(() => {
        setmovementHook(moviment.numMoviments)

    })
    
    
    let interval  = () => {
        if (time.getRestart() == true) {
            time.setTime(Number(-1))
            time.setRestart(false)
        }

        if (numClosedsCardsOBJ.numberClosedsCards === images.length) time.setTime(time.getTime())
        else time.setTime(time.getTime()+1)    
        setTimeHookSeconds(time.GetSeconds())
        setTimeHookMinutes(time.GetMinutes())
    }

    const StartTime = () => {
        moviment.numMoviments = 0
        Reset()
        NewOrding()
        time.setRestart(true)
        setStart('Restart')
        if (time.getFirstTime()) {
            setInterval(interval, 1000)
            time.setFirstTime(false)
        }
    }

    return (
        <s.ActionsDiv id="ActionDiv">
            <div id="MenuDiv">
                <div id="Time">
                    <h1>Time</h1>
                    <p id="TimesShow">{timeHookMinutes}:{timeHookSeconds}</p>
                </div>
                <div id="Movements">
                    <h1>Movements</h1>
                    <p id="Moveh1">{movementHook}</p>
                </div>
            </div>
            <div id="ButtonDiv" >
                <div id="BTN" onClick={StartTime}>
                    <div id="BtnSymbol">
                        <img src="images/svgs/restart.svg" alt="" />
                    </div>
                    <div id="BtnRestart">{start}</div>
                </div>
            </div>
        </s.ActionsDiv>
    )
}