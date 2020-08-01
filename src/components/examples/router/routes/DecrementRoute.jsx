import React from 'react';

import RouteContent from '~components/examples/router/RouteContent';

import { decrementAction } from '~reducers/counter/actions';

const DecrementRoute = () => <RouteContent icon="minus" path="/decrement" label="Decrement" action={decrementAction} />;

export default DecrementRoute;
