import React from 'react';

export default function SurpriseButton(props) {
    return <button onClick={() => props.setSurprise(true)}>Surprise!</button>;
}

