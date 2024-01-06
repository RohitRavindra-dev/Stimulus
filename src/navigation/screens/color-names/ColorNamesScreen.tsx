import React, {useEffect, useState} from 'react'
import { View, Text, StatusBar } from 'react-native'
import { RefreshButton } from '../../../components/color-names/RefreshButton'
import { DisplayPanel } from '../../../components/color-names/DisplayPanel'
import { GRID_SIZE } from '../../../assets/constants/AppConstants';

type Color = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "PINK" | "ORANGE";
type Hex = "#e6000b"| "#25aacf"| "#3fcf25"| "#f0c800"| "#000"| "#f216eb"| "#f28816";

const colors:Array<Color> = ["RED", "BLUE", "GREEN", "YELLOW", "BLACK", "PINK", "ORANGE"]
const hexes:Array<Hex> = ["#e6000b", "#25aacf", "#3fcf25", "#f0c800", "#000", "#f216eb", "#f28816"]

export type GridCell = {
    color: Color,
    hex: Hex
 }


export const ColorNamesScreen = ()=>{

    const [grid, setCurrentGrid]=useState<Array<GridCell>>([]);

    useEffect(()=>resetGrid(),[])

    const resetGrid = ()=>{
        const curGrid:Array<GridCell> = []
        for(var i=0;i<GRID_SIZE;i++){
            curGrid.push({
                color: colors[Math.floor(Math.random() * colors.length)],
                hex: hexes[Math.floor(Math.random() * hexes.length)]
            })
        }
        setCurrentGrid(curGrid);
    }

    return(
        <View style={{height:'100%', backgroundColor:'#eee'}}>
            <StatusBar backgroundColor={"#420015"} />
            <DisplayPanel gridVals={grid} />
            <RefreshButton refreshHandler={resetGrid}/>
        </View>
    )
}