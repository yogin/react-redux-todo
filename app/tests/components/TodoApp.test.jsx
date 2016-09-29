var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
// var TodoList = require('TodoList');
import TodoList from 'TodoList';


describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

  // it('show add todo to the todos state on handleAddTodo', () => {
  //   var todoText = 'dummy text';
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(todoText);
  //
  //   expect(todoApp.state.todos.length).toBe(1);
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(typeof todoApp.state.todos[0].createdAt).toBe('number');
  // });
  //
  // it('should toggle completed value when handleToggle called', () => {
  //   var todoData = {
  //     id: 11,
  //     text: 'test',
  //     completed: false,
  //     createdAt: 0,
  //     completedAt: undefined
  //   };
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  //   todoApp.handleToggle(todoData.id);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  // });
  //
  // it('should remove completedAt when toggle completed from true to false', () => {
  //   var todoData = {
  //     id: 11,
  //     text: 'test',
  //     completed: true,
  //     createdAt: 0,
  //     completedAt: 0
  //   };
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({todos: [todoData]});
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  //   todoApp.handleToggle(todoData.id);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // });

});
