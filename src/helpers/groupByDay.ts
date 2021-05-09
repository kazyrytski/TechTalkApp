export default function groupByDay(array) {
    // const groupedByDay = array.reduce((acc, obj) => {
    //     const property = (new Date(obj["dates"][0])).getTime();
    //     acc[property] = acc[property] || [];
    //     acc[property].push(obj);
    //     return acc;
    // }, []);
    // const sortedByMonth = Object
    //     .keys(groupedByDay)
    //     .sort((a, b) => {
    //     return +a - +b
    //     })
    //     .reduce((acc, el) => {
    //         acc[el] = groupedByDay[el]
    //         return acc
    //     }, {})
    const sortedByDay = array.sort((a, b) => {
        return +(new Date(a.dates[0])).getTime() - +(new Date(b.dates[0])).getTime()
    })
    return sortedByDay
}