// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SwissContract {
    // Private state variable
    string private data = "default";

    // Function to set the state variable
    function setData(string memory _data) public {
        require(
            keccak256(abi.encodePacked(_data)) !=
                keccak256(abi.encodePacked(data)),
            "New value must be different from the default value"
        );
        data = _data;
    }

    // Public function to return the current value of the state variable
    function getData() public view returns (string memory) {
        return data;
    }
}
