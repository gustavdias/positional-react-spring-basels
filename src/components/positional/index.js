import React from 'react';
import PropTypes from 'prop-types';
import styles from './positional.module.scss';

import CoordContainer from './components/coord';

export default function Positional({ children, height, cursorEvent }) {
  const ref = React.createRef();

  let childrenWithRef;

  if (Array.isArray(children)) {
    childrenWithRef = children.map(child => (
      {
        ...child,
        props: {
          ...child.props,
          parentRef: ref,
        },
      }
    ));
  } else {
    childrenWithRef = {
      ...children,
      props: {
        ...children.props,
        parentRef: ref,
      },
    };
  }

  if (!cursorEvent) {
    childrenWithRef = children;
  }

  return (
    <div
      ref={ref}
      className={styles.container}
      style={height ? { height } : null}
    >
      <div className={styles.inner}>
        {childrenWithRef}
      </div>
    </div>
  );
}

Positional.propTypes = {
  children: PropTypes.any,
  height: PropTypes.string,
  cursorEvent: PropTypes.bool,
};

Positional.defaultProps = {
  children: null,
  height: '',
  cursorEvent: false,
};

export const Coord = CoordContainer;

