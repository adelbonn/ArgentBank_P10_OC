
import Account from '../Account/AccountIndex'
import '../../styles/main.css'

/**
 * Composant AccountSection - Container liste de comptes
 */


const AccountSection = () => {

  // Données à remplacer par redux ensuite
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
// Faire un map sur les données recpérées depuis redux
  return (
    <div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <Account
          key={`account-${index}`}
        {...account}
        />
      ))}
    </div>
  )
}

export default AccountSection