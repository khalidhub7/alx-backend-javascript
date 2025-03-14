#!/usr/bin/env node

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = [
    'SOMA', 'Union Square'];

  /* this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(
      newNeighborhood,
    );
    return this.sanFranciscoNeighborhoods;
  }; */
  this.addNeighborhood = (newNeighborhood) => {
    const add = () => this.sanFranciscoNeighborhoods.push(newNeighborhood);
    add();
    return this.sanFranciscoNeighborhoods;
  };
}
