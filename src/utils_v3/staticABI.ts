export const staticABI = [
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'atomicizerAddress',
                'type': 'address',
            },
        ],
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'and',
        'outputs': [],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': '',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': '',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': '',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
        ],
        'name': 'any',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': '',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': '',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
        ],
        'name': 'anyAddOne',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': '',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': '',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': '',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
        ],
        'name': 'anyNoFill',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': '',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': '',
                'type': 'uint8',
            },
            {
                'internalType': 'uint256[6]',
                'name': '',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
        ],
        'name': 'anySingle',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'atomicizer',
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
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'cdata',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes',
            },
        ],
        'name': 'dumbSequenceExact',
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
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'or',
        'outputs': [],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'cdata',
                'type': 'bytes',
            },
        ],
        'name': 'sequenceAnyAfter',
        'outputs': [],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'cdata',
                'type': 'bytes',
            },
        ],
        'name': 'sequenceExact',
        'outputs': [],
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'split',
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
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'splitAddOne',
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
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'swapExact',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'swapForever',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'swapOneForOneERC1155',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'swapOneForOneERC1155Decoding',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'swapOneForOneERC721',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall[2]',
                'name': 'howToCalls',
                'type': 'uint8[2]',
            },
            {
                'internalType': 'uint256[6]',
                'name': 'uints',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
            {
                'internalType': 'bytes',
                'name': 'counterdata',
                'type': 'bytes',
            },
        ],
        'name': 'swapOneForOneERC721Decoding',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256',
            },
        ],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'internalType': 'uint256[6]',
                'name': '',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
        ],
        'name': 'transferERC1155Exact',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'internalType': 'uint256[6]',
                'name': '',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
        ],
        'name': 'transferERC20Exact',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'extra',
                'type': 'bytes',
            },
            {
                'internalType': 'address[7]',
                'name': 'addresses',
                'type': 'address[7]',
            },
            {
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'internalType': 'uint256[6]',
                'name': '',
                'type': 'uint256[6]',
            },
            {
                'internalType': 'bytes',
                'name': 'data',
                'type': 'bytes',
            },
        ],
        'name': 'transferERC721Exact',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'inputs': [],
        'name': 'test',
        'outputs': [],
        'stateMutability': 'pure',
        'type': 'function',
    },
];
// tslint:disable:max-file-line-count