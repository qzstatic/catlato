const Fields = [
    'combo_deposit',
    'credit_card',
    'credit_rate',
    'daily_profit',
    'gas_mobile',
    'gas_premium',
    'gasprom_plus',
    'gorod_pay',
    'card_mir'
    // 'empty'
]

const BlackFields = [
    'combo_deposit_black',
    'credit_card_black',
    'credit_rate_black',
    'daily_profit_black',
    'gas_mobile_black',
    'gas_premium_black',
    'gasprom_plus_black',
    'gorod_pay_black'
]

const Labels = {
    'combo_deposit': "Комбо-вклад",
    'credit_card': "СreditСard",
    'credit_rate': "СreditRate",
    'daily_profit': "Daily выгода",
    'gas_mobile': "ГазМобайл",
    'gas_premium': "ГазПремиум",
    'gasprom_plus': "Газпром+",
    'gorod_pay':  "GorodPay",
    'card_mir': "КартаМир"
}

const Icons = {
    'combo_deposit': require('../assets/field_icons/combo_deposit.png'),
    'credit_card': require('../assets/field_icons/credit_card.png'),
    'credit_rate': require('../assets/field_icons/credit_rate.png'),
    'daily_profit': require('../assets/field_icons/daily_profit.png'),
    'gas_mobile': require('../assets/field_icons/gas_mobile.png'),
    'gas_premium': require('../assets/field_icons/gas_premium.png'),
    'gasprom_plus': require('../assets/field_icons/gasprom_plus.png'),
    'gorod_pay':  require('../assets/field_icons/gorod_pay.png'),
    'card_mir':  require('../assets/field_icons/card_mir.png'),
}

const BlackIcons = {
    'combo_deposit': require('../assets/field_icons/combo_deposit_black.png'),
    'credit_card': require('../assets/field_icons/credit_card_black.png'),
    'credit_rate': require('../assets/field_icons/credit_rate_black.png'),
    'daily_profit': require('../assets/field_icons/daily_profit_black.png'),
    'gas_mobile': require('../assets/field_icons/gas_mobile_black.png'),
    'gas_premium': require('../assets/field_icons/gas_premium_black.png'),
    'gasprom_plus': require('../assets/field_icons/gasprom_plus_black.png'),
    'gorod_pay':  require('../assets/field_icons/gorod_pay_black.png'),
    'card_mir':  require('../assets/field_icons/card_mir_black.png'),
}
export {Fields, BlackFields, Icons, BlackIcons, Labels};