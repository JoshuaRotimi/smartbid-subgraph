import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  bidding,
  devClaim,
  distribute,
  luckyWinner,
  luckyWinnerWithReward,
  luckyWinnerWithoutReward,
  reset
} from "../generated/Contract/Contract"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createbiddingEvent(
  userAddress: Address,
  pid: BigInt,
  stakedAmount: BigInt,
  Time: BigInt
): bidding {
  let biddingEvent = changetype<bidding>(newMockEvent())

  biddingEvent.parameters = new Array()

  biddingEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  biddingEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  biddingEvent.parameters.push(
    new ethereum.EventParam(
      "stakedAmount",
      ethereum.Value.fromUnsignedBigInt(stakedAmount)
    )
  )
  biddingEvent.parameters.push(
    new ethereum.EventParam("Time", ethereum.Value.fromUnsignedBigInt(Time))
  )

  return biddingEvent
}

export function createdevClaimEvent(
  sender: Address,
  pid: BigInt,
  amount: BigInt,
  time: BigInt
): devClaim {
  let devClaimEvent = changetype<devClaim>(newMockEvent())

  devClaimEvent.parameters = new Array()

  devClaimEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  devClaimEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  devClaimEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  devClaimEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return devClaimEvent
}

export function createdistributeEvent(
  firstBidder: Address,
  firtBidderReward: BigInt,
  secondBidder: Address,
  secondBidderReward: BigInt,
  thirdBidder: Address,
  thirdBidderReward: BigInt,
  time: BigInt
): distribute {
  let distributeEvent = changetype<distribute>(newMockEvent())

  distributeEvent.parameters = new Array()

  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "firstBidder",
      ethereum.Value.fromAddress(firstBidder)
    )
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "firtBidderReward",
      ethereum.Value.fromUnsignedBigInt(firtBidderReward)
    )
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "secondBidder",
      ethereum.Value.fromAddress(secondBidder)
    )
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "secondBidderReward",
      ethereum.Value.fromUnsignedBigInt(secondBidderReward)
    )
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "thirdBidder",
      ethereum.Value.fromAddress(thirdBidder)
    )
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam(
      "thirdBidderReward",
      ethereum.Value.fromUnsignedBigInt(thirdBidderReward)
    )
  )
  distributeEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return distributeEvent
}

export function createluckyWinnerEvent(
  lWinner: Address,
  pid: BigInt,
  amount: BigInt,
  time: BigInt
): luckyWinner {
  let luckyWinnerEvent = changetype<luckyWinner>(newMockEvent())

  luckyWinnerEvent.parameters = new Array()

  luckyWinnerEvent.parameters.push(
    new ethereum.EventParam("lWinner", ethereum.Value.fromAddress(lWinner))
  )
  luckyWinnerEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  luckyWinnerEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  luckyWinnerEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return luckyWinnerEvent
}

export function createluckyWinnerWithRewardEvent(
  lWinner: Address,
  pid: BigInt,
  amount: BigInt,
  time: BigInt
): luckyWinnerWithReward {
  let luckyWinnerWithRewardEvent = changetype<luckyWinnerWithReward>(
    newMockEvent()
  )

  luckyWinnerWithRewardEvent.parameters = new Array()

  luckyWinnerWithRewardEvent.parameters.push(
    new ethereum.EventParam("lWinner", ethereum.Value.fromAddress(lWinner))
  )
  luckyWinnerWithRewardEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  luckyWinnerWithRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  luckyWinnerWithRewardEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return luckyWinnerWithRewardEvent
}

export function createluckyWinnerWithoutRewardEvent(
  lWinner: Address,
  pid: BigInt,
  amount: BigInt,
  time: BigInt
): luckyWinnerWithoutReward {
  let luckyWinnerWithoutRewardEvent = changetype<luckyWinnerWithoutReward>(
    newMockEvent()
  )

  luckyWinnerWithoutRewardEvent.parameters = new Array()

  luckyWinnerWithoutRewardEvent.parameters.push(
    new ethereum.EventParam("lWinner", ethereum.Value.fromAddress(lWinner))
  )
  luckyWinnerWithoutRewardEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  luckyWinnerWithoutRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  luckyWinnerWithoutRewardEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return luckyWinnerWithoutRewardEvent
}

export function createresetEvent(pid: BigInt): reset {
  let resetEvent = changetype<reset>(newMockEvent())

  resetEvent.parameters = new Array()

  resetEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )

  return resetEvent
}
