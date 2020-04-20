import React from 'react';

export class PlainTextCounterDisplay extends React.Component
{
    render() {
        return (
            <div>
                <p className='plain-text-number-display'>Total cases: {this.props.caseCount}</p>
                <p className='plain-text-number-display'>Today's cases: {this.props.newCaseCount}</p>
                <p className='plain-text-number-display'>Deaths: {this.props.deathCount}</p>
                <p className='plain-text-number-display'>Today's deaths: {this.props.newDeathCount}</p>
                <p className='plain-text-number-display'>Recovered: {this.props.recoveredCount}</p>
                <p className='plain-text-number-display'>Active cases: {this.props.caseCount - this.props.deathCount - this.props.recoveredCount}</p>
            </div>
        )
    }
}