export const transformPropToNumber = (obj: any, ...props: string[]) => {
    for (const prop of props) {
        if (obj[prop]) {
            obj[prop] = Number(obj[prop]);
        }
    }

    return obj;
};