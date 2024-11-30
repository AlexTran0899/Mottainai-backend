const jwt = require( 'jsonwebtoken')
const {JWT_SECRET} = require('./secret')

function tokenBuilderMerchant(merchant){
    const payload = {
        merchant_id: merchant.merchant_id,
        email: merchant.email,
    };
    const options = {
        expiresIn: '1d',
    }
    const token = jwt.sign(
        payload,
        JWT_SECRET,
        options
    )
    return token;
}

module.exports = {
    tokenBuilderMerchant
}