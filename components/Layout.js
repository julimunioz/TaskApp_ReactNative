import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

export const Layout = ({children}) => {
  return (
        <>
        <View style = { styles.container }>
            {children}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },
});


