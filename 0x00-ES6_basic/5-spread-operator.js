export default function concatArrays(array1, array2, string) {
    let khalid_list = [];
    khalid_list.push(...array1);
    khalid_list.push(...array2);
    khalid_list.push(...string);
    return khalid_list;
}
