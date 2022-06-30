function createAccount(pin, amount = 0) {
    if(!pin) {
        return "PIN required"
    }
    return {
        checkBalance(inputPin) {
            if(inputPin === accPin) {
                return  `Current account balance is ${amount}`
            }
    
            return "Invalid PIN"
        },
        deposit(inputPin, depositAmount) {
            if(inputPin === accPin) {
                amount += depositAmount
                return `Successfully deposited ${depositAmount}. Current balance: ${amount}.`
            }
            return `Invalid PIN`
        },
        withdraw(inputPin, withdrawAmount) {
            if(inputPin === pin) {
                if(withdrawAmount < amount) {
                    amount -= withdrawAmount
                    return  `Successfully withdrew ${withdrawAmount}. Current balance: ${amount}.`
                }
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            return "Invalid PIN"
        },
        changePin(confPin, newPin) {
            if(confPin === pin) {
                pin = newPin
                return "PIN successfully changed!"
            }
            return "Invalid PIN"
        }
    }
}

module.exports = { createAccount };