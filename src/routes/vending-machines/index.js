import React from 'react';
import VendingMachines from './VendingMachines';
import Layout from '../../components/Layout';

const SAMPLE_VENDOS = [
  { id: '1', type: 'A', attributes: { longitude: '0', latitude: '0'} },
  { id: '2', type: 'A', attributes: { longitude: '15', latitude: '15'} },
  { id: '3', type: 'A', attributes: { longitude: '30', latitude: '30'} },
];

async function action() {
  // TODO: fetch API data
  // TODO: empty list checking

  return {
    chunks: ['vending-machines'],
    title: 'Vending Machines Directory',
    component: (
      <Layout>
        <VendingMachines vendingMachines={SAMPLE_VENDOS} />
      </Layout>
    ),
  };
}

export default action;
