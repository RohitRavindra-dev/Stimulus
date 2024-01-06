import {StyleSheet} from 'react-native';

export const arenaStyles = StyleSheet.create({
  arena: {
    flex: 1,
    margin: 8,
    marginTop:16,
    borderRadius: 12,
    elevation: 1,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  grid:{
    justifyContent:'center',
    // alignItems:'center',
    // height:'100%',
    // width:'200%',
    padding:16,
    flex:1
  },
  
});

export const gridCellStyles = StyleSheet.create({
  gridCell:{
    borderWidth:1,
    borderColor:'black',
    flex:1,
    paddingVertical: 32,
    padding:16,
    marginBottom:2,
    marginHorizontal: 1,
    borderRadius:4,
  },
  cellValue:{
    color:'black',
    fontSize: 28,
    textAlign:'center',
    fontStyle:'italic',
    fontWeight:'500'
  }
})

export const difficultySelectionStyles = StyleSheet.create({
  difficultyCntr: {
    padding: 16,
    height: '14%',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  difficultyTextCtr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
  },
  difficulty: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    paddingRight: 4,
  },
  difficultyValue: {
    fontSize: 24,
    fontWeight: '600',
  },
  sliderPanel: {
    elevation: 2,
    paddingVertical: 12,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
  },
});
