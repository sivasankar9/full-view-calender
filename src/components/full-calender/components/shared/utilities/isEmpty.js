export const isEmpty = value =>
!(/^\s*$/.test(value)) && !(value === null);

export const isValidPassword = value =>
!(/^\s*$/.test(value)) && !(value === null) && !(value.length>=7);
