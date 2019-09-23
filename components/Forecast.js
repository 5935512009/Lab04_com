import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.main}>{this.props.main}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <View style ={styles.alignRow}>
                    <Text style={styles.temp}>{this.props.temp}</Text>
                    <Text style={styles.cel}>°C</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: { color: 'white', fontSize: 32, paddingTop: 10, paddingLeft: 15},
    description: { color: 'white', paddingTop: 25, fontSize: 20 },
    temp: { color: 'white', fontSize: 32 },
    cel: {color:'white'},
    alignRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 25  }
});


