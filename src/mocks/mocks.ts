export const directions = [
  {
    code: 'BTC',
    name: 'Bitcoin BTC ',
  },
  {
    code: 'ETH',
    name: 'Ethereum ETH ',
  },
  {
    code: 'CASHUSD',
    name: 'Наличные USD ',
  },
  {
    code: 'CASHRUB',
    name: 'Наличные RUB ',
  },
  {
    code: 'ACRUB',
    name: 'Альфа-банк RUB ',
  },
  {
    code: 'SBERRUB',
    name: 'Сбербанк RUB ',
  },
  {
    code: 'TCSBRUB',
    name: 'Тинькофф RUB ',
  },
  {
    code: 'USDTTRC',
    name: 'Tether TRC20 USDT ',
  },
];

export const filters = [
  {
    from: {
      code: 'BTC',
      name: 'Bitcoin BTC ',
    },
    to: [
      {
        code: 'CASHRUB',
        name: ' Наличные RUB',
      },
      {
        code: 'CASHUSD',
        name: ' Наличные USD',
      },
      {
        code: 'SBERRUB',
        name: ' Сбербанк RUB',
      },
      {
        code: 'ACRUB',
        name: ' Альфа-банк RUB',
      },
      {
        code: 'TCSBRUB',
        name: ' Тинькофф RUB',
      },
      {
        code: 'USDTTRC',
        name: ' Tether TRC-20 USDTTRC',
      },
    ],
  },
  {
    from: {
      code: 'ETH',
      name: 'Ethereum ETH ',
    },
    to: [
      {
        code: 'CASHUSD',
        name: ' Наличные USD',
      },
      {
        code: 'CASHRUB',
        name: ' Наличные RUB',
      },
      {
        code: 'SBERRUB',
        name: ' Сбербанк RUB',
      },
      {
        code: 'ACRUB',
        name: ' Альфа-банк RUB',
      },
      {
        code: 'TCSBRUB',
        name: ' Тинькофф RUB',
      },
    ],
  },
  {
    from: {
      code: 'CASHUSD',
      name: 'Наличные USD ',
    },
    to: [
      {
        code: 'BTC',
        name: ' Bitcoin BTC',
      },
      {
        code: 'ETH',
        name: ' Ethereum ETH',
      },
      {
        code: 'USDTTRC',
        name: ' Tether TRC20 USDT',
      },
    ],
  },
  {
    from: {
      code: 'CASHRUB',
      name: 'Наличные RUB ',
    },
    to: [
      {
        code: 'BTC',
        name: ' Bitcoin BTC',
      },
      {
        code: 'ETH',
        name: ' Ethereum ETH',
      },
      {
        code: 'USDTTRC',
        name: ' Tether TRC20 USDT',
      },
    ],
  },
  {
    from: {
      code: 'ACRUB',
      name: 'Альфа-банк RUB ',
    },
    to: [
      {
        code: 'BTC',
        name: ' Bitcoin BTC',
      },
      {
        code: 'ETH',
        name: ' Ethereum ETH',
      },
      {
        code: 'USDTTRC',
        name: ' Tether TRC20 USDT',
      },
    ],
  },
  {
    from: {
      code: 'SBERRUB',
      name: 'Сбербанк RUB ',
    },
    to: [
      {
        code: 'BTC',
        name: ' Bitcoin BTC',
      },
      {
        code: 'ETH',
        name: ' Ethereum ETH',
      },
      {
        code: 'USDTTRC',
        name: ' Tether TRC20 USDT',
      },
      {
        code: 'PMUSD',
        name: ' PerfectMoney USD',
      },
      {
        code: 'TRX',
        name: ' TRON TRX',
      },
      {
        code: 'P24UAH',
        name: ' Приват24 UAH',
      },
      {
        code: 'MONOBUAH',
        name: ' Монобанк UAH',
      },
      {
        code: 'CARDUAH',
        name: ' Visa/Mastercard UAH',
      },
    ],
  },
  {
    from: {
      code: 'TCSBRUB',
      name: 'Тинькофф RUB ',
    },
    to: [
      {
        code: 'BTC',
        name: ' Bitcoin BTC',
      },
      {
        code: 'ETH',
        name: ' Ethereum ETH',
      },
      {
        code: 'USDTTRC',
        name: ' Tether TRC20 USDT',
      },
      {
        code: 'PMUSD',
        name: ' PerfectMoney USD',
      },
      {
        code: 'TRX',
        name: ' TRON TRX',
      },
      {
        code: 'P24UAH',
        name: ' Приват24 UAH',
      },
      {
        code: 'MONOBUAH',
        name: ' Монобанк UAH',
      },
    ],
  },
  {
    from: {
      code: 'USDTTRC',
      name: 'Tether TRC20 USDT ',
    },
    to: [
      {
        code: 'ACRUB',
        name: ' Альфа RUB',
      },
      {
        code: 'TCSBRUB',
        name: ' Тинькофф RUB',
      },
      {
        code: 'SBERRUB',
        name: ' Сбербанк RUB',
      },
      {
        code: 'CARDRUB',
        name: ' Visa/Mastercard RUB',
      },
      {
        code: 'QWRUB',
        name: ' Qiwi RUB',
      },
      {
        code: 'CASHRUB',
        name: ' Наличные RUB',
      },
      {
        code: 'CASHUSD',
        name: ' Наличные USD',
      },
      {
        code: 'CARDUAH',
        name: ' Visa/Mastercard UAH',
      },
      {
        code: 'MONOBUAH',
        name: ' Монобанк UAH',
      },
      {
        code: 'WIREUAH',
        name: ' Любой банк UAH',
      },
      {
        code: 'OSDBUAH',
        name: ' Ощадбанк UAH',
      },
      {
        code: 'P24UAH',
        name: ' Приват24 UAH',
      },
      {
        code: 'BTC',
        name: ' Bitcoin BTC',
      },
      {
        code: 'CASHAED',
        name: ' Наличные AED',
      },
      {
        code: 'CNTRUB',
        name: ' Qiwi Contact RUB',
      },
    ],
  },
];
