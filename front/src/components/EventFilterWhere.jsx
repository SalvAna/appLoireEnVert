import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import {connect} from "react-redux";
import { updateFilter } from "../actions/index";
import { withRouter } from 'react-router-dom';
// import EventList from "../containers/EventList";

class EventFilterWhere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFiltred: null
      //       // filterWho: null, à utiliser après
    };
    //this.onClick = this.onClick.bind(this);
    this.id = this.props.match.params.id;
    // this.who = this.props.match.params.who;
  }

  componentWillMount() {
    //Récupération de resultats filtrés via axios
    // axios.get(`/event?where=stephanois-pilat`).then(result => {
    //   console.log("axios",result.data)
    //   // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
    //   this.setState({
    //     eventsFiltred: result.data,

    //   });
    // });
    // this.props.functionCallDispatch();
  }

  /*routeChangeForez = () =>{
    console.log('was click')
    let path = "event/forez"
    this.props.history.push(path);
    }
  routeChangeRoannais = () => {
    let path = "event/roannais"
    this.props.history.push(path);
    }
 routeChangeStephanois = () => {
    console.log('was click')
    let path = "/event/stephanois-pilat"
    this.props.history.push(path)
    }*/

  /*onClick(e) {
    this.setState({
    [e.target.eventsFiltred]: e.target.value, 
    
    
    });
    console.log(3);
    }*/

  eventsFiltred = where => {
    this.props.updateFilter({ where: where });
    this.props.history.push("/who");
  }

  render() {
    return (
      <div className="buttoncenter">

        <Button onClick={() => this.eventsFiltred("Forez")} color="secondary" size="lg" block>
          Forez
        </Button>
        <Button onClick={() => this.eventsFiltred("Roannais")} color="secondary" size="lg" block>
          Roannais
        </Button>
        <Button onClick={() => this.eventsFiltred("Stéphanois-Pilat")} color="secondary" size="lg" block>
          Stéphanois-Pilat
        </Button>
      </div>
    );
  }
}

export default connect(null,
  dispatch => ({
    updateFilter: filter => {
      dispatch(updateFilter(filter));
    }
  }))(EventFilterWhere);