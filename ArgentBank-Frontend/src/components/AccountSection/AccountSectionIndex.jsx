
import Account from '../Account/AccountIndex'
import '../../styles/main.css'

/**
 * Composant AccountSection - Container liste de comptes
 */


const AccountSection = () => {

  // Données à remplacer par redux ensuite (vérifier si il y a ses données dans l'api avec l'endpoint /api/v1/accounts ou /api/v1/transactions ou les créer avec l'endpoint /api/v1/accounts)
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
// Faire un map sur les données récupérées avec  redux depuis l'api, pour l'instant gardé ces données ci-dessus (elles ne sont pas dans l'API je dois créer les routes .. en deuxième partie du projet)
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