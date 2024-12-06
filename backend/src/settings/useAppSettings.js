const useAppSettings = () => {
  let settings = {};
  settings['tanbits_app_email'] = 'noreply@tanbitsapp.com';
  settings['tanbits_base_url'] = 'https://cloud.tanbitsapp.com';
  return settings;
};

module.exports = useAppSettings;
