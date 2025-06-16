export function SchemaqueryBuilder(tableName,columns){
  const colsDeff = columns.map(col=>{
    const colName = col.columnName.trim();
    const colType = col.type.trim();
    if(!colName||!colType){
      throw new Error("Invalid col name or type");
    }
    return `${colName} ${colType}`;
  });
  const sql = `CREATE TABLE ${tableName}(${colsDeff.join(', ')})`
  return sql;
}
