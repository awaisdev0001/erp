const useDate = ({ settings }) => {
  const { tanbits_app_date_format } = settings;

  const dateFormat = tanbits_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
