import React from 'react';
import Poll from './Poll';

export default function MainCard({ pollData1 }) {

  return (
    pollData1.map((data) => (!data.isAnonymous) && (
      <Poll data={data} />
    )));
}
