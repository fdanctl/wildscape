export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const isFormFilled = (obj: Record<string, any>) => {
  for (const field in obj) {
    if (obj.hasOwnProperty(field)) {
      const value = obj[field];
      if (value?.length === 0) {
        return false
      }
    }
  }
  return true
};
