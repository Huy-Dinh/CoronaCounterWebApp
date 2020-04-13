"use strict";

class SummaryPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e('div',{className: "summary"}, 
                e('ul',{className: "w3-ul w3-center"},
                    e('li', {className: "w3-blue-grey w3-large"}, this.props.panelName),
                    e('li', {className: this.props.colorClass}, 
                        e('h4', null, this.props.content),
                        e('p', null, this.props.unit))));
    }
}

class SummaryPanelContainer extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.mobile) 
        {
            this.containerClass = "containerMobile w3-hide-large w3-hide-medium";
        }
        else
        {
            this.containerClass ="containerDesktop w3-hide-small"
        }
    }

    render() {
        return e('div', {className: this.containerClass},
                    e(SummaryPanel,
                    {
                        panelName: "RECOVERED",
                        content: this.props.recovered,
                        unit: "cases",
                        colorClass: "w3-pale-green"
                    }, 
                    null),
                    e(SummaryPanel,
                    {
                        panelName: "TOTAL",
                        content: this.props.total,
                        unit: "cases",
                        colorClass: "w3-pale-yellow"
                    }, 
                    null),
                    e(SummaryPanel,
                    {
                        panelName: "DEATHS",
                        content: this.props.deaths,
                        unit: "cases",
                        colorClass: "w3-pale-yellow"
                    }, 
                    null)
                );
    }
}

class AdditionalPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e('div', {className: this.props.styleClass},
                    e('div', 
                    {
                        className:"w3-center", 
                        style:
                        {
                            marginTop: 10
                        }
                    },
                        e('h5', null, e('strong', null, this.props.panelName))),
                    e('div', {className:"w3-clear"}, null),
                    e('h5', null, this.props.content)
                    );
    }
}

class AdditionalPanelContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active,
            closed: this.props.closed
        }
    }

    render() {
        return e('div',
                {
                    className: 'containerActiveClosed',
                    style: 
                    {
                        marginTop: 50
                    }
                },
                    e(AdditionalPanel,
                    {
                        panelName: 'ACTIVE CASES',
                        content: this.props.active,
                        styleClass: 'w3-center w3-pale-red'
                    }, null),
                    e(AdditionalPanel,
                    {
                        panelName: 'CLOSED CASES',
                        content: this.props.closed,
                        styleClass: 'w3-center w3-khaki'
                    }, null)
                )
    }
}

class PanelContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label,
            labelStyle: this.props.labelStyle,
            mobile: this.props.mobile,
            total: this.props.total,
            recovered: this.props.recovered,
            deaths: this.props.deaths,
            active: this.props.active,
            closed: this.props.closed
        }
    }

    render() {
        return e('div', null,
                    e('h2',
                    {
                        className: 'w3-text-light-grey',
                        style: this.props.labelStyle
                    }, this.props.label),
                    e('div', null,
                        e(SummaryPanelContainer,
                        {
                            mobile: false,
                            total: this.props.total,
                            recovered: this.props.recovered,
                            deaths: this.props.deaths
                        }, null),
                        e(SummaryPanelContainer,
                        {
                            mobile: true,
                            total: this.props.total,
                            recovered: this.props.recovered,
                            deaths: this.props.deaths
                        }, null),
                        e(AdditionalPanelContainer,
                        {
                            active: this.props.active,
                            closed: this.props.closed
                        }, null)
                    )
                )
    }
}