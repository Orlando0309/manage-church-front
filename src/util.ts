export const toLabelValue = (
    data: any[],
    labelKey: string,
    valueKey: string
  ): { label: string; value: any }[] => {
    if (!Array.isArray(data)) {
      throw new Error("Invalid data: input should be an array.");
    }
  
    return data.map(item => {
      if (item == null || typeof item !== 'object') {
        throw new Error("Invalid item: each item should be a non-null object.");
      }
  
      const label = item[labelKey];
      const value = item[valueKey];
  
      if (label == null || value == null) {
        throw new Error("Invalid data: label or value key not found in item.");
      }
  
      return {
        label: String(label),
        value
      };
    });
  };
export const toCode=(root: string, code: number): string => {
  let defaultIndex=root.length-1
  for(let i=root.length-1;i>=0; i--){
    if(root[i]!=='0'){
      defaultIndex=i
      break;
    }
  }
  const strnewCode=root.substring(0,defaultIndex+1);
  return strnewCode+code.toString();
}