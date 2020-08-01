import React from 'react';

import RouteContent from '~components/examples/router/RouteContent';

import { resetAction } from '~reducers/counter/actions';

const ResetRoute = () => <RouteContent icon="history" path="/reset" label="Reset" action={resetAction} />;

export default ResetRoute;
