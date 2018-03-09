import React from 'react';
import PropTypes from 'prop-types';
import './XIcon.css';

const XIcon = ({ onIconClicked }) => (
  <div id="xIcon" onClick={onIconClicked} onKeyUp={onIconClicked} role="button" tabIndex={0}>
    <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>XMark</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
        <g id="Step-2" transform="translate(-539.000000, -268.000000)" stroke="#D0021B" strokeWidth="5">
          <g id="Generator" transform="translate(406.000000, 93.000000)">
            <g id="Actions" transform="translate(136.000000, 164.000000)">
              <g id="XMark" transform="translate(0.000000, 14.000000)">
                <path d="M14.5165043,-4.66897958 L14.5165043,33.7019882" id="Line" transform="translate(14.516504, 14.516504) rotate(45.000000) translate(-14.516504, -14.516504) " />
                <path d="M34.2236111,15.2236111 L-3.77638892,15.2236111" id="Line" transform="translate(15.223611, 15.223611) rotate(45.000000) translate(-15.223611, -15.223611) " />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
);

XIcon.propTypes = {
  onIconClicked: PropTypes.func,
};

XIcon.defaultProps = {
  onIconClicked: () => {},
};

export default XIcon;
