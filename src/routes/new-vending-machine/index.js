/* eslint no-console: 0*/

import React from 'react';
import NewVendingMachine from './NewVendingMachine';
import Layout from '../../components/Layout';

// number randomizer for longitude, latitude
function randomizeNumberInRange(absLimit) {
  return Math.floor(Math.random() * absLimit * 2) - absLimit;
}

const sampleObjectAdd = {
  id: Math.floor(Math.random() * 100) + 1,
  type: 'A',
  attributes: {
    longitude: randomizeNumberInRange(180),
    latitude: randomizeNumberInRange(90),
  }
};

// TODO: Replace this function with function that calls POST API
function addVendingMachine() {
  console.log('HIT!');
  console.log(JSON.stringify(sampleObjectAdd));
}

function handleLongitudeChange(e) {
  // this.props.newVendingMachine.longitude = e.target.value;
  sampleObjectAdd.attributes.longitude = e.target.value;
}

function handleLatitudeChange(e) {
  // this.props.newVendingMachine.latitude = e.target.value;
  sampleObjectAdd.attributes.latitude = e.target.value;
}

// TODO: handle user input, transfer randomizer function in testing

async function action() {
  return {
    chunks: ['new-vending-machine'],
    title: 'Add New Vending Machine',
    component: (
      <Layout>
        <NewVendingMachine
          onSubmit={addVendingMachine}
          handleLongitudeChange={handleLongitudeChange}
          handleLatitudeChange={handleLatitudeChange}
        />
      </Layout>
    ),
  }
}

export default action;
