import React, {PropTypes} from 'react';
import cx from 'classnames';

module.exports = React.createClass({
  displayName: 'TabList',

  propTypes: {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  },

  render() {
    return (
      <div className='text-center'>
        <div
          className={cx(
            'ReactTabs__TabList btn-group',
            this.props.className
          )}
          role="tablist"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
});
