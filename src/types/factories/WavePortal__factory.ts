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
    inputs: [],
    name: "getTopWaver",
    outputs: [
      {
        internalType: "address",
        name: "waverAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "waveCount",
        type: "uint256",
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
        internalType: "address",
        name: "waverAddress",
        type: "address",
      },
    ],
    name: "isWaver",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "waverAddress",
        type: "address",
      },
    ],
    name: "newWaver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "waverAddress",
        type: "address",
      },
    ],
    name: "updateWaverWaveCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "waverList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200004160405180606001604052806025815260200162000d5e602591396200004760201b6200060a1760201c565b620001db565b620000e7816040516024016200005e919062000154565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000ea60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000620001208262000178565b6200012c818562000183565b93506200013e81856020860162000194565b6200014981620001ca565b840191505092915050565b6000602082019050818103600083015262000170818462000113565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001b457808201518184015260208101905062000197565b83811115620001c4576000848401525b50505050565b6000601f19601f8301169050919050565b610b7380620001eb6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806382fa37621161005b57806382fa3762146100c457806387ec9b8d146100f45780639a2cdc08146101135780639d9a213f146101315761007d565b8063088e81ad146100825780636aa496a01461009e5780636fe15b44146100ba575b600080fd5b61009c6004803603810190610097919061082e565b610161565b005b6100b860048036038101906100b3919061082e565b610276565b005b6100c26102d2565b005b6100de60048036038101906100d9919061082e565b61033f565b6040516100eb919061092a565b60405180910390f35b6100fc610397565b60405161010a929190610901565b60405180910390f35b61011b610580565b60405161012891906109c7565b60405180910390f35b61014b60048036038101906101469190610857565b6105cb565b60405161015891906108e6565b60405180910390f35b61016a8161033f565b6102735760008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546102c891906109fe565b9250508190555050565b6001600260008282546102e591906109fe565b925050819055506102f533610161565b6102fe33610276565b61033d6040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106a3565b565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff169050919050565b60008060005b60018054905081101561057b5781600080600184815481106103e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015411156105675760008060018381548110610494577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154915060018181548110610539577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692505b60018161057491906109fe565b905061039d565b509091565b60006105c36040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060025461073f565b600254905090565b600181815481106105db57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6106a08160405160240161061e9190610945565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107db565b50565b61073b82826040516024016106b9929190610967565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107db565b5050565b6107d78282604051602401610755929190610997565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107db565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60008135905061081381610b0f565b92915050565b60008135905061082881610b26565b92915050565b60006020828403121561084057600080fd5b600061084e84828501610804565b91505092915050565b60006020828403121561086957600080fd5b600061087784828501610819565b91505092915050565b61088981610a54565b82525050565b61089881610a66565b82525050565b60006108a9826109e2565b6108b381856109ed565b93506108c3818560208601610a9c565b6108cc81610afe565b840191505092915050565b6108e081610a92565b82525050565b60006020820190506108fb6000830184610880565b92915050565b60006040820190506109166000830185610880565b61092360208301846108d7565b9392505050565b600060208201905061093f600083018461088f565b92915050565b6000602082019050818103600083015261095f818461089e565b905092915050565b60006040820190508181036000830152610981818561089e565b90506109906020830184610880565b9392505050565b600060408201905081810360008301526109b1818561089e565b90506109c060208301846108d7565b9392505050565b60006020820190506109dc60008301846108d7565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610a0982610a92565b9150610a1483610a92565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a4957610a48610acf565b5b828201905092915050565b6000610a5f82610a72565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610aba578082015181840152602081019050610a9f565b83811115610ac9576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b610b1881610a54565b8114610b2357600080fd5b50565b610b2f81610a92565b8114610b3a57600080fd5b5056fea2646970667358221220c35fa15a02579cc9b4e348486817c1a71ef537591604d5c3163c024e057d93f864736f6c63430008000033596f6f6f206d7920736d61727420636f6e74726163742069732072756e6e696e6721212121";

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
