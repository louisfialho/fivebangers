Sentry.init do |config|
  config.dsn = 'https://d8c72ab072d247fbb3fc56d192554298@o4504542136500224.ingest.sentry.io/4504542138073088'
  config.breadcrumbs_logger = [:active_support_logger, :http_logger]

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |context|
    true
  end
end
