function Transactions({ transactions }) {

  return (
    <div>
      {transactions.map((transaction) =>{
        let grandPoints = 0;
        return (
          <div>
            <h2>{transaction.name}</h2>

            {transaction.data.map(({ amounts, month }) =>{
              console.log(transaction)
              const monthlySum = amounts.reduce((sum, x) => sum + x)
              const pointsEarned = monthlySum * 2;
              const bonusPoints = Math.floor(monthlySum / 50);
              const totalPoints = pointsEarned + bonusPoints;
              grandPoints+= totalPoints;
              return (
             <div>
               <h4>{month}</h4>
               <p>Total amount : ${monthlySum}</p>
               <p>Total points : {totalPoints}</p>
             </div>
              )
            })}

            <p><b>Grand total points: {grandPoints}</b></p>
          </div>
        )})}
    </div>

  )
}

export default  Transactions;