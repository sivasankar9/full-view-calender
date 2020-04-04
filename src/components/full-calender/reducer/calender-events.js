let initialState = {
    events: [
        { eventType: 'EVENT', title: 'ms birthday', date: '2020-04-20' },
        { eventType: 'EVENT', title: 'ms birthday', date: '2020-04-21' },
        { eventType: 'EVENT', title: ' ms birthday', date: '2020-04-22' },
        { eventType: 'BILL', title: 'internet Bill', date: '2020-04-23' },
        { eventType: 'BILL', title: 'internet Bill', date: '2020-04-24' },
        { eventType: 'BILL', title: 'internet Bill', date: '2020-04-02' }
    ]
}

export default (state = initialState, action) => {
    return state;
}