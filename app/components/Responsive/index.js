/**
 *
 * Responsive
 *
 */

import React from 'react';
import Responsive from 'react-responsive';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

export { Desktop, Tablet, Mobile, Default };
