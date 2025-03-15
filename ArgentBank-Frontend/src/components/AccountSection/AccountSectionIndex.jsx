
import Account from '../Account/AccountIndex'
import '../../styles/main.css'

/**
 * Composant AccountSection - Contient la liste des comptes utilisateur
 */


const AccountSection = () => {

  // Ces données viendront de Redux plus tard
  const accounts = [
    {
      title: "Argent Bank Checking",
      accountNumber: "x8349",
      amount: "$2,082.79",
      description: "Available Balance"
    },
    {
      title: "Argent Bank Savings",
      accountNumber: "x6712",
      amount: "$10,928.42",
      description: "Available Balance"
    },
    {
      title: "Argent Bank Credit Card",
      accountNumber: "x8349",
      amount: "$184.30",
      description: "Current Balance"
    }
  ]

  return (
    <div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <Account
          key={`account-${index}`}
        //   title={account.title}
        //   accountNumber={account.accountNumber}
        //   amount={account.amount}
        //   description={account.description}
        {...account}
        />
      ))}
    </div>
  )
}

export default AccountSection