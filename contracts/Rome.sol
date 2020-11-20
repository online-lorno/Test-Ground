pragma solidity =0.7.4;


import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/token/ERC20/ERC20.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol";

//using SafeMath for uint256;


contract Rome is ERC20 {
    using SafeMath for uint256;

    constructor() ERC20("Rome", "ROME") public {

    }


    function buyRome(uint256 amount) public payable{

        uint256 cost = amount * 100000000000000000; //each rome token costs .1 eth
        require(msg.value == cost, "Sent ether does not match buy price for the requested token amount");
        _mint(msg.sender, amount);
    }




}

