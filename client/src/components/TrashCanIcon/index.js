import React from 'react';
import PropTypes from 'prop-types';
import './TrashCanIcon.css';

const TrashCanIcon = ({ onIconClicked }) => (
  <div id="trashCanIcon" onClick={onIconClicked} onKeyUp={(e) => { if (e.key === 'Enter') onIconClicked(); }} role="button" tabIndex={0}>
    <svg width="11px" height="12px" viewBox="0 0 11 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Trash Can</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Step-2" transform="translate(-1026.000000, -370.000000)" stroke="#000000">
          <g id="Trash-Can" transform="translate(1026.000000, 370.000000)">
            <rect id="Rectangle" x="1.5" y="2.5" width="8" height="9" rx="1" />
            <path d="M7.5,4.5 L7.5,9.5" id="Line-4" strokeLinecap="square" />
            <path d="M5.5,4.5 L5.5,9.5" id="Line-4" strokeLinecap="square" />
            <path d="M3.5,4.5 L3.5,9.5" id="Line-4" strokeLinecap="square" />
            <path d="M0.5,2.5 L10.5,2.5" id="Line-3" strokeLinecap="square" />
            <rect id="Rectangle-2" x="1.5" y="0.5" width="8" height="2" rx="1" />
          </g>
        </g>
      </g>
    </svg>
  </div>
);

TrashCanIcon.propTypes = {
  onIconClicked: PropTypes.func,
};

TrashCanIcon.defaultProps = {
  onIconClicked: () => {},
};

export default TrashCanIcon;

