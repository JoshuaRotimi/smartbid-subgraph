import { BigInt } from "@graphprotocol/graph-ts"
import {bidding} from "../generated/Contract/Contract"
import { Bid } from "../generated/schema"

export function handlebidding(event: bidding): void {
  let userBid = Bid.load(event.transaction.hash.toHex());

  if (userBid === null) {
    userBid = new Bid(event.transaction.hash.toHex())
  }

  userBid.address = event.params.userAddress.toHex();
  userBid.eventID = event.params.pid;
  userBid.stakedAmount = event.params.stakedAmount;
  userBid.createdAt = event.params.Time;
  userBid.block = event.block.number;

  userBid.save();


}

