export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    const add = () => {
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
    };
    add();
    return self.sanFranciscoNeighborhoods;
  };
}
