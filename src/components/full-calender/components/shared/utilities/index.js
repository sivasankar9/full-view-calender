export const convert=(str) =>{
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);

    return [date.getFullYear(), mnth, day].join("-");
  };

export const isEmpty = value =>
!(/^\s*$/.test(value)) && !(value === null);

export const isValidPassword = value =>
!(/^\s*$/.test(value)) && !(value === null) && !(value.length>=7);

export const color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1, 6);

export const ObjId = Math.random().toString(36).substring(7);
