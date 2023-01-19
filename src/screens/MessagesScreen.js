import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMessageFetch} from '../redux-configuration/reducers/messageReducer';

const MessagesScreen = () => {
  const dispatch = useDispatch();
  const {records} = useSelector(state => state.message);
  useEffect(() => {
    dispatch(getMessageFetch('breeds'));
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={records}
        renderItem={({item}) => {
          return (
            <View style={styles.list}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
});

export default MessagesScreen;
