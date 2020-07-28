import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getViewportHeight, getViewportWidth } from '../../../../helpers';

import styles from './coord.module.scss';

export default function Coord({
  children,
  x,
  y,
  parentRef,
}) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  if (parentRef) {
    const speed = ((x * y) / 3) + 50;

    const viewPortHeight = getViewportHeight();
    const viewPortWidth = getViewportWidth();

    const mouseMove = (e) => {
      requestAnimationFrame(() => {
        const midpointX = viewPortWidth / 2;
        const midpointY = viewPortHeight / 2;
        
        const eventX = e.pageX;
        const eventY = e.pageY - parentRef.current.offsetTop;
        
        const relativeX = (eventX - midpointX) / speed;
        const relativeY = (eventY - midpointY) / speed;
        
        setTop(relativeY);
        setLeft(relativeX);
      });
    };

    useEffect(() => {
      if (parentRef.current) {
        parentRef.current.addEventListener('mousemove', mouseMove);
      }
      return function cleanup() {
        parentRef.current.removeEventListener('mousemove', mouseMove);
      };
    });
  }

  return (
      <div
        className={styles.container}
        style={{
          left: `${x + -left}%`,
          top: `${y + -top}%`,
        }}
      >
        {children}
      </div>
  );
}

Coord.propTypes = {
  children: PropTypes.any,
  x: PropTypes.number,
  y: PropTypes.number,
  parentRef: PropTypes.any,
};

Coord.defaultProps = {
  children: null,
  x: 50,
  y: 50,
  parentRef: null,
};

