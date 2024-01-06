import React,{useEffect, useState} from 'react'
import { View, Text, StatusBar, Alert } from 'react-native'
import { DifficultySelection } from '../../../components/count-up/DifficultySelection'
import { NumbersArena } from '../../../components/count-up/NumbersArena';
import { CellStatus, configDifficultyMap, shuffle } from '../../../components/count-up/utils';
import { useFocusEffect } from '@react-navigation/native';


export const CountUpScreen = ()=>{
    
    const [difficulty, setDifficulty] = useState<1|2|3>(1);
    const [curExpectVal, setCurExpectVal] = useState(1)

    const [curGrid, setCurGrid] = useState<Array<number>>([]);
    const [gridCellsStatus, setGridCellsStatus] = useState<Array<CellStatus>>([]);

    useEffect(()=>{
        
        setCurGrid(shuffle(configDifficultyMap[difficulty].grid));
        setGridCellsStatus(new Array(configDifficultyMap[difficulty].counts).fill("white"))
    }, [])


    const onPickNextVal = (val:number, index:number)=>{
        if(val==curExpectVal)
        {
            if(val == configDifficultyMap[difficulty].counts){
                Alert.alert("Good job!", "You have completed the task!")
                resetGame()
            }
            else{
                var cellStatuses = [...gridCellsStatus]
                cellStatuses[index]="green"
                setGridCellsStatus(cellStatuses)
                setCurExpectVal(curVal=>curVal+1)
            }
        }else{
            var cellStatuses = [...gridCellsStatus]
            cellStatuses[index]="red"
            setGridCellsStatus(cellStatuses)
        }
    }

    const resetGame = ()=>{
        setCurGrid(shuffle(configDifficultyMap[difficulty].grid))
        setGridCellsStatus(new Array(configDifficultyMap[difficulty].counts).fill("white"))
        setCurExpectVal(1)
    }

    const updateDifficulty = (newDifficulty: 1 | 2| 3)=>{
        resetGame()
        setDifficulty(newDifficulty)
        setCurGrid(shuffle(configDifficultyMap[newDifficulty].grid))
    }

    return(
        <View style={{height:'100%', width:'100%', backgroundColor:'#eee'}}>
            <StatusBar backgroundColor={"#420015"} />
            <NumbersArena grid={curGrid} cellStatus={gridCellsStatus} difficulty={difficulty} onPickNextVal={onPickNextVal}/>
           <DifficultySelection difficulty={difficulty} changeDifficultyHandler={updateDifficulty}/>
        </View>
    )
}