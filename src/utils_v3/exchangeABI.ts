export const exchangeABI = [
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'chainId',
                'type': 'uint256',
            },
            {
                'internalType': 'address[]',
                'name': 'registryAddrs',
                'type': 'address[]',
            },
            {
                'internalType': 'bytes',
                'name': 'customPersonalSignPrefix',
                'type': 'bytes',
            },
        ],
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'registry',
                'type': 'address',
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'maker',
                'type': 'address',
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'staticTarget',
                'type': 'address',
            },
            {
                'indexed': false,
                'internalType': 'bytes4',
                'name': 'staticSelector',
                'type': 'bytes4',
            },
            {
                'indexed': false,
                'internalType': 'bytes',
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'maximumFill',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'expirationTime',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'salt',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'internalType': 'bool',
                'name': 'orderbookInclusionDesired',
                'type': 'bool',
            },
        ],
        'name': 'OrderApproved',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'maker',
                'type': 'address',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'newFill',
                'type': 'uint256',
            },
        ],
        'name': 'OrderFillChanged',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'bytes32',
                'name': 'firstHash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'internalType': 'bytes32',
                'name': 'secondHash',
                'type': 'bytes32',
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'firstMaker',
                'type': 'address',
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'secondMaker',
                'type': 'address',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'newFirstFill',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'newSecondFill',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'internalType': 'bytes32',
                'name': 'metadata',
                'type': 'bytes32',
            },
        ],
        'name': 'OrdersMatched',
        'type': 'event',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32',
            },
        ],
        'name': 'approveOrderHash_',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'registry',
                'type': 'address',
            },
            {
                'internalType': 'address',
                'name': 'maker',
                'type': 'address',
            },
            {
                'internalType': 'address',
                'name': 'staticTarget',
                'type': 'address',
            },
            {
                'internalType': 'bytes4',
                'name': 'staticSelector',
                'type': 'bytes4',
            },
            {
                'internalType': 'bytes',
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'internalType': 'uint256',
                'name': 'maximumFill',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'expirationTime',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'salt',
                'type': 'uint256',
            },
            {
                'internalType': 'bool',
                'name': 'orderbookInclusionDesired',
                'type': 'bool',
            },
        ],
        'name': 'approveOrder_',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address',
            },
            {
                'internalType': 'bytes32',
                'name': '',
                'type': 'bytes32',
            },
        ],
        'name': 'approved',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'uint256[16]',
                'name': 'uints',
                'type': 'uint256[16]',
            },
            {
                'internalType': 'bytes4[2]',
                'name': 'staticSelectors',
                'type': 'bytes4[2]',
            },
            {
                'internalType': 'bytes',
                'name': 'firstExtradata',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'firstCalldata',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'secondExtradata',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'secondCalldata',
                'type': 'bytes',
            },
            {
                'internalType': 'uint8[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'bytes32',
                'name': 'metadata',
                'type': 'bytes32',
            },
            {
                'internalType': 'bytes',
                'name': 'signatures',
                'type': 'bytes',
            },
        ],
        'name': 'atomicMatch_',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'codename',
        'outputs': [
            {
                'internalType': 'string',
                'name': '',
                'type': 'string',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address',
            },
            {
                'internalType': 'bytes32',
                'name': '',
                'type': 'bytes32',
            },
        ],
        'name': 'fills',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'registry',
                'type': 'address',
            },
            {
                'internalType': 'address',
                'name': 'maker',
                'type': 'address',
            },
            {
                'internalType': 'address',
                'name': 'staticTarget',
                'type': 'address',
            },
            {
                'internalType': 'bytes4',
                'name': 'staticSelector',
                'type': 'bytes4',
            },
            {
                'internalType': 'bytes',
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'internalType': 'uint256',
                'name': 'maximumFill',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'expirationTime',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'salt',
                'type': 'uint256',
            },
        ],
        'name': 'hashOrder_',
        'outputs': [
            {
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'orderHash',
                'type': 'bytes32',
            },
        ],
        'name': 'hashToSign_',
        'outputs': [
            {
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'internalType': 'string',
                'name': '',
                'type': 'string',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'registries',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'internalType': 'uint256',
                'name': 'fill',
                'type': 'uint256',
            },
        ],
        'name': 'setOrderFill_',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'internalType': 'address',
                'name': 'maker',
                'type': 'address',
            },
            {
                'internalType': 'bytes',
                'name': 'signature',
                'type': 'bytes',
            },
        ],
        'name': 'validateOrderAuthorization_',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'registry',
                'type': 'address',
            },
            {
                'internalType': 'address',
                'name': 'maker',
                'type': 'address',
            },
            {
                'internalType': 'address',
                'name': 'staticTarget',
                'type': 'address',
            },
            {
                'internalType': 'bytes4',
                'name': 'staticSelector',
                'type': 'bytes4',
            },
            {
                'internalType': 'bytes',
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'internalType': 'uint256',
                'name': 'maximumFill',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'expirationTime',
                'type': 'uint256',
            },
            {
                'internalType': 'uint256',
                'name': 'salt',
                'type': 'uint256',
            },
        ],
        'name': 'validateOrderParameters_',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'version',
        'outputs': [
            {
                'internalType': 'string',
                'name': '',
                'type': 'string',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
];
// tslint:disable:max-file-line-count