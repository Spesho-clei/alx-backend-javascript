export default function cleanSet(set, startString) {
    const values = [];
    set.forEach(value => {
        if (value.startsWith(startString)) {
            values.push(value.slice(startString.length));
        }
    });
    return values.join('-');
}
