export function parseDiceExpresion(input) {
    const dices = Array.from(input.matchAll(/\dd\d*/g));

    const parsedDices = dices.map((raw) => {
        const [times, sides] = raw[0].split("d");
        return {
            times: Number(times),
            sides: Number(sides),
            original: raw[0]
        }
    });
    
    const rolledDices = parsedDices.map((dice) => {
        const values = new Array(dice.times).fill(0).map(() => Math.floor(Math.random() * dice.sides + 1));
        console.log(values);
        return {
            values,
            total: values.reduce((previous, current) => previous + current, 0),
            original: dice.original,
        };
    });

    return rolledDices;
}