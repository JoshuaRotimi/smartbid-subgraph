// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class bidding extends ethereum.Event {
  get params(): bidding__Params {
    return new bidding__Params(this);
  }
}

export class bidding__Params {
  _event: bidding;

  constructor(event: bidding) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get stakedAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get Time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class devClaim extends ethereum.Event {
  get params(): devClaim__Params {
    return new devClaim__Params(this);
  }
}

export class devClaim__Params {
  _event: devClaim;

  constructor(event: devClaim) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class distribute extends ethereum.Event {
  get params(): distribute__Params {
    return new distribute__Params(this);
  }
}

export class distribute__Params {
  _event: distribute;

  constructor(event: distribute) {
    this._event = event;
  }

  get firstBidder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get firtBidderReward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get secondBidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get secondBidderReward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get thirdBidder(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get thirdBidderReward(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class luckyWinner extends ethereum.Event {
  get params(): luckyWinner__Params {
    return new luckyWinner__Params(this);
  }
}

export class luckyWinner__Params {
  _event: luckyWinner;

  constructor(event: luckyWinner) {
    this._event = event;
  }

  get lWinner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class luckyWinnerWithReward extends ethereum.Event {
  get params(): luckyWinnerWithReward__Params {
    return new luckyWinnerWithReward__Params(this);
  }
}

export class luckyWinnerWithReward__Params {
  _event: luckyWinnerWithReward;

  constructor(event: luckyWinnerWithReward) {
    this._event = event;
  }

  get lWinner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class luckyWinnerWithoutReward extends ethereum.Event {
  get params(): luckyWinnerWithoutReward__Params {
    return new luckyWinnerWithoutReward__Params(this);
  }
}

export class luckyWinnerWithoutReward__Params {
  _event: luckyWinnerWithoutReward;

  constructor(event: luckyWinnerWithoutReward) {
    this._event = event;
  }

  get lWinner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class reset extends ethereum.Event {
  get params(): reset__Params {
    return new reset__Params(this);
  }
}

export class reset__Params {
  _event: reset;

  constructor(event: reset) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Contract__Top3BiddersResult {
  value0: Address;
  value1: Address;
  value2: Address;

  constructor(value0: Address, value1: Address, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }

  getFirstTBidder(): Address {
    return this.value0;
  }

  getSecondTBidder(): Address {
    return this.value1;
  }

  getThirdTBidder(): Address {
    return this.value2;
  }
}

export class Contract__biddersResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getUser(): Address {
    return this.value0;
  }

  getTokenAddress(): Address {
    return this.value1;
  }

  get_bidAmount(): BigInt {
    return this.value2;
  }

  getTokenOwned(): BigInt {
    return this.value3;
  }

  getTimeOut(): BigInt {
    return this.value4;
  }
}

export class Contract__getTopBidResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class Contract__positionResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getNPOne(): BigInt {
    return this.value0;
  }

  getNPTwo(): BigInt {
    return this.value1;
  }

  getNPThree(): BigInt {
    return this.value2;
  }

  get_devShare(): BigInt {
    return this.value3;
  }

  getRandUser(): BigInt {
    return this.value4;
  }

  getDivforRandUser(): BigInt {
    return this.value5;
  }
}

export class Contract__requestTokenResult {
  value0: Address;
  value1: Array<Address>;
  value2: Array<BigInt>;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: Array<Address>,
    value2: Array<BigInt>,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddressArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigIntArray(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  get_token(): Address {
    return this.value0;
  }

  getNftCont(): Array<Address> {
    return this.value1;
  }

  getNftReq(): Array<BigInt> {
    return this.value2;
  }

  get_multiplier(): BigInt {
    return this.value3;
  }
}

export class Contract__request_data_in_BiddingResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    map.set("value11", ethereum.Value.fromUnsignedBigInt(this.value11));
    return map;
  }

  getHighestBidder(): Address {
    return this.value0;
  }

  getTimeOut(): BigInt {
    return this.value1;
  }

  getMustNotExceed(): BigInt {
    return this.value2;
  }

  getInitiialBiddingAmount(): BigInt {
    return this.value3;
  }

  getTotalBidding(): BigInt {
    return this.value4;
  }

  getHighestbid(): BigInt {
    return this.value5;
  }

  getNumberOfRandomAddress(): BigInt {
    return this.value6;
  }

  getDevPercentage(): BigInt {
    return this.value7;
  }

  getPositionOneSharedPercentage(): BigInt {
    return this.value8;
  }

  getPositionTwoSharedPercentage(): BigInt {
    return this.value9;
  }

  getPositionThreeSharedPercentage(): BigInt {
    return this.value10;
  }

  getRandomUserSharedPercentage(): BigInt {
    return this.value11;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  Top3Bidders(pid: BigInt): Contract__Top3BiddersResult {
    let result = super.call(
      "Top3Bidders",
      "Top3Bidders(uint256):(address,address,address)",
      [ethereum.Value.fromUnsignedBigInt(pid)]
    );

    return new Contract__Top3BiddersResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress()
    );
  }

  try_Top3Bidders(
    pid: BigInt
  ): ethereum.CallResult<Contract__Top3BiddersResult> {
    let result = super.tryCall(
      "Top3Bidders",
      "Top3Bidders(uint256):(address,address,address)",
      [ethereum.Value.fromUnsignedBigInt(pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__Top3BiddersResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress()
      )
    );
  }

  bidLength(): BigInt {
    let result = super.call("bidLength", "bidLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bidLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bidLength", "bidLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bidders(param0: BigInt, param1: Address): Contract__biddersResult {
    let result = super.call(
      "bidders",
      "bidders(uint256,address):(address,address,uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new Contract__biddersResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_bidders(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<Contract__biddersResult> {
    let result = super.tryCall(
      "bidders",
      "bidders(uint256,address):(address,address,uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__biddersResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  devAddress(): Address {
    let result = super.call("devAddress", "devAddress():(address)", []);

    return result[0].toAddress();
  }

  try_devAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("devAddress", "devAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTopBid(_pid: BigInt): Contract__getTopBidResult {
    let result = super.call(
      "getTopBid",
      "getTopBid(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );

    return new Contract__getTopBidResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getTopBid(_pid: BigInt): ethereum.CallResult<Contract__getTopBidResult> {
    let result = super.tryCall(
      "getTopBid",
      "getTopBid(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__getTopBidResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getUri(pid: BigInt, tContract: Address, tokenOwned: BigInt): boolean {
    let result = super.call(
      "getUri",
      "getUri(uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(pid),
        ethereum.Value.fromAddress(tContract),
        ethereum.Value.fromUnsignedBigInt(tokenOwned)
      ]
    );

    return result[0].toBoolean();
  }

  try_getUri(
    pid: BigInt,
    tContract: Address,
    tokenOwned: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getUri",
      "getUri(uint256,address,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(pid),
        ethereum.Value.fromAddress(tContract),
        ethereum.Value.fromUnsignedBigInt(tokenOwned)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAdminAddress(param0: Address): boolean {
    let result = super.call(
      "isAdminAddress",
      "isAdminAddress(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_isAdminAddress(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAdminAddress",
      "isAdminAddress(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  position(
    pid: BigInt,
    FirstTBidder: Address,
    secondTBidder: Address,
    thirdTBidder: Address
  ): Contract__positionResult {
    let result = super.call(
      "position",
      "position(uint256,address,address,address):(uint256,uint256,uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(pid),
        ethereum.Value.fromAddress(FirstTBidder),
        ethereum.Value.fromAddress(secondTBidder),
        ethereum.Value.fromAddress(thirdTBidder)
      ]
    );

    return new Contract__positionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_position(
    pid: BigInt,
    FirstTBidder: Address,
    secondTBidder: Address,
    thirdTBidder: Address
  ): ethereum.CallResult<Contract__positionResult> {
    let result = super.tryCall(
      "position",
      "position(uint256,address,address,address):(uint256,uint256,uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(pid),
        ethereum.Value.fromAddress(FirstTBidder),
        ethereum.Value.fromAddress(secondTBidder),
        ethereum.Value.fromAddress(thirdTBidder)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__positionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  projBidders(param0: BigInt, param1: BigInt): Address {
    let result = super.call(
      "projBidders",
      "projBidders(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_projBidders(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "projBidders",
      "projBidders(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  projID(_pid: BigInt): BigInt {
    let result = super.call("projID", "projID(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_pid)
    ]);

    return result[0].toBigInt();
  }

  try_projID(_pid: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("projID", "projID(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_pid)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  requestToken(id: BigInt): Contract__requestTokenResult {
    let result = super.call(
      "requestToken",
      "requestToken(uint256):(address,address[],uint256[],uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new Contract__requestTokenResult(
      result[0].toAddress(),
      result[1].toAddressArray(),
      result[2].toBigIntArray(),
      result[3].toBigInt()
    );
  }

  try_requestToken(
    id: BigInt
  ): ethereum.CallResult<Contract__requestTokenResult> {
    let result = super.tryCall(
      "requestToken",
      "requestToken(uint256):(address,address[],uint256[],uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__requestTokenResult(
        value[0].toAddress(),
        value[1].toAddressArray(),
        value[2].toBigIntArray(),
        value[3].toBigInt()
      )
    );
  }

  request_data_in_Bidding(
    param0: BigInt
  ): Contract__request_data_in_BiddingResult {
    let result = super.call(
      "request_data_in_Bidding",
      "request_data_in_Bidding(uint256):(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__request_data_in_BiddingResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toBigInt()
    );
  }

  try_request_data_in_Bidding(
    param0: BigInt
  ): ethereum.CallResult<Contract__request_data_in_BiddingResult> {
    let result = super.tryCall(
      "request_data_in_Bidding",
      "request_data_in_Bidding(uint256):(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__request_data_in_BiddingResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get bidToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _NFTContractAddress(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get bidTimeOut(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _URIRequired(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _multiplier(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _mustNotExceed(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _startBidWith(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _numberOfRandomADDRToPick(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get percentages(): Array<BigInt> {
    return this._call.inputValues[8].value.toBigIntArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DistributeRewardsWithOther3Call extends ethereum.Call {
  get inputs(): DistributeRewardsWithOther3Call__Inputs {
    return new DistributeRewardsWithOther3Call__Inputs(this);
  }

  get outputs(): DistributeRewardsWithOther3Call__Outputs {
    return new DistributeRewardsWithOther3Call__Outputs(this);
  }
}

export class DistributeRewardsWithOther3Call__Inputs {
  _call: DistributeRewardsWithOther3Call;

  constructor(call: DistributeRewardsWithOther3Call) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DistributeRewardsWithOther3Call__Outputs {
  _call: DistributeRewardsWithOther3Call;

  constructor(call: DistributeRewardsWithOther3Call) {
    this._call = call;
  }
}

export class AddBidCall extends ethereum.Call {
  get inputs(): AddBidCall__Inputs {
    return new AddBidCall__Inputs(this);
  }

  get outputs(): AddBidCall__Outputs {
    return new AddBidCall__Outputs(this);
  }
}

export class AddBidCall__Inputs {
  _call: AddBidCall;

  constructor(call: AddBidCall) {
    this._call = call;
  }

  get bidToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _NFTContractAddress(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _multiplier(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _URIRequired(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _mustNotExceed(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _startBidWith(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _bidTimeOut(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _numberOfRandomADDRToPick(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get percentages(): Array<BigInt> {
    return this._call.inputValues[8].value.toBigIntArray();
  }
}

export class AddBidCall__Outputs {
  _call: AddBidCall;

  constructor(call: AddBidCall) {
    this._call = call;
  }
}

export class DistributeRewardsWithRandomnessCall extends ethereum.Call {
  get inputs(): DistributeRewardsWithRandomnessCall__Inputs {
    return new DistributeRewardsWithRandomnessCall__Inputs(this);
  }

  get outputs(): DistributeRewardsWithRandomnessCall__Outputs {
    return new DistributeRewardsWithRandomnessCall__Outputs(this);
  }
}

export class DistributeRewardsWithRandomnessCall__Inputs {
  _call: DistributeRewardsWithRandomnessCall;

  constructor(call: DistributeRewardsWithRandomnessCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DistributeRewardsWithRandomnessCall__Outputs {
  _call: DistributeRewardsWithRandomnessCall;

  constructor(call: DistributeRewardsWithRandomnessCall) {
    this._call = call;
  }
}

export class EmmergencyEditOfRewardCall extends ethereum.Call {
  get inputs(): EmmergencyEditOfRewardCall__Inputs {
    return new EmmergencyEditOfRewardCall__Inputs(this);
  }

  get outputs(): EmmergencyEditOfRewardCall__Outputs {
    return new EmmergencyEditOfRewardCall__Outputs(this);
  }
}

export class EmmergencyEditOfRewardCall__Inputs {
  _call: EmmergencyEditOfRewardCall;

  constructor(call: EmmergencyEditOfRewardCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newNumberOfRandomness(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get percentages(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class EmmergencyEditOfRewardCall__Outputs {
  _call: EmmergencyEditOfRewardCall;

  constructor(call: EmmergencyEditOfRewardCall) {
    this._call = call;
  }
}

export class MultipleAdminCall extends ethereum.Call {
  get inputs(): MultipleAdminCall__Inputs {
    return new MultipleAdminCall__Inputs(this);
  }

  get outputs(): MultipleAdminCall__Outputs {
    return new MultipleAdminCall__Outputs(this);
  }
}

export class MultipleAdminCall__Inputs {
  _call: MultipleAdminCall;

  constructor(call: MultipleAdminCall) {
    this._call = call;
  }

  get _adminAddress(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get status(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class MultipleAdminCall__Outputs {
  _call: MultipleAdminCall;

  constructor(call: MultipleAdminCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ResetBiddingProcessCall extends ethereum.Call {
  get inputs(): ResetBiddingProcessCall__Inputs {
    return new ResetBiddingProcessCall__Inputs(this);
  }

  get outputs(): ResetBiddingProcessCall__Outputs {
    return new ResetBiddingProcessCall__Outputs(this);
  }
}

export class ResetBiddingProcessCall__Inputs {
  _call: ResetBiddingProcessCall;

  constructor(call: ResetBiddingProcessCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _bidTimeOut(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _bidAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _mustNotExceed(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ResetBiddingProcessCall__Outputs {
  _call: ResetBiddingProcessCall;

  constructor(call: ResetBiddingProcessCall) {
    this._call = call;
  }
}

export class SetDevCall extends ethereum.Call {
  get inputs(): SetDevCall__Inputs {
    return new SetDevCall__Inputs(this);
  }

  get outputs(): SetDevCall__Outputs {
    return new SetDevCall__Outputs(this);
  }
}

export class SetDevCall__Inputs {
  _call: SetDevCall;

  constructor(call: SetDevCall) {
    this._call = call;
  }

  get _devAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDevCall__Outputs {
  _call: SetDevCall;

  constructor(call: SetDevCall) {
    this._call = call;
  }
}

export class SubmitBidCall extends ethereum.Call {
  get inputs(): SubmitBidCall__Inputs {
    return new SubmitBidCall__Inputs(this);
  }

  get outputs(): SubmitBidCall__Outputs {
    return new SubmitBidCall__Outputs(this);
  }
}

export class SubmitBidCall__Inputs {
  _call: SubmitBidCall;

  constructor(call: SubmitBidCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenOwned(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountToBidWith(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SubmitBidCall__Outputs {
  _call: SubmitBidCall;

  constructor(call: SubmitBidCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawTokenFromContractCall extends ethereum.Call {
  get inputs(): WithdrawTokenFromContractCall__Inputs {
    return new WithdrawTokenFromContractCall__Inputs(this);
  }

  get outputs(): WithdrawTokenFromContractCall__Outputs {
    return new WithdrawTokenFromContractCall__Outputs(this);
  }
}

export class WithdrawTokenFromContractCall__Inputs {
  _call: WithdrawTokenFromContractCall;

  constructor(call: WithdrawTokenFromContractCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawTokenFromContractCall__Outputs {
  _call: WithdrawTokenFromContractCall;

  constructor(call: WithdrawTokenFromContractCall) {
    this._call = call;
  }
}