pragma solidity =0.7.4;


import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/contracts/token/ERC721/ERC721.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/contracts/access/Ownable.sol";

/*
mock up contract that lets people buy a roman citizenship as an erc721 token
*/

contract Citizenship is ERC721, Ownable {

    uint256 public citizenCount;

    constructor () ERC721("RomanCitizenship", "RCIT") public {
        citizenCount = 0;
    }

    /*
    Function that lets people pay .5 eth to buy a citizenship token,
    which is a nft erc721 token that makes them a member of the roman empire
    */

    function buyCitizenship() public payable {
        require(msg.value == .5 ether, "Sent ether does not match citizenship price");
        require(balanceOf(msg.sender)==0, "This address is already a Roman citizen");
        _safeMint(msg.sender, citizenCount);
        citizenCount++;
    }






}