
const actions = Object.freeze(
    {
        COUNTER_INCREMENT : 'counter/incement',
        COUNTER_DECREMENT : 'counter/decement',
        COUNTER_INCREASE : 'counter/increase',
    }
);

const increment = () => ( { type: actions.COUNTER_INCREMENT } );
const decrement = () => ( { type: actions.COUNTER_DECREMENT } );
const increase = (payload) => ( { type: actions.COUNTER_INCREASE, payload : payload } );

export {actions, increment, decrement, increase };