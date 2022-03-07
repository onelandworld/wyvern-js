import { EncoderOverrides, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { ContractAbi, ContractArtifact, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
export declare class WyvernStaticContract extends BaseContract {
    /**
     * @ignore
     */
    static deployedBytecode: string | undefined;
    static contractName: string;
    private readonly _methodABIIndex;
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: (ContractArtifact | SimpleContractArtifact);
    }, atomicizerAddress: string): Promise<WyvernStaticContract>;
    static deployWithLibrariesFrom0xArtifactAsync(artifact: ContractArtifact, libraryArtifacts: {
        [libraryName: string]: ContractArtifact;
    }, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: (ContractArtifact | SimpleContractArtifact);
    }, atomicizerAddress: string): Promise<WyvernStaticContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: ContractAbi;
    }, atomicizerAddress: string): Promise<WyvernStaticContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    protected static _deployLibrariesAsync(artifact: ContractArtifact, libraryArtifacts: {
        [libraryName: string]: ContractArtifact;
    }, web3Wrapper: Web3Wrapper, txDefaults: Partial<TxData>, libraryAddresses?: {
        [libraryName: string]: string;
    }): Promise<{
        [libraryName: string]: string;
    }>;
    getFunctionSignature(methodName: string): string;
    getABIDecodedTransactionData<T>(methodName: string, callData: string): T;
    getABIDecodedReturnData<T>(methodName: string, callData: string): T;
    getSelector(methodName: string): string;
    and(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<void>;
    any(index_0: string, index_1: string[], index_2: Array<number | BigNumber>, index_3: BigNumber[], index_4: string, index_5: string): ContractTxFunctionObj<BigNumber>;
    anyAddOne(index_0: string, index_1: string[], index_2: Array<number | BigNumber>, uints: BigNumber[], index_4: string, index_5: string): ContractTxFunctionObj<BigNumber>;
    anyNoFill(index_0: string, index_1: string[], index_2: Array<number | BigNumber>, index_3: BigNumber[], index_4: string, index_5: string): ContractTxFunctionObj<BigNumber>;
    anySingle(index_0: string, index_1: string[], index_2: number | BigNumber, index_3: BigNumber[], index_4: string): ContractTxFunctionObj<void>;
    atomicizer(): ContractTxFunctionObj<string>;
    dumbSequenceExact(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], cdata: string, index_5: string): ContractTxFunctionObj<BigNumber>;
    name(): ContractTxFunctionObj<string>;
    or(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<void>;
    sequenceAnyAfter(extra: string, addresses: string[], howToCall: number | BigNumber, uints: BigNumber[], cdata: string): ContractTxFunctionObj<void>;
    sequenceExact(extra: string, addresses: string[], howToCall: number | BigNumber, uints: BigNumber[], cdata: string): ContractTxFunctionObj<void>;
    split(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    splitAddOne(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    swapExact(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    swapForever(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    swapOneForOneERC1155(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    swapOneForOneERC1155Decoding(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    swapOneForOneERC721(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    swapOneForOneERC721Decoding(extra: string, addresses: string[], howToCalls: Array<number | BigNumber>, uints: BigNumber[], data: string, counterdata: string): ContractTxFunctionObj<BigNumber>;
    transferERC1155Exact(extra: string, addresses: string[], howToCall: number | BigNumber, index_3: BigNumber[], data: string): ContractTxFunctionObj<void>;
    transferERC20Exact(extra: string, addresses: string[], howToCall: number | BigNumber, index_3: BigNumber[], data: string): ContractTxFunctionObj<void>;
    transferERC721Exact(extra: string, addresses: string[], howToCall: number | BigNumber, index_3: BigNumber[], data: string): ContractTxFunctionObj<void>;
    test(): ContractTxFunctionObj<void>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
