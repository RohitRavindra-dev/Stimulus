import {StyleSheet} from 'react-native';

export const panelStyles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: '50%',
    marginHorizontal: 8,
    marginBottom: 8,
    flex: 1,
    elevation: 1,
  },
});

export const timerBarStyles = StyleSheet.create({
  timerSection: {
    backgroundColor: 'white',
    borderBottomWidth: 1.2,
    borderBottomColor: '#ddd',
    width: '100%',
    height: '10%',
    padding: 8,
  },
  bar: {
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#00612a',
    paddingVertical: 8,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  timeLeftText: {
    fontSize: 21,
    fontWeight: '500',
    color: 'white',
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#ffb700',
  },
  levelText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fffbf0',
    paddingVertical: 4,
    letterSpacing: 2,
  },
  pausePlayButton: {
    backgroundColor: '#fffbf0',
    borderRadius: 16,
    padding: 8,
    elevation: 2,
  },
});
