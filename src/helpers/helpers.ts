export  function   groupArray(array: any, rows: number) : any{

    let talents = [...Array(array.length/rows)]
    const talentsRow =   talents.map( (row, idx) => array.slice(idx * rows, idx * rows + rows) ); 
    return talentsRow;

}