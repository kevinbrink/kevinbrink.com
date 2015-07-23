# Use environment for number of processes for each dyno, or fallback to 2
workers Integer(ENV['WEB_CONCURRENCY'] || 2)
# Use environment for number of threads per process, or fallback to 5
threads_count = Integer(ENV['MAX_THREADS'] || 5)
threads threads_count, threads_count

# Increases startup time of processes
preload_app!

# Use default rack settings
rackup      DefaultRackup
# Set the port, or fallback to 3000
port        ENV['PORT']     || 3000
# Use the RACK_ENV for environment; fallback to development
environment ENV['RACK_ENV'] || 'development'

# Every time a process starts up...
on_worker_boot do
  # Set up a database connection
  ActiveRecord::Base.establish_connection
end
