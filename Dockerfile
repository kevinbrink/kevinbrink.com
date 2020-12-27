FROM ruby:2.6.6

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

ENV APP_HOME /myapp

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY Gemfile* $APP_HOME/

# --- Add this to your Dockerfile ---
ENV BUNDLE_GEMFILE=$APP_HOME/Gemfile \
  BUNDLE_JOBS=2 \
  BUNDLE_PATH=/bundle

RUN bundle install

COPY . $APP_HOME
