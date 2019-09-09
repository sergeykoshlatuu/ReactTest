import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TodoListComponent } from './src/сomponents/todo-list-components/TodoListComponent'
import { TodoItemComponent } from './src/сomponents/todo-list-components/TodoItemComponent'

const MainNavigator = createStackNavigator(
  {
    Home:TodoListComponent,
    Details: TodoItemComponent,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '200',
        fontFamily: 'NK123',       
      },
      
    },
  });

  const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}