import React from 'react';
import Positional, { Coord } from '../components/positional';

export default function MyAnimation() {
    return (
        <Positional height="100vh" cursorEvent>
            <Coord>
                <span>CENTER</span>
            </Coord>
            <Coord x={10} y={10}>
                <span>TOP RIGHT</span>
            </Coord>
            <Coord x={90} y={90}>
                <span>BOTTOM LEFT</span>
            </Coord>
        </Positional>
    );
}
