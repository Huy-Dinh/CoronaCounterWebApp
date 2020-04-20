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
                newCaseCount: 0,
                deathCount: 0,
                newDeathCount: 0,
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
                    newCaseCount: data.todayCases,
                    deathCount: data.deaths,
                    newDeathCount: data.todayDeaths,
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
                    newCaseCount = {this.state.content.newCaseCount}
                    deathCount = {this.state.content.deathCount}
                    newDeathCount = {this.state.content.newDeathCount}
                    recoveredCount = {this.state.content.recoveredCount}
                />
            </div>
        );
    }
}