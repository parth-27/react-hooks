import React,{useReducer} from 'react';

import './App.css';

import Counter from './components/classes/ClassCounter';
import { ClassMouse } from './components/classes/ClassMouse';
import IntervalClassCounter from './components/classes/IntervalClassCounter';

import { HookState as State } from './components/state/HookState';
import { HookEffect as Effect } from './components/effect/HookEffect';
import {HookMouseEffect as Mouse} from './components/effect/HookMouseEffect';
import { MouseContainer as Container } from './components/effect/MouseContainer';
import { HookIntervalCounter as IntervalCounter } from './components/effect/HookIntervalCounter';

import DataFetching from './components/data-effect/DataFetching';

import ComponentCContext from './components/context/ComponentC';

import CounterReducer from './components/reducer/Counter';
import ComplexCounter from './components/reducer/ComplexCounter';
import MultipleReducer from './components/reducer/MultipleReducer';
import ComponentA from './components/reducer/ComponentA';
import ComponentB from './components/reducer/ComponentB';
import ComponentC from './components/reducer/ComponentC';
import DataFetchingOne from './components/reducer/DataFetchingOne';
import DataFetchingTwo from './components/reducer/DataFetchingTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CountContext = React.createContext()

function App() {
  
  const [count, dispatch] = useReducer(reducer, initialState)
  
  return (
    
    < div className = "App" >
      {/* <Counter /> */}
      {/* <ClassMouse /> */}
      {/* <State /> */}
      
      
      {/* <Effect /> */}
      {/* <Mouse /> */}
      {/* <Container /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalCounter /> */}
      
      
      {/* <DataFetching /> */}
      
      {/* <UserContext.Provider value={'parth'}>
        <ChannelContext.Provider value={'Learn Coding'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterReducer /> */}

      {/* <ComplexCounter /> */}

      {/* <MultipleReducer /> */}

      
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }} >
          {/* <ComponentA /> */}
          {/* <ComponentB /> */}
          {/* <ComponentC /> */}
          {/* <DataFetchingOne /> */}
          {/* <DataFetchingTwo /> */}
      </CountContext.Provider>

      
    </div>
  );
}

export default App;
