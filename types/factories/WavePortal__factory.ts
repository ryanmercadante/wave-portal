/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WavePortal, WavePortalInterface } from "../WavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
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
  "0x60806040526200004f6040518060400160405280600581526020017f57617665790000000000000000000000000000000000000000000000000000008152506200005560201b620004e61760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b610ee980620001f96000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906107eb565b61009e565b005b61006a61038c565b6040516100779190610b92565b60405180910390f35b610088610395565b6040516100959190610aae565b60405180910390f35b60016000808282546100b09190610caf565b92505081905550600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101769291906106e0565b506040820151816002015550506000606460015442446101969190610caf565b6101a09190610caf565b6101aa9190610db5565b90506101eb6040518060400160405280601b81526020017f52616e646f6d206e756d6265722067656e6572617465643a20257300000000008152508261057f565b8060018190555060328110156103385761023a6040518060400160405280600781526020017f257320776f6e21000000000000000000000000000000000000000000000000008152503361061b565b600066038d7ea4c68000905047811115610289576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028090610b52565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516102af90610a99565b60006040518083038185875af1925050503d80600081146102ec576040519150601f19603f3d011682016040523d82523d6000602084013e6102f1565b606091505b5050905080610335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032c90610b72565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164284604051610380929190610bad565b60405180910390a25050565b60008054905090565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156104dd57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461044290610d83565b80601f016020809104026020016040519081016040528092919081815260200182805461046e90610d83565b80156104bb5780601f10610490576101008083540402835291602001916104bb565b820191906000526020600020905b81548152906001019060200180831161049e57829003601f168201915b50505050508152602001600282015481525050815260200190600101906103b9565b50505050905090565b61057c816040516024016104fa9190610ad0565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506106b7565b50565b6106178282604051602401610595929190610b22565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506106b7565b5050565b6106b38282604051602401610631929190610af2565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506106b7565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546106ec90610d83565b90600052602060002090601f01602090048101928261070e5760008555610755565b82601f1061072757805160ff1916838001178555610755565b82800160010185558215610755579182015b82811115610754578251825591602001919060010190610739565b5b5090506107629190610766565b5090565b5b8082111561077f576000816000905550600101610767565b5090565b600061079661079184610c0e565b610bdd565b9050828152602081018484840111156107ae57600080fd5b6107b9848285610d41565b509392505050565b600082601f8301126107d257600080fd5b81356107e2848260208601610783565b91505092915050565b6000602082840312156107fd57600080fd5b600082013567ffffffffffffffff81111561081757600080fd5b610823848285016107c1565b91505092915050565b60006108388383610a2b565b905092915050565b61084981610d05565b82525050565b61085881610d05565b82525050565b600061086982610c4e565b6108738185610c71565b93508360208202850161088585610c3e565b8060005b858110156108c157848403895281516108a2858261082c565b94506108ad83610c64565b925060208a01995050600181019050610889565b50829750879550505050505092915050565b60006108de82610c59565b6108e88185610c8d565b93506108f8818560208601610d50565b61090181610ea2565b840191505092915050565b600061091782610c59565b6109218185610c9e565b9350610931818560208601610d50565b61093a81610ea2565b840191505092915050565b6000610952603483610c9e565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b60006109b8602783610c9e565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610a1e600083610c82565b9150600082019050919050565b6000606083016000830151610a436000860182610840565b5060208301518482036020860152610a5b82826108d3565b9150506040830151610a706040860182610a7b565b508091505092915050565b610a8481610d37565b82525050565b610a9381610d37565b82525050565b6000610aa482610a11565b9150819050919050565b60006020820190508181036000830152610ac8818461085e565b905092915050565b60006020820190508181036000830152610aea818461090c565b905092915050565b60006040820190508181036000830152610b0c818561090c565b9050610b1b602083018461084f565b9392505050565b60006040820190508181036000830152610b3c818561090c565b9050610b4b6020830184610a8a565b9392505050565b60006020820190508181036000830152610b6b81610945565b9050919050565b60006020820190508181036000830152610b8b816109ab565b9050919050565b6000602082019050610ba76000830184610a8a565b92915050565b6000604082019050610bc26000830185610a8a565b8181036020830152610bd4818461090c565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610c0457610c03610e73565b5b8060405250919050565b600067ffffffffffffffff821115610c2957610c28610e73565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610cba82610d37565b9150610cc583610d37565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610cfa57610cf9610de6565b5b828201905092915050565b6000610d1082610d17565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d6e578082015181840152602081019050610d53565b83811115610d7d576000848401525b50505050565b60006002820490506001821680610d9b57607f821691505b60208210811415610daf57610dae610e44565b5b50919050565b6000610dc082610d37565b9150610dcb83610d37565b925082610ddb57610dda610e15565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212208a62733ada937142cfb20e3e72c6b8d1988a2ecc95d8fe483d009cad3a93ddb064736f6c63430008000033";

export class WavePortal__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<WavePortal> {
    return super.deploy(overrides || {}) as Promise<WavePortal>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
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
