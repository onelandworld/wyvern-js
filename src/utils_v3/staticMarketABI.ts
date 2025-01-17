export const staticMarketABI = [
    {
        'inputs': [],
        'stateMutability': 'nonpayable',
        'type': 'constructor',
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
        'name': 'anyERC1155ForERC20',
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
        'name': 'anyERC20ForERC1155',
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
        'name': 'anyERC20ForERC20',
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
        'name': 'ERC721ForERC20',
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
        'name': 'ERC20ForERC721',
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
];
// tslint:disable:max-file-line-count