import Account from "../Account/AccountIndex";
import { AccountData } from "../../assets/Data/AccountData"; // importer les data de account depuis le dossier Data en attendant que les données viennent de l'api
import style from "./AccountSection.module.css";
import PropTypes from "prop-types";

import { useState } from "react";

import Transaction from "../Transactions/TransactionIndex";
import { transactionsData } from "../../assets/Data/TransactionsData";
/**
 * Composant AccountSection - Container liste des comptes
 * @param {Object} props
 * @param {Array} props.accounts - Liste des comptes
 */

const AccountSection = () => {
  // pour suivre quel compte affiche les transactions
  const [activeAccountIndex, setActiveAccountIndex] = useState(null);

  const handleTransactionView = (index, isShowing) => {
    // met à jour l'index du compte actif
    setActiveAccountIndex(isShowing ? index : null);
  };
  
  return (
    <div className={style.accountSection}>
      <h2 className="sr-only">Accounts</h2>

      {AccountData.map((account, index) => (
        <div
          key={`account-container-${index}`}
          className={
            activeAccountIndex !== null && activeAccountIndex !== index
              ? style.hidden
              : ""
          }
        >
          <Account
            key={`account-${index}`}
            {...account}
            isActive={activeAccountIndex === index}
            onTransactionView={(isShowing) =>
              handleTransactionView(index, isShowing)
            }
          />
        </div>
      ))}

      {activeAccountIndex !== null && (
        <Transaction
          transaction={transactionsData}
          onClose={() => handleTransactionView(activeAccountIndex, false)}
        />
      )}
    </div>
  );
};

AccountSection.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default AccountSection;
