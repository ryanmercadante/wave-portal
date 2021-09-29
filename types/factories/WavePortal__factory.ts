/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WavePortal, WavePortalInterface } from "../WavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewWave",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllWaves",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "waver",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct WavePortal.Wave[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalWaves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "wave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100596040518060400160405280600581526020017f576176657900000000000000000000000000000000000000000000000000000081525061005e60201b6103301760201c565b6101e1565b6100fa81604051602401610072919061015f565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100fd60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600061013182610181565b61013b818561018c565b935061014b81856020860161019d565b610154816101d0565b840191505092915050565b600060208201905081810360008301526101798184610126565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101bb5780820151818401526020810190506101a0565b838111156101ca576000848401525b50505050565b6000601f19601f8301169050919050565b6109e6806101f06000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906104fd565b61009e565b005b61006a6101d6565b60405161007791906106fa565b60405180910390f35b6100886101df565b60405161009591906106b6565b60405180910390f35b60016000808282546100b0919061080c565b92505081905550600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101769291906103f2565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516101cb929190610715565b60405180910390a250565b60008054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561032757838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461028c906108e0565b80601f01602080910402602001604051908101604052809291908181526020018280546102b8906108e0565b80156103055780601f106102da57610100808354040283529160200191610305565b820191906000526020600020905b8154815290600101906020018083116102e857829003601f168201915b5050505050815260200160028201548152505081526020019060010190610203565b50505050905090565b6103c68160405160240161034491906106d8565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103c9565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546103fe906108e0565b90600052602060002090601f0160209004810192826104205760008555610467565b82601f1061043957805160ff1916838001178555610467565b82800160010185558215610467579182015b8281111561046657825182559160200191906001019061044b565b5b5090506104749190610478565b5090565b5b80821115610491576000816000905550600101610479565b5090565b60006104a86104a384610776565b610745565b9050828152602081018484840111156104c057600080fd5b6104cb84828561089e565b509392505050565b600082601f8301126104e457600080fd5b81356104f4848260208601610495565b91505092915050565b60006020828403121561050f57600080fd5b600082013567ffffffffffffffff81111561052957600080fd5b610535848285016104d3565b91505092915050565b600061054a8383610648565b905092915050565b61055b81610862565b82525050565b600061056c826107b6565b61057681856107d9565b935083602082028501610588856107a6565b8060005b858110156105c457848403895281516105a5858261053e565b94506105b0836107cc565b925060208a0199505060018101905061058c565b50829750879550505050505092915050565b60006105e1826107c1565b6105eb81856107ea565b93506105fb8185602086016108ad565b6106048161099f565b840191505092915050565b600061061a826107c1565b61062481856107fb565b93506106348185602086016108ad565b61063d8161099f565b840191505092915050565b60006060830160008301516106606000860182610552565b506020830151848203602086015261067882826105d6565b915050604083015161068d6040860182610698565b508091505092915050565b6106a181610894565b82525050565b6106b081610894565b82525050565b600060208201905081810360008301526106d08184610561565b905092915050565b600060208201905081810360008301526106f2818461060f565b905092915050565b600060208201905061070f60008301846106a7565b92915050565b600060408201905061072a60008301856106a7565b818103602083015261073c818461060f565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561076c5761076b610970565b5b8060405250919050565b600067ffffffffffffffff82111561079157610790610970565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061081782610894565b915061082283610894565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561085757610856610912565b5b828201905092915050565b600061086d82610874565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156108cb5780820151818401526020810190506108b0565b838111156108da576000848401525b50505050565b600060028204905060018216806108f857607f821691505b6020821081141561090c5761090b610941565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212203eb6259042ea1fe00a21183ec9745d02cd03afd0014c0706342b7f7cd5ccc26e64736f6c63430008000033";

export class WavePortal__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WavePortal> {
    return super.deploy(overrides || {}) as Promise<WavePortal>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WavePortal {
    return super.attach(address) as WavePortal;
  }
  connect(signer: Signer): WavePortal__factory {
    return super.connect(signer) as WavePortal__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WavePortalInterface {
    return new utils.Interface(_abi) as WavePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WavePortal {
    return new Contract(address, _abi, signerOrProvider) as WavePortal;
  }
}