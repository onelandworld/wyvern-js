export const authenticatedProxyABI = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'sender',
                'type': 'address',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256',
            },
        ],
        'name': 'ReceivedEther',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'from',
                'type': 'address',
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'value',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'token',
                'type': 'address',
            },
            {
                'indexed': false,
                'internalType': 'bytes',
                'name': 'extraData',
                'type': 'bytes',
            },
        ],
        'name': 'ReceivedTokens',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'bool',
                'name': 'revoked',
                'type': 'bool',
            },
        ],
        'name': 'Revoked',
        'type': 'event',
    },
    {
        'stateMutability': 'payable',
        'type': 'fallback',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'from',
                'type': 'address',
            },
            {
                'internalType': 'uint256',
                'name': 'value',
                'type': 'uint256',
            },
            {
                'internalType': 'address',
                'name': 'token',
                'type': 'address',
            },
            {
                'internalType': 'bytes',
                'name': 'extraData',
                'type': 'bytes',
            },
        ],
        'name': 'receiveApproval',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'registry',
        'outputs': [
            {
                'internalType': 'contract ProxyRegistry',
                'name': '',
                'type': 'address',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'revoked',
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
        'name': 'upgradeabilityOwner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'user',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address',
            },
        ],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'addrUser',
                'type': 'address',
            },
            {
                'internalType': 'contract ProxyRegistry',
                'name': 'addrRegistry',
                'type': 'address',
            },
        ],
        'name': 'initialize',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bool',
                'name': 'revoke',
                'type': 'bool',
            },
        ],
        'name': 'setRevoke',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'dest',
                'type': 'address',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
        ],
        'name': 'proxy',
        'outputs': [
            {
                'internalType': 'bool',
                'name': 'result',
                'type': 'bool',
            },
        ],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'dest',
                'type': 'address',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
        ],
        'name': 'proxyAssert',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
];
// tslint:disable:max-file-line-count