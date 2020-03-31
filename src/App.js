"use strict";
const e = React.createElement;

//let IntervalID = setInterval( () => {CoronaAPI.fetchWorldData()}, 10000);

const AppContainer = document.getElementById('summary');

const PanelLabelStyle = {
    // "text-align: center;margin-bottom: 20px;font-size: 40px;"
    textAlign: 'center',
    marginButton: 20,
    fontSize: 40
}

class LiveDataDisplay extends React.Component {

    updateState(data) {
        console.log(data);
        this.setState(
            {
                total: data.cases,
                recovered: data.recovered,
                deaths: data.deaths,
                active: data.active,
                closed: data.recovered + data.deaths
            }
        )
    }

    timerCallBack() {
        if (this.props.country)
            return CoronaAPI.fetchCountryData(this.props.country, this.updateState);
        return CoronaAPI.fetchWorldData(this.updateState);
    }

    constructor(props) {
        super(props);
        
        this.timerCallBack = this.timerCallBack.bind(this);
        this.updateState = this.updateState.bind(this);
        
        this.label = "World summary";
        if (this.props.country) {
            this.label = this.props.country;
        }
        this.state = {
            total: 100,
            recovered: 0,
            deaths: 0,
            active: 0,
            closed: 0
        }
        this.intervalID = setInterval(this.timerCallBack, 5000);
    }

    componentDidMount() {
        this.timerCallBack();
    }

    render() {
        return e(
            PanelContainer, 
            {
                total: this.state.total,
                recovered: this.state.recovered,
                deaths: this.state.deaths,
                active: this.state.active,
                closed: this.state.closed,
                label: this.label,
                labelStyle: PanelLabelStyle
            }, 
            null)
    }
}

ReactDOM.render(e(LiveDataDisplay), AppContainer);