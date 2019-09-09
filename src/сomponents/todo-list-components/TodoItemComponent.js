import React, { Component } from 'react';
import { Text, Switch, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

export class TodoItemComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const { navigation } = this.props;
        var item = navigation.getParam('item');
        if(item==null){
           item =  {id:null,name:'title',description:'description',isChecked:false};
        }
        return (
            <ScrollView>
                <View>
                    <TextInput
                        style={styles.card}
                        onChangeText={text => onChangeText(text)}
                        value={item.name} />
                    <TextInput
                        style={styles.card}
                        onChangeText={text => onChangeText(text)}
                        numberOfLines={3}
                        value={item.description} />

                    <View style={styles.cardBody}>
                        <CheckBox
                            style={styles.checkBoxStyle}
                            checked={item.isChecked}
                        //onPress={() => this.itemChanged(item)}
                        />
                        <Text style={styles.bodyText} >Done</Text>
                    </View>

                    <View style={styles.cardBody}>
                        <Button titleStyle={styles.titleStyle} title='Save' />
                        <Button titleStyle={styles.titleStyle} title='Delete' />
                    </View>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginTop: 10,
        borderRadius: 10,
        fontFamily: 'NK123',
        borderWidth: 1,
        borderColor: "#a1a1a1",
        flex: 1,
        backgroundColor: 'white'
    },
    buttonStyle: {
        margin: 15,
    },
    cardBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    titleStyle: {
        fontFamily: 'NK123',

    },
    bodyText: {
        fontSize: 18,
        fontFamily: 'NK123',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
});

