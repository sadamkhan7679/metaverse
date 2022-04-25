// https://docs.ethers.io/v5/api/utils/abi/formats/#abi-formats--human-readable-abi
export const contractABI = [
  'function publicMint(uint256 _amount) public payable',
  'function presaleMint(uint256 _amount) public payable',
  'function paused() public view returns (bool)',
  'function setPaused(bool _paused) external',
  'function presale() public view returns (bool)',
  'function setPresale(bool _presale) external',
  'function totalSupply() external view returns (uint256)',
  'function tokenPrice() public view returns (uint256)',
  'function setPrice(uint256 _valueInEther) external',
  'function baseURI() public view returns (string memory)',
  'function setBaseURI(string calldata _newBaseURI) external',
  'function owner() public view returns (address)',
  'function transferOwnership(address newOwner) public',
];
