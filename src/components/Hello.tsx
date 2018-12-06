import React from 'react';

interface IHelloProps {
  text: number;
}

const Hello = (props: IHelloProps) => <h1>Hello {props.text}</h1>;

export default Hello;
