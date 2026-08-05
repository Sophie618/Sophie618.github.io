---
layout: post
title: "How Can a Market Perform Multiplication?"
author: Yifei Wang
lang: en
translation_url: /blog/2026/leontief-market-circuit/
permalink: /blog/2026/leontief-market-circuit/en/
date: 2026-08-01
description: "How fixed-proportion preferences turn a Leontief exchange market into an arithmetic circuit."
tags:
  - algorithmic-game-theory
  - market-equilibrium
  - computational-complexity
categories:
  - research-notes
sophie_post: false
toc:
  sidebar: left
citation: true
giscus_comments: true
related_posts: false
---

Suppose three goods have prices $p_a,p_b,p_c$. Can a market with no central controller force them to satisfy

$$
p_a=p_bp_c?
$$

At first glance, a market contains only people, goods, budgets, and trades—not a multiplier. Each person decides independently what to buy, and prices reach equilibrium only when every good is exactly sold. Yet Garg, Mehta, Vazirani, and Yazdanbod proved that, when designed appropriately, an exchange market can indeed enforce the multiplication relation above.

The agents in this market have a very simple kind of preference: goods must be combined in fixed proportions. One unit of one good may have to be paired with two units of another; buying more of only one is useless. Economists call this Leontief utility.

What I find genuinely interesting is the mechanism. Fixed-proportion preferences, budgets, and market clearing together allow prices to perform addition and multiplication. Once these two operations are available, an entire system of polynomial equations can be compiled into a market.

This article follows just one thread in the paper: how, exactly, does a market learn to multiply?

## 1. The Smallest Market Model We Need

An exchange market has a set of divisible goods and a set of agents—participants that may represent consumers, households, firms, countries, or abstract nodes in an algorithm. Agent $i$ initially owns $W_{ij}$ units of good $j$. If good $j$ has price $p_j$, selling this initial endowment gives the agent income

$$
\sum_jW_{ij}p_j.
$$

No extra money enters the market. Whatever an agent buys must be paid for by selling the goods she brought with her.

A Leontief agent requires goods in fixed proportions. Let $A_{ij}$ denote agent $i$'s required proportion of good $j$. Her utility for bundle $x_i$ is

$$
U_i(x_i)=\min_{j:A_{ij}>0}\frac{x_{ij}}{A_{ij}}.
$$

In plain language, to obtain $β_i$ units of utility, she needs

$$
x_{ij}=\beta_iA_{ij}
$$

units of every required good. Extra units of just one good do not raise the minimum, so an optimal bundle preserves the prescribed proportions.

Assuming that more complete bundles are always preferred, the agent spends all her income:

$$
\beta_i\sum_jA_{ij}p_j=\sum_jW_{ij}p_j.
$$

Therefore,

$$
\boxed{
\beta_i=
\frac{\sum_jW_{ij}p_j}
     {\sum_jA_{ij}p_j}
}.
$$

This ratio is where nonlinearity enters. Its numerator and denominator are each linear functions of prices, but market clearing forces several such ratios to agree with one another.

## 2. Prices Have No Absolute Scale

Before building a multiplication gadget, we must handle a basic issue. If $p$ is a vector of equilibrium prices, then for every $t>0$, $tp$ represents exactly the same relative prices.

Multiplying every price by ten also multiplies every agent's income and purchasing cost by ten. Actual choices in the market do not change.

But

$$
p_a=p_bp_c
$$

does not have this symmetry. Replacing $p$ by $tp$ changes the left-hand side to $tp_a$, but the right-hand side to $t^2p_bp_c$.

The paper introduces a special good $G_s$ and rewrites the multiplication relation as

$$
\boxed{p_a=\frac{p_bp_c}{p_s}}.
$$

Now both sides scale by $t$. Another agent in the construction guarantees $p_s>0$, after which prices can be normalized so that $p_s=1$.

This is not cosmetic notation. Any equation implemented through prices must remain valid under a common rescaling of all prices.

## 3. Why Local Gadgets Cannot Simply Be Joined

Suppose we have designed a small group of agents whose trades enforce a price equation. A polynomial system needs many such groups, and the same variable often appears in several equations.

The corresponding good must therefore be shared by several gadgets. This creates a problem: surplus goods from one gadget may flow into another and be consumed by outside agents. A proof based only on local supply and demand then fails.

The paper solves this with a **closed submarket**. A submarket is closed if, at every equilibrium of the full market, the total demand of its internal agents exactly equals their total endowment.

It may still share goods—and hence their prices—with the outside world, but it creates neither net supply nor net demand externally. In other words, a gadget may read external prices and constrain their relationships, but it cannot exchange a net flow of goods with neighboring gadgets.

## 4. Forcing Two Prices to Be Equal

First the conclusion: the smallest useful gadget can implement

$$
p_a=p_b.
$$

It contains three goods $G_a,G_b,G_r$, where $G_r$ is private to this gadget, and two agents:

$$
\begin{aligned}
A_1:\quad&W_1=(0,1,1),
&U_1(x)=\min\{x_a,x_r\},\\
A_2:\quad&W_2=(1,0,1),
&U_2(x)=\min\{x_b,x_r\}.
\end{aligned}
$$

Agent $A_1$ owns one unit each of $G_b$ and $G_r$. She wants to buy $G_a,G_r$ in a $1:1$ ratio. If her utility is $α$, exhausting her budget gives

$$
p_b+p_r=\alpha(p_a+p_r).
$$

The situation for $A_2$ is symmetric. If her utility is $β$, then

$$
p_a+p_r=\beta(p_b+p_r).
$$

Multiplying the two equations yields

$$
\alpha\beta=1.
$$

The total supply of private good $G_r$ is $2$. The two agents require $α$ and $β$ units respectively, so

$$
\alpha+\beta\le2.
$$

By the arithmetic–geometric mean inequality,

$$
\alpha+\beta\ge2\sqrt{\alpha\beta}=2.
$$

Both inequalities can hold only at equality, hence

$$
\alpha=\beta=1.
$$

Substituting this into either budget equation gives

$$
p_a+p_r=p_b+p_r,
$$

and therefore

$$
\boxed{p_a=p_b}.
$$

No agent directly compares $p_a$ with $p_b$. Budget balance supplies a product constraint on utility; the limited supply of the private good supplies a sum constraint. Together they force the prices to be equal.

$G_r$ also seals the gadget. At equilibrium, the two agents consume its entire supply, while trades in $G_a,G_b$ balance locally as well.

## 5. Turning Prices into Quantities

Return now to multiplication. Following the simplifying conditions used in the paper's explanation of the gadget, assume first that $p_s=1$ and $p_b>0$.

On the demand side, suppose an agent owns one unit of good $a$, priced at $p_a$. Selling it gives her budget

$$
1\times p_a=p_a.
$$

She spends all of this income on a good whose unit price is $p_b$. Quantity purchased is budget divided by unit price:

$$
\text{quantity demanded}
=\frac{\text{total budget}}{\text{unit price}}
=\frac{p_a}{p_b}.
$$

Thus $p_a/p_b$ is not a price here, but a quantity the agent can buy.

Now consider the supply side. A natural question is how $p_c$, originally a price, can become a quantity.

Numerically, selling one unit of a good priced at $p_c$ produces a budget of $p_c$. Facing a unit-priced good, this budget purchases

$$
\frac{p_c}{1}=p_c
$$

units. This only shows that a price value and a quantity value can coincide; it does not yet create net supply. The paper's **converter** completes the second step through a residual quantity.

Consider a general $\operatorname{Conv}(q)$ involving three goods with prices

$$
p_1=p,\qquad p_2=q,\qquad p_3=Hq-p,
$$

where $H$ is a sufficiently large constant ensuring $Hq-p\ge0$. Linear submarkets in the paper enforce these price relations; here we treat them as the converter's interface conditions.

Agent $A_1$ owns $H$ units of $G_2$ and thus has income $Hq$. She requires $G_1,G_3$ in a $1:1$ ratio. One unit of each costs

$$
p+(Hq-p)=Hq,
$$

so she buys one unit of each.

Agent $A_2$ owns one unit of $G_3$ and wants only $G_2$. After selling $G_3$, she buys

$$
\frac{Hq-p}{q}=H-\frac{p}{q}
$$

units of $G_2$.

The market initially contains $H$ units of $G_2$. Once $H-p/q$ units are consumed internally, exactly

$$
H-\left(H-\frac{p}{q}\right)=\frac{p}{q}
$$

units remain. The converter's net effect is therefore to consume one unit of $G_1$ priced at $p$ and leave $p/q$ units of $G_2$ priced at $q$.

Input and output have equal value:

$$
1\times p=\frac{p}{q}\times q.
$$

Setting $p=p_c,q=1$ makes the net output $p_c$ units. Only now have we truly completed the conversion

$$
\text{price }p_c\quad\longrightarrow\quad\text{supply quantity }p_c.
$$

Temporarily fold away the gadget's internal wiring and look only at the two quantities exposed to the clearing condition:

| Side | Origin of quantity | Quantity |
|---|---|---:|
| Demand | Use a budget of $p_a$ to buy a good priced at $p_b$ | $p_a/p_b$ |
| Supply | Convert price $p_c$ into a quantity of a unit-priced good | $p_c$ |

The full gadget uses a combiner and a splitter to connect both flows to the same “flow slot.” They do not simply pretend that two different goods are identical; value-preserving internal goods transmit the same quantity one stage at a time.

Market clearing equates inflow and outflow at this slot:

$$
\underbrace{\frac{p_a}{p_b}}_{\text{demand generated by the budget}}
=
\underbrace{p_c}_{\text{quantity generated by the converter}}.
$$

Multiplying by $p_b$ gives $p_a=p_bp_c$.

For example, if $p_a=6,p_b=2,p_c=3$, the demand side wants $6/2=3$ units and the other side supplies $3$, so the market can clear. If $p_c=4$, one side supplies four units while the other accepts only three. One unit remains, so these cannot be equilibrium prices; prices must adjust until $p_a/p_b=p_c$.

**The paper builds three components from Leontief agents and linear-relation submarkets:**
> - A converter consumes one unit of a good priced at $p$ and leaves $p/q$ units of a good priced at $q$.
> - A combiner receives $\ell$ units each of two goods priced at $p_a,p_b$ and leaves $\ell$ units of a good priced at $p_a+p_b$.
> - A splitter performs the reverse value-preserving operation.

“Input” and “output” are only bookkeeping terms. These components remain exchange markets and create no value from nothing: each component's net endowment value equals its net consumption value.

## 6. The Multiplication Gadget

The complete gadget uses two converters, one combiner, one splitter, two additional agents, and several private goods. The table in the paper looks complicated, but the movement of quantities is straightforward.

The first converter, $\operatorname{Conv}(1)$, consumes one unit of a good priced at $p_c$ and leaves

$$
p_c
$$

units of a unit-priced good. Price has become an actual quantity.

The second converter consumes one unit of a good priced at $p_a$ and leaves

$$
\frac{p_a}{p_b}
$$

units of a good priced at $p_b$.

The combiner must merge the two flows at the same rate. Their rates are $p_c$ and $p_a/p_b$. Both can clear simultaneously only if

$$
\frac{p_a}{p_b}=p_c.
$$

The splitter then sends the combined flow into two output branches. One agent uses income $p_c$ to buy a unit-priced good; another uses income $p_a$ to buy a good priced at $p_b$. The same equation closes both branches. This is precisely the desired multiplication relation.

The entire gadget relies on the most ordinary accounting identity:

$$
\text{value}=\text{price}\times\text{quantity}.
$$

One converter turns $p_c$ into a quantity; the other turns the price ratio $p_a/p_b$ into a quantity. Market clearing makes those quantities equal.

Closedness allows the gadget to be reused. Private goods absorb internal flows; externally meaningful goods communicate information only through prices.

## 7. From One Multiplication to an Entire System

The reduction starts with a system of polynomial equations over a closed and bounded domain of nonnegative variables. The paper rewrites the equations using two primitive forms:

$$
z_a=Bz_b+Cz_c+D
$$

and

$$
z_a=z_bz_c.
$$

Longer sums, powers, and negative coefficients can be handled with auxiliary variables. The special price $p_s$ ensures that every price equation is invariant under scaling.

For each variable $z_j$, the construction creates a good $G_j$ and represents the value of $z_j$ by the normalized price $p_j/p_s$.

For each primitive equation, it adds a closed submarket implementing the corresponding linear or multiplicative relation. Because every gadget is closed, several equations can safely share the same price variable.

The construction must prove both directions:

1. Every market-equilibrium price vector yields a solution to the original polynomial system.
2. Every solution of the polynomial system can be extended to an equilibrium of the constructed market.

The projected equilibrium prices therefore correspond exactly to the solutions of the polynomial system.

## 8. Why Does Nash Equilibrium Appear Here?

A three-player game can also be expressed as a system of polynomial equations. Let $z_{ps}$ be the probability that player $p$ uses strategy $s$, and let $\beta_{ps}$ be the gap between that strategy's payoff and the best payoff available to the player.

At equilibrium,

$$
z_{ps}\beta_{ps}=0.
$$

If a strategy is used with positive probability, its payoff gap must be zero. If its payoff gap is positive, it is not optimal and its probability must be zero.

The remaining conditions—the probabilities summing to one and expected payoffs being computed from mixed strategies—are polynomial as well.

Computing an exact Nash equilibrium of a three-player game is FIXP-complete. Since the corresponding polynomial system can be compiled into a Leontief market, computing an exact equilibrium of that market is FIXP-hard.

The construction itself may be more worth examining than the complexity label. Fixed-proportion consumption, budget balance, and market clearing form a tiny “language,” yet it is already expressive enough to write arbitrary polynomial equations.

---

## Appendix: Some Prerequisites

### A. What Is a Market Equilibrium?

An exchange market contains goods and agents. Each agent enters with some goods, sells them at market prices, and uses the income to purchase a preferred bundle.

A market equilibrium consists of prices and an allocation satisfying two conditions:

1. Every agent receives her most preferred bundle within her budget.
2. For every good, total demand equals total supply.

The second condition is market clearing. If demand for a good exceeds the available quantity, the current price is not an equilibrium price.

### B. What Is Leontief Utility?

Leontief utility describes perfect complements. If building one computer requires one CPU and two memory modules, then three CPUs and four memory modules can assemble only two complete computers.

The corresponding utility is

$$
\min\left\{\frac{\text{number of CPUs}}{1},\frac{\text{number of memory modules}}{2}\right\}.
$$

An optimal bundle for a Leontief agent therefore preserves fixed proportions.

### C. What Is a Nash Equilibrium?

A Nash equilibrium is a profile of strategy choices such that, given everyone else's strategies, no player can improve her payoff by changing only her own strategy.

Players may also randomize. A mixed strategy assigns a probability to each available action. Every action used with positive probability must be a best response; otherwise the player should shift probability toward a more profitable action.

This best-response condition is exactly the polynomial complementarity equation $z_{ps}\beta_{ps}=0$ used above.

### D. What Is a Reduction?

A reduction translates an instance of one problem into an instance of another while preserving answers: solving the translated problem must allow us to recover a solution to the original one.

Here the source problem is a polynomial system obtained from a three-player game; the target problem is a Leontief exchange market.

If the translation is efficient and the source problem is known to be hard, an efficient algorithm for the target would also solve the source efficiently. Hardness is transferred in this way.

### E. PPAD, FIXP, and ETR on One Page

These are three complexity frameworks.

PPAD commonly describes discrete search problems whose solutions are guaranteed by parity or fixed-point arguments. In this paper, it corresponds to computing an approximate market equilibrium.

FIXP describes exact fixed points of algebraic circuits over the reals. Exact equilibria may contain irrational algebraic numbers, so a finite-precision rational approximation is not the same object.

ETR is the existential theory of the reals. It asks whether a system of polynomial equalities and inequalities has a real solution. Here it corresponds to asking whether an arbitrary given market has an equilibrium at all.

A concise mnemonic is:

$$
\begin{array}{c|c}
\text{Problem} & \text{Complexity framework}\\
\hline
\text{Compute an approximate equilibrium} & \text{PPAD}\\
\text{Compute an exact algebraic equilibrium} & \text{FIXP}\\
\text{Decide whether an equilibrium exists} & \text{ETR}
\end{array}
$$

This is only an aid to intuition. Formal completeness results still depend on the market class, existence promises, and the definition of approximation.

## References

1. Jugal Garg, Ruta Mehta, Vijay V. Vazirani, and Sadra Yazdanbod. [*Settling the Complexity of Leontief and PLC Exchange Markets under Exact and Approximate Equilibria*](https://doi.org/10.1145/3055399.3055474). STOC 2017, pp. 890–901.
2. Sadra Yazdanbod. [*Combinatorial and Exchange Markets*](https://aco.gatech.edu/sites/default/files/images/yazdanbod-thesis.pdf). PhD thesis, Georgia Institute of Technology, 2017. Chapter 3.
