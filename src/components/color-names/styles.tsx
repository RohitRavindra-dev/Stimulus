import {StyleSheet} from 'react-native';

export const displayPanelStyles = StyleSheet.create({
  panel: {
    flex:1,
    margin: 8,
    borderRadius: 12,
    elevation: 1,

    paddingVertical: 16,
    // alignItems:'flex-start',
    
    backgroundColor: '#fff',
  },
  colorCell: {
    flex: 1,
    paddingVertical: 20,
    borderWidth:0.15,
    margin:1,
    borderColor:'#333'
  },
  colorText: {
    fontSize: 26,
    fontWeight: '500',
    textAlign:'center'
  },
});

export const refreshButtonStyles = StyleSheet.create({
  buttonCntr: {
    padding: 16,
    height: '12%',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  button: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#910134',
  },
  buttonText: {
    color: '#f2d202',
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: 1.25,
  },
});
