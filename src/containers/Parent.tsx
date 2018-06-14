import { Child } from '@/components/Child'
import { addCount, getSagaCount } from '@/modules/counter'
import { IActions, IStates } from '@/modules/index'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'

interface IProps {
  states: IStates
  actions: IActions
}

export class Parent extends React.Component<IProps> {
  public render() {
    return (
      <Div>
        Parent
        <Child
          state={this.props.states.counter}
          actions={this.props.actions.counter}
        />
      </Div>
    )
  }
}

const Div = styled.div`
  color: white;
  background-color: green;
`

export default connect(
  (s: IStates) => ({ states: s }),
  (d: Dispatch) => ({
    actions: {
      counter: {
        addCount: bindActionCreators(addCount, d),
        getSagaCount: bindActionCreators(getSagaCount, d)
      }
    }
  })
)(Parent)
