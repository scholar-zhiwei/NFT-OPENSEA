// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract NFT is ERC721, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    string public baseURI;
    Counters.Counter public totalSupply;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mint(address mintTo) public onlyOwner nonReentrant {
        totalSupply.increment();
        _mint(mintTo, totalSupply.current());
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string calldata _uri) external onlyOwner {
        baseURI = _uri;
    }
}
