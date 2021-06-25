import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_l">
                <h2 className="footer_l1">
                What are the fastest growing companies doing?
                </h2>
                <div className="footer_l2">
                    <p className="footer_l21">83 of the fastest growing companies that also have the most revenue have a clear expansion revenue strategy. On average, sales reps are selling plans where starting contract value is $4,606.</p>
                    <p className="footer_l22">Those same companies employ 1,678 sales reps that carry a quota. The most common compensation plan used by these companies is a 1:5 ratio of sales rep on target earnings (OTE) to quota. Meaning if a rep can earn $200k in base and commissions, quota target for that year is set at 5x, or $1m in new ARR closed.</p>
                    <p className="footer_l23">If you’re going to build a high growth SaaS company, you need to figure out how to scale with quota carrying sales reps.</p>
                </div>
            </div>
            

            <div className="footer_r">
                <h2 className="footer_r1">
                Which CEO’s are the most efficient capital allocators?
                </h2>
                <div className="footer_r2">
                    <p className="footer_r21">We can measure this a variety of ways. Which company has the most revenue per employee? What about dollars in revenue compared to dollars raised? What about time, which founder went from $0 to $10m the fastest?</p>
                    <p className="footer_r22">Looking deeper at dollars in revenue compared to dollars raised, bootstrappers take the cake because they self fund (denominator zero). When we look at companies that have raised at least $1m, Actito is the clear winner generating $21m in revenue, growing 100% yoy, on just 1m raised ($.05 dollars raised for every $1 of revenue).</p>
                    <p className="footer_r23">Omnisend comes in a close second with $.08 dollars raised for every dollar of revenue. Doing $19m as of December 2020. Proposify gets honorable mention with $0.46 dollars raised (3.25m) for every dollar of revenue ($7m).</p>
                    <p className="footer_r23">The worst performers here are companies like YayPay with $3.68 dollars raised ($14m) per dollar of revenue ($3.8m). Many of the worst performers just did a round of funding and haven’t had a chance to deploy to drive growth yet. That makes this data less valuable but still illustrative.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
