import { EncoderOverrides, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { BlockRange, ContractAbi, ContractArtifact, DecodedLogArgs, LogWithDecodedArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { EventCallback, IndexedFilterValues, SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
export declare type WyvernExchangeEventArgs = WyvernExchangeOrderApprovedEventArgs | WyvernExchangeOrderFillChangedEventArgs | WyvernExchangeOrdersMatchedEventArgs;
export declare enum WyvernExchangeEvents {
    OrderApproved = "OrderApproved",
    OrderFillChanged = "OrderFillChanged",
    OrdersMatched = "OrdersMatched"
}
export interface WyvernExchangeOrderApprovedEventArgs extends DecodedLogArgs {
    hash: string;
    registry: string;
    maker: string;
    staticTarget: string;
    staticSelector: string;
    staticExtradata: string;
    maximumFill: BigNumber;
    listingTime: BigNumber;
    expirationTime: BigNumber;
    salt: BigNumber;
    orderbookInclusionDesired: boolean;
}
export interface WyvernExchangeOrderFillChangedEventArgs extends DecodedLogArgs {
    hash: string;
    maker: string;
    newFill: BigNumber;
}
export interface WyvernExchangeOrdersMatchedEventArgs extends DecodedLogArgs {
    firstHash: string;
    secondHash: string;
    firstMaker: string;
    secondMaker: string;
    newFirstFill: BigNumber;
    newSecondFill: BigNumber;
    metadata: string;
}
export declare class WyvernExchangeContract extends BaseContract {
    /**
     * @ignore
     */
    static deployedBytecode: string | undefined;
    static contractName: string;
    private readonly _methodABIIndex;
    private readonly _subscriptionManager;
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: (ContractArtifact | SimpleContractArtifact);
    }, chainId: BigNumber, registryAddrs: string[], customPersonalSignPrefix: string): Promise<WyvernExchangeContract>;
    static deployWithLibrariesFrom0xArtifactAsync(artifact: ContractArtifact, libraryArtifacts: {
        [libraryName: string]: ContractArtifact;
    }, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: (ContractArtifact | SimpleContractArtifact);
    }, chainId: BigNumber, registryAddrs: string[], customPersonalSignPrefix: string): Promise<WyvernExchangeContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: ContractAbi;
    }, chainId: BigNumber, registryAddrs: string[], customPersonalSignPrefix: string): Promise<WyvernExchangeContract>;
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
    approveOrderHash_(hash: string): ContractTxFunctionObj<void>;
    approveOrder_(registry: string, maker: string, staticTarget: string, staticSelector: string, staticExtradata: string, maximumFill: BigNumber, listingTime: BigNumber, expirationTime: BigNumber, salt: BigNumber, orderbookInclusionDesired: boolean): ContractTxFunctionObj<void>;
    approved(index_0: string, index_1: string): ContractTxFunctionObj<boolean>;
    atomicMatch_(uints: BigNumber[], staticSelectors: string[], firstExtradata: string, firstCalldata: string, secondExtradata: string, secondCalldata: string, howToCalls: Array<number | BigNumber>, metadata: string, signatures: string): ContractTxFunctionObj<void>;
    codename(): ContractTxFunctionObj<string>;
    fills(index_0: string, index_1: string): ContractTxFunctionObj<BigNumber>;
    hashOrder_(registry: string, maker: string, staticTarget: string, staticSelector: string, staticExtradata: string, maximumFill: BigNumber, listingTime: BigNumber, expirationTime: BigNumber, salt: BigNumber): ContractTxFunctionObj<string>;
    hashToSign_(orderHash: string): ContractTxFunctionObj<string>;
    name(): ContractTxFunctionObj<string>;
    registries(index_0: string): ContractTxFunctionObj<boolean>;
    setOrderFill_(hash: string, fill: BigNumber): ContractTxFunctionObj<void>;
    validateOrderAuthorization_(hash: string, maker: string, signature: string): ContractTxFunctionObj<boolean>;
    validateOrderParameters_(registry: string, maker: string, staticTarget: string, staticSelector: string, staticExtradata: string, maximumFill: BigNumber, listingTime: BigNumber, expirationTime: BigNumber, salt: BigNumber): ContractTxFunctionObj<boolean>;
    version(): ContractTxFunctionObj<string>;
    /**
     * Subscribe to an event type emitted by the WyvernExchange contract.
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    subscribe<ArgsType extends WyvernExchangeEventArgs>(eventName: WyvernExchangeEvents, indexFilterValues: IndexedFilterValues, callback: EventCallback<ArgsType>, isVerbose?: boolean, blockPollingIntervalMs?: number): string;
    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    unsubscribe(subscriptionToken: string): void;
    /**
     * Cancels all existing subscriptions
     */
    unsubscribeAll(): void;
    /**
     * Gets historical logs without creating a subscription
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    getLogsAsync<ArgsType extends WyvernExchangeEventArgs>(eventName: WyvernExchangeEvents, blockRange: BlockRange, indexFilterValues: IndexedFilterValues): Promise<Array<LogWithDecodedArgs<ArgsType>>>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
