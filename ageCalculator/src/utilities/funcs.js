export const regexes = {
  day: /^(?:[0-9]|[1-2][0-9]|31||30)$/,
  month: /^(?:[1-9]|1[0-2])$/,
  year: /^(20([0-1][0-9]|2[0-3])$|^(2000)|[0-1]?[0-9]{1,3})$/,
};

export const isValidDate=(day, month, year) =>{
    const monthDays = {
      1: 31,
      2: year % 4 === 0 ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };
    
    if (day > monthDays[month]) {
      return false;
    }
  
    return true;
  }

  export const ageCalculator = (day, month, year) => {
    const date = new Date(`${year}-${month}-${day}`);
    const now = new Date();
    const diff = now - date;
    const diffYear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); // Kalan yılı hesapla
    const diffMonth = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    ); // Kalan ayı hesapla
    const diffDay = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    ); // Kalan günü hesapla
  
  
    return { diffYear, diffMonth, diffDay };
  };