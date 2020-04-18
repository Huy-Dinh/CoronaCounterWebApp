import React from 'react'
import {PlainTextCounterDisplay} from './PlainTextDisplay'
import {CoronaAPI} from './coronaAPI'

import './LiveCounterDisplay.css'

export class LiveCounterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : {
                name: 'World',
                caseCount: 0,
                deathCount: 0,
                recoveredCount: 0
            }
        }
        this.dataHandler = this.dataHandler.bind(this);
        this.countryChangeHandler = this.countryChangeHandler.bind(this);
        CoronaAPI.fetchWorldData(this.dataHandler);
    }

    dataHandler(data) {
        this.setState(
            {
                content : {
                    caseCount: data.cases,
                    deathCount: data.deaths,
                    recoveredCount: data.recovered
                }
            }
        );
    }

    countryChangeHandler(event) {
        let selectedValue = event.target.value;
        if (selectedValue === 'world')
            CoronaAPI.fetchWorldData(this.dataHandler);
        else
            CoronaAPI.fetchCountryData(selectedValue, this.dataHandler)
    }

    render() {
        return (
            <div>
                <select className="country-selector" onChange={this.countryChangeHandler}>
                    <option value="world">World</option>
                    <option value="germany">Germany</option>
                    <option value="usa">U.S.A</option>
                    <option value="vietnam">Vietnam</option>
                </select>
                <PlainTextCounterDisplay
                    caseCount = {this.state.content.caseCount}
                    deathCount = {this.state.content.deathCount}
                    recoveredCount = {this.state.content.recoveredCount}
                />
            </div>
        );
    }
}