        import React, { Component } from 'react';
        import { Text ,TouchableWithoutFeedback, StyleSheet, View, FlatList, ScrollView } from 'react-native';
        import { CheckBox, Button } from 'react-native-elements'
        import Icon from 'react-native-vector-icons/MaterialIcons'
        import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';
        import TodoItemComponent from './TodoItemComponent';
        import { StackNavigator } from 'react-navigation';

        export class TodoListComponent extends Component {
            static navigationOptions = ({ navigation, navigationOptions }) => {
                return{
                            title: 'Task Dropper',
                            headerRight: (
                                <View style={{marginLeft: 22,width:40,height:40 ,borderRadius:35, alignContent:'center',backgroundColor:'#1f1'}}>
                            <TouchableWithoutFeedback onPress ={() => navigation.navigate('Details',{item:null})}>
                                <Text style={{fontSize:32,textAlign:'center',textAlignVertical:'center'}}>+</Text>
                            </TouchableWithoutFeedback>
                        </View>
                              ),
                          };
              };
            constructor() {  
                super();  
                this.state = {  
                    data: [
                    {id:'1',name:'test test test test test test test test test test testtest test test test test test test',description:'test1',isChecked:true},
                    {id:'2',name:'Task2',description:'test2',isChecked:false},
                    {id:'3',name:'Task3',description:'test3',isChecked:true},
                    {id:'4',name:'Tastest test test test test test test test test test test test test testk4',description:'test4',isChecked:false},  
                    {id:'5',name:'Tastest test test test test test testk5',description:'test5',isChecked:true},
                    {id:'6',name:'Tastest test test test test test testk6',description:'test6',isChecked:false},
                    {id:'7',name:'Task7',description:'test7',isChecked:true},
                    {id:'8',name:'Tatest test test test test test testsk8',description:'test8',isChecked:false},
                    {id:'11',name:'Tastest test test test test test testtest test test test test test testk11',description:'test11',isChecked:false},
                    {id:'12',name:'Task12',description:'test12',isChecked:false},
                    {id:'13',name:'Tatest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test testsk13',description:'test13',isChecked:true},
                    {id:'14',name:'Task14',description:'test14',isChecked:true},  
                    {id:'15',name:'Task15',description:'test15',isChecked:true},
                    {id:'16',name:'Task16',description:'test16',isChecked:false},
                    {id:'17',name:'Tasktest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test testtest test test test test test test17',description:'test17',isChecked:true},
                    {id:'18',name:'Task18',description:'test18',isChecked:false},
                    ],
                };  
            }  
            _keyExtractor = (item, index) => item.id;

            render() {  
                const {navigate} = this.props.navigation;
                return (  
<ScrollView>
<FlatList
  data={this.state.data}
  extraData={this.state}
  keyExtractor = {this._keyExtractor}
  renderItem={({item}) => 
  <TouchableWithoutFeedback onPress={ () => navigate('Details',{item: item})}>
  <View style={styles.card}>
  <View style={styles.cardBody}>
      <Text style={styles.bodyText}>{item.name}</Text>
      <CheckBox
      style={styles.checkBoxStyle}
      checked={item.isChecked}
      onPress={() => this.itemChanged(item)}
/>
  </View>
  </View>
  </TouchableWithoutFeedback>}    
/>
 </ScrollView>);  
            } 

            navigateToDetailsPage(){
                alert('test');
                //this.props.navigation.navigate('Details',{item:null})
            }

            selectedItem(item) {
                alert(item.name);
                this.props.navigation.navigate('Details',{item:item})
            }

             itemChanged(item) {
               var items = this.state.data.filter(x=>x.id==item.id);
                items[0].isChecked = !items[0].isChecked;
                this.setState(this.state.data);
             }
        }


        const styles = StyleSheet.create({
            card: {
                margin:10,
                marginTop: 10,
                borderRadius:10,
                borderWidth:2,
                borderColor:"#00ff00",
                flex: 1,
                backgroundColor: '#6fffff'
            },
            headerButton:{
marginRight:10,
            },
            cardBody: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
            },
            bodyText: {
                marginLeft:15,
                fontSize: 18,
                fontFamily:'NK123',
                color: '#ff23ff',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical:'center',
            },
            buttonContainer: {
                width: 45,
                height: 30,
                borderRadius: 25,
                borderColor: '#ffffff',
                borderWidth: 1.5,
                justifyContent: 'center',
                alignItems: 'center'
            },
            buttonText: {
                fontSize: 30,
                textAlign: 'center',
                fontFamily: 'VarelaRound-Regular',
                color: '#ffffff'
            },
         });

        