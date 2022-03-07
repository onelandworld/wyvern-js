import { EncoderOverrides, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { BlockRange, ContractAbi, ContractArtifact, DecodedLogArgs, LogWithDecodedArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { EventCallback, IndexedFilterValues, SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
export declare type WyvernRegistryEventArgs = WyvernRegistryOwnershipTransferredEventArgs;
export declare enum WyvernRegistryEvents {
    OwnershipTransferred = "OwnershipTransferred"
}
export interface WyvernRegistryOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export declare class WyvernRegistryContract extends BaseContract {
    /**
     * @ignore
     */
    static deployedBytecode: string | undefined;
    static contractName: string;
    private readonly _methodABIIndex;
    private readonly _subscriptionManager;
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: (ContractArtifact | SimpleContractArtifact);
    }): Promise<WyvernRegistryContract>;
    static deployWithLibrariesFrom0xArtifactAsync(artifact: ContractArtifact, libraryArtifacts: {
        [libraryName: string]: ContractArtifact;
    }, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: (ContractArtifact | SimpleContractArtifact);
    }): Promise<WyvernRegistryContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: ContractAbi;
    }): Promise<WyvernRegistryContract>;
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
    DELAY_PERIOD(): ContractTxFunctionObj<BigNumber>;
    contracts(index_0: string): ContractTxFunctionObj<boolean>;
    delegateProxyImplementation(): ContractTxFunctionObj<string>;
    endGrantAuthentication(addr: string): ContractTxFunctionObj<void>;
    initialAddressSet(): ContractTxFunctionObj<boolean>;
    name(): ContractTxFunctionObj<string>;
    owner(): ContractTxFunctionObj<string>;
    pending(index_0: string): ContractTxFunctionObj<BigNumber>;
    proxies(index_0: string): ContractTxFunctionObj<string>;
    registerProxy(): ContractTxFunctionObj<string>;
    registerProxyFor(user: string): ContractTxFunctionObj<string>;
    registerProxyOverride(): ContractTxFunctionObj<string>;
    renounceOwnership(): ContractTxFunctionObj<void>;
    revokeAuthentication(addr: string): ContractTxFunctionObj<void>;
    startGrantAuthentication(addr: string): ContractTxFunctionObj<void>;
    transferAccessTo(from: string, to: string): ContractTxFunctionObj<void>;
    transferOwnership(newOwner: string): ContractTxFunctionObj<void>;
    grantInitialAuthentication(authAddress: string): ContractTxFunctionObj<void>;
    /**
     * Subscribe to an event type emitted by the WyvernRegistry contract.
     * @param eventName The WyvernRegistry contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    subscribe<ArgsType extends WyvernRegistryEventArgs>(eventName: WyvernRegistryEvents, indexFilterValues: IndexedFilterValues, callback: EventCallback<ArgsType>, isVerbose?: boolean, blockPollingIntervalMs?: number): string;
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
     * @param eventName The WyvernRegistry contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    getLogsAsync<ArgsType extends WyvernRegistryEventArgs>(eventName: WyvernRegistryEvents, blockRange: BlockRange, indexFilterValues: IndexedFilterValues): Promise<Array<LogWithDecodedArgs<ArgsType>>>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
