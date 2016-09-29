var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

// var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchText = 'dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });

  // it('should call onAddTodo prop with valid data', () => {
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //   var todoText = 'check mail';
  //
  //   addTodo.refs.todoText.value = todoText;
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //
  //   expect(spy).toHaveBeenCalledWith(todoText);
  // });
  //
  // it('should not call onAddTodo prop with invalid data', () => {
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //   var todoText = '';
  //
  //   addTodo.refs.todoText.value = todoText;
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //
  //   expect(spy).toNotHaveBeenCalled();
  // });
});
