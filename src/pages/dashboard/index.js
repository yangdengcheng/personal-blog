import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../store/actions/user'
import {bindActionCreators} from "redux";

class Dashboard extends Component{
    componentDidMount() {
        console.log(this.props.userActions.login())
        console.log(this.props)
    }

    render() {
        return(
            <div>
                这是概览页
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        store: state.store,
        user: state.user
    }
}

const mapActions = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default connect(mapState, mapActions)(Dashboard)
